let SCENE;
let CAMERA;
let RENDERER;
let CONTROLS;
let COMPOSER;
let SHADER_MATERIAL;

let TIME = 10; // Let it be non zero at start


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
  CAMERA.position.x = 100;
  CAMERA.position.z = 100;
}


function initRenderer() {
  RENDERER = new THREE.WebGLRenderer({ alpha: true });
  RENDERER.setPixelRatio(window.devicePixelRatio);
  RENDERER.setSize(window.innerWidth, window.innerHeight);
  RENDERER.shadowMap.enabled = true;
  RENDERER.shadowMapSort = true;
  RENDERER.setClearColor(0x220055, 0.3);
}


function initComposer() {
  COMPOSER = new THREE.EffectComposer(RENDERER);
  COMPOSER.setSize(window.innerWidth, window.innerHeight);

  const renderPass = new THREE.RenderPass(SCENE, CAMERA);
  COMPOSER.addPass(renderPass);

  const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 1, 0.1);
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
  TIME = performance.now() / 4000;
  updateUniforms();
  render();
}


function updateUniforms() {
  if (SHADER_MATERIAL) {
    SHADER_MATERIAL.uniforms.uTime.value = TIME;
  }
}


function render() {
  CAMERA.lookAt(SCENE.position);
  COMPOSER.render(SCENE, CAMERA);
}


function createObjects() {
  const geometry = new THREE.CubeGeometry(20, 40, 20, 1, 20, 1);

  const material = new THREE.MeshPhongMaterial();

  material.onBeforeCompile = shader => {
    shader.vertexShader = document.getElementById('sphere-vertex-shader').textContent;
    shader.uniforms.uTime = { value: TIME };

    SHADER_MATERIAL = shader;
  };

  const cube = new THREE.Mesh(geometry, material);

  SCENE.add(cube);
}