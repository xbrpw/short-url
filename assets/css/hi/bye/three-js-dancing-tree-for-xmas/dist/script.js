import * as THREE from "https://cdn.skypack.dev/three@0.135.0";
/*import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  BlendFunction,
  KernelSize
} from "https://cdn.skypack.dev/postprocessing";*/
import { gsap } from "https://cdn.skypack.dev/gsap@3.8.0";

class World {
  constructor({
    canvas,
    width,
    height,
    cameraPosition,
    fieldOfView = 75,
    nearPlane = 0.1,
    farPlane = 100 })
  {
    this.parameters = {
      count: 1500,
      max: 12.5 * Math.PI,
      a: 2,
      c: 4.5 };

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#00101a");
    this.clock = new THREE.Clock();
    this.data = 0;
    this.time = { current: 0, t0: 0, t1: 0, t: 0, frequency: 0.0005 };
    this.angle = { x: 0, z: 0 };
    this.width = width || window.innerWidth;
    this.height = height || window.innerHeight;
    this.aspectRatio = this.width / this.height;
    this.fieldOfView = fieldOfView;
    this.camera = new THREE.PerspectiveCamera(
    this.fieldOfView,
    this.aspectRatio,
    nearPlane,
    farPlane);

    this.camera.position.set(
    cameraPosition.x,
    cameraPosition.y,
    cameraPosition.z);

    this.scene.add(this.camera);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      powerPreference: "high-performance",
      antialias: false,
      stencil: false,
      depth: false });

    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.timer = 0;
    this.addToScene();
    this.addButton();

    this.render();
    // this.postProcessing();
    this.listenToResize();
  }
  start() {}
  render() {
    this.renderer.render(this.scene, this.camera);
    this.composer && this.composer.render();
  }
  loop() {
    this.time.elapsed = this.clock.getElapsedTime();
    this.time.delta = Math.min(
    60,
    (this.time.current - this.time.elapsed) * 1000);

    if (this.analyser && this.isRunning) {
      this.time.t = this.time.elapsed - this.time.t0 + this.time.t1;
      this.data = this.analyser.getAverageFrequency();
      this.data *= this.data / 2000;
      this.angle.x += this.time.delta * 0.001 * 0.63;
      this.angle.z += this.time.delta * 0.001 * 0.39;
      const justFinished = this.isRunning && !this.sound.isPlaying;
      if (justFinished) {
        this.time.t1 = this.time.t;
        this.audioBtn.textContent = "Play again";
        this.audioBtn.disabled = false;
        this.isRunning = false;
        const tl = gsap.timeline();
        this.angle.x = 0;
        this.angle.z = 0;
        tl.to(this.camera.position, {
          x: 0,
          z: 4.5,
          duration: 4,
          ease: "expo.in" });

        tl.to(this.audioBtn, {
          opacity: () => 1,
          duration: 1,
          ease: "power1.out" });

      } else {
        this.camera.position.x = Math.sin(this.angle.x) * this.parameters.a;
        this.camera.position.z = Math.min(
        Math.max(Math.cos(this.angle.z) * this.parameters.c, -4.5),
        4.5);

      }
    }
    this.camera.lookAt(this.scene.position);
    this.spiralMaterial.uniforms.uTime.value +=
    this.time.delta * this.time.frequency * (1 + this.data * 0.2);
    this.extMaterial.uniforms.uTime.value +=
    this.time.delta * this.time.frequency;
    //this.mesh.rotation.y += 0.0001 * this.time.delta * data
    for (const octa of this.octas.children) {
      octa.rotation.y += this.data ?
      0.001 * this.time.delta * this.data / 5 :
      0.001 * this.time.delta;
    }
    this.octas.rotation.y -= 0.0002 * this.time.delta;
    this.externalSphere.rotation.y += 0.0001 * this.time.delta;
    this.render();

    this.time.current = this.time.elapsed;
    requestAnimationFrame(this.loop.bind(this));
  }
  listenToResize() {
    window.addEventListener("resize", () => {
      // Update sizes
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // Update camera
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();

      // Update renderer
      this.renderer.setSize(this.width, this.height);
      this.composer.setSize(this.width, this.height);
    });
  }
  addSpiral() {
    this.spiralMaterial = new THREE.ShaderMaterial({
      vertexShader: document.getElementById("vertexShader").textContent,
      fragmentShader: document.getElementById("fragmentShader").textContent,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 0.045 } },

      depthWrite: false,
      blending: THREE.AdditiveBlending });

    const count = this.parameters.count; //2000
    const scales = new Float32Array(count * 1);
    const colors = new Float32Array(count * 3);
    const phis = new Float32Array(count);
    const randoms = new Float32Array(count);
    const randoms1 = new Float32Array(count);
    const colorChoices = ["pink", "green", "cyan", "wheat", "red"];

    const squareGeometry = new THREE.PlaneGeometry(1, 1);
    this.instancedGeometry = new THREE.InstancedBufferGeometry();
    Object.keys(squareGeometry.attributes).forEach(attr => {
      this.instancedGeometry.attributes[attr] = squareGeometry.attributes[attr];
    });
    this.instancedGeometry.index = squareGeometry.index;
    this.instancedGeometry.maxInstancedCount = count;

    for (let i = 0; i < count; i++) {
      const i3 = 3 * i;
      const colorIndex = Math.floor(Math.random() * colorChoices.length);
      const color = new THREE.Color(colorChoices[colorIndex]);
      phis[i] = Math.random() * this.parameters.max;
      randoms[i] = Math.random();
      scales[i] = Math.random();
      colors[i3 + 0] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    this.instancedGeometry.setAttribute(
    "phi",
    new THREE.InstancedBufferAttribute(phis, 1, false));

    this.instancedGeometry.setAttribute(
    "random",
    new THREE.InstancedBufferAttribute(randoms, 1, false));

    this.instancedGeometry.setAttribute(
    "aScale",
    new THREE.InstancedBufferAttribute(scales, 1, false));

    this.instancedGeometry.setAttribute(
    "aColor",
    new THREE.InstancedBufferAttribute(colors, 3, false));

    this.spiral = new THREE.Mesh(this.instancedGeometry, this.spiralMaterial);
    console.log(this.spiral);
    this.scene.add(this.spiral);
  }

  addExternalSphere() {
    this.extMaterial = new THREE.ShaderMaterial({
      vertexShader: document.getElementById("vertexShaderExt").textContent,
      fragmentShader: document.getElementById("fragmentShaderExt").textContent,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("orange") } },

      wireframe: true,
      transparent: true });

    const geometry = new THREE.SphereGeometry(6, 128, 128);
    this.externalSphere = new THREE.Mesh(geometry, this.extMaterial);
    this.scene.add(this.externalSphere);
  }
  addOctahedron({ color = "white", scale, position = [0, 0, 0] }) {
    const octa = new THREE.Mesh(
    this.octaGeometry,
    new THREE.MeshBasicMaterial({
      wireframe: true,
      color }));


    octa.scale.set(...scale);
    octa.position.set(...position);
    this.octas.add(octa);
  }
  addOctahedrons() {
    this.octas = new THREE.Group();
    this.octaGeometry = new THREE.OctahedronGeometry(0.2, 0);
    this.addOctahedron({ color: "red", scale: [1, 1.4, 1] });
    this.addOctahedron({
      color: "tomato",
      position: [0, 0.85, 0],
      scale: [0.5, 0.7, 0.5] });


    this.addOctahedron({
      color: "red",
      position: [1, -0.75, 0],
      scale: [0.5, 0.7, 0.5] });

    this.addOctahedron({
      color: "tomato",
      position: [-0.75, -1.75, 0],
      scale: [1, 1.2, 1] });

    this.addOctahedron({
      color: "red",
      position: [0.5, -1.2, 0.5],
      scale: [0.25, 0.37, 0.25] });

    this.scene.add(this.octas);
  }
  addToScene() {
    this.addSpiral();
    this.addExternalSphere();
    this.addOctahedrons();
  }
  addButton() {
    this.audioBtn = document.querySelector("button");
    this.audioBtn.addEventListener("click", () => {
      this.audioBtn.disabled = true;
      if (this.analyser) {
        this.sound.play();
        this.time.t0 = this.time.elapsed;
        this.data = 0;
        this.isRunning = true;
        gsap.to(this.audioBtn, {
          opacity: 0,
          duration: 1,
          ease: "power1.out" });

      } else {
        this.audioBtn.textContent = "Loading...";
        this.loadMusic().then(() => {
          console.log("music loaded");
        });
      }
    });
  }

  loadMusic() {
    return new Promise(resolve => {
      const listener = new THREE.AudioListener();
      this.camera.add(listener);
      // create a global audio source
      this.sound = new THREE.Audio(listener);
      const audioLoader = new THREE.AudioLoader();
      audioLoader.load(
      "https://assets.codepen.io/74321/short-snow_01.mp3",
      buffer => {
        this.sound.setBuffer(buffer);
        this.sound.setLoop(false);
        this.sound.setVolume(0.5);
        this.sound.play();
        this.analyser = new THREE.AudioAnalyser(this.sound, 32);
        // get the average frequency of the sound
        const data = this.analyser.getAverageFrequency();
        this.isRunning = true;
        this.t0 = this.time.elapsed;
        resolve(data);
      },
      progress => {
        gsap.to(this.audioBtn, {
          opacity: () => 1 - progress.loaded / progress.total,
          duration: 1,
          ease: "power1.out" });

      },

      error => {
        console.log(error);
      });

    });
  }
  /*postProcessing() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(
      new EffectPass(
        this.camera,
        new BloomEffect({
          blendFunction: BlendFunction.SCREEN,
          kernelSize: KernelSize.MEDIUM,
          luminanceThreshold: 0.4,
          intensity: 2.6,
          luminanceSmoothing: 0.4,
          height: 480
        })
      )
    );
  }*/}


const world = new World({
  canvas: document.querySelector("canvas.webgl"),
  cameraPosition: { x: 0, y: 0, z: 4.5 } });


world.loop();