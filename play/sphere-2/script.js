let SCENE;
let CAMERA;
let RENDERER;
let CONTROLS;
let COMPOSER;

let TIME = 0;


main();


function main() {
  init();
  animate();
}


function init() {
  initScene();
  initCamera();
  initRenderer();
  initComposer();
  initControls();
  initEventListeners();

  createObjects();

  document.querySelector('.canvas-container').appendChild(RENDERER.domElement);
}


function initScene() {
  SCENE = new THREE.Scene();

  initLights();
}


function initLights() {
  const point = new THREE.PointLight(0xffffff, 1, 0);
  point.position.set(0, 100, 50);
  SCENE.add(point);
}


function initCamera() {
  CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  CAMERA.position.y = 100;
  CAMERA.position.z = 100;
}


function initRenderer() {
  RENDERER = new THREE.WebGLRenderer({ alpha: true });
  RENDERER.setPixelRatio(window.devicePixelRatio);
  RENDERER.setSize(window.innerWidth, window.innerHeight);
  RENDERER.shadowMap.enabled = true;
  RENDERER.shadowMapSort = true;
  RENDERER.setClearColor(0x0e050f, 1);
}


function initComposer() {
  COMPOSER = new THREE.EffectComposer(RENDERER);
  COMPOSER.setSize(window.innerWidth, window.innerHeight);

  const renderPass = new THREE.RenderPass(SCENE, CAMERA);
  COMPOSER.addPass(renderPass);

  const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 1, 0.1);
  bloomPass.renderToScreen = true;
  COMPOSER.addPass(bloomPass);
}


function initControls() {
  CONTROLS = new THREE.OrbitControls(CAMERA);
  CONTROLS.enableZoom = false;
  CONTROLS.minPolarAngle = Math.PI * 1 / 4;
  CONTROLS.maxPolarAngle = Math.PI * 3 / 4;
  CONTROLS.update();
}


function initEventListeners() {
  window.addEventListener('resize', onWindowResize);

  onWindowResize();
}


function onWindowResize() {
  CAMERA.aspect = window.innerWidth / window.innerHeight;
  CAMERA.updateProjectionMatrix();

  RENDERER.setSize(window.innerWidth, window.innerHeight);
  COMPOSER.setSize(window.innerWidth, window.innerHeight);
}


function animate() {
  requestAnimationFrame(animate);
  CONTROLS.update();
  TIME += 0.005;
  updateUniforms();
  render();
}


function updateUniforms() {
  SCENE.traverse(function (child) {
    if (child instanceof THREE.Mesh &&
    child.material.type === 'ShaderMaterial') {
      child.material.uniforms.uTime.value = TIME;
      child.material.needsUpdate = true;
    }
  });
}


function render() {
  CAMERA.lookAt(SCENE.position);
  COMPOSER.render(SCENE, CAMERA);
}


function createObjects() {
  const geometry1 = new THREE.SphereBufferGeometry(25, 64, 64);
  const geometry2 = new THREE.SphereBufferGeometry(30, 64, 64);

  const phongMaterial = new THREE.MeshPhongMaterial({
    color: 0x782b7f,
    emissive: 0x180819,
    transparent: true,
    opacity: .5 });


  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: TIME } },

    transparent: true,
    side: THREE.DoubleSide,
    vertexShader: document.getElementById('sphere-vertex-shader').textContent,
    fragmentShader: document.getElementById('sphere-fragment-shader').textContent });


  const sphere1 = new THREE.Mesh(geometry1, phongMaterial);
  const sphere2 = new THREE.Mesh(geometry2, shaderMaterial);

  SCENE.add(sphere1);
  SCENE.add(sphere2);
}