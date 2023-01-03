let sound = new Howl({
  src: ['./sprite.mp3'],
  sprite: {
    whatuwant: [0, 7130],
    introbg: [16166, 24429, true],
    main: [42446, 42170, true],
    hit: [7226, 271],
    hit2: [7606, 344],
    finalblow: [8235, 1500] } });



let bgmId;

Howler.volume(0.5);

const container = document.getElementById("bm_animation");
const animData = {
  container: container,
  renderer: "svg",
  loop: true,
  prerender: false,
  autoplay: true,
  autoloadSegments: false,
  path: "./fridge-data.json" };


let anim;
let dmgCounter = 0;
let segments = [
[[150, 169], [170, 179]],
[[180, 194], [195, 204]],
[[205, 218], [219, 228]],
[[229, 234], [235, 244]],
[[245, 255], [256, 265]],
[[266, 271], [272, 281]],
[[282, 295], [296, 306]],
[[306, 320], [321, 330]],
[[331, 425], [426, 435]],
[[436, 495], [170, 179]]];

let isHitting = false;

anim = bodymovin.loadAnimation(animData);
anim.addEventListener("DOMLoaded", startAnimation);
bm_animation.onclick = hit;

const init = () => {
  sound.once("load", function () {
    startAnimation();
  });
};

function hitComplete() {
  dmgCounter++;
  isHitting = false;
  anim.removeEventListener("loopComplete", hitComplete);
}

function hit() {
  if (isHitting) {
    return;
  }

  if (dmgCounter === 0) {
    sound.stop(bgmId);
    bgmId = sound.play('main');
  }

  if (dmgCounter >= segments.length) {
    dmgCounter = 1;
  }

  sound.play('hit');

  isHitting = true;

  anim.playSegments([segments[dmgCounter][0], segments[dmgCounter][1]], true);

  console.log(dmgCounter);

  if (dmgCounter == 8) {sound.play('finalblow');}
  anim.addEventListener("loopComplete", hitComplete);
}

function startAnimation() {
  bgmId = sound.play('introbg');
  sound.play('whatuwant');
  anim.playSegments([[0, 49], [50, 149]], true);
}