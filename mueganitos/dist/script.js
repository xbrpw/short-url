// select elements
const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

// init cursor position
let cursorPos = { x: 0, y: 0 };

// get window size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function setWindowSize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
};

function mousemove(e) {
  cursorPos = { x: e.clientX, y: e.clientY };
  initFolow();
}

function touchmove(e) {
  cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY };
  initFolow();
}

const followCursor = (el, xRatio, yRatio) => {
  const elOffset = el.getBoundingClientRect();
  const centerX = elOffset.x + elOffset.width / 2;
  const centerY = elOffset.y + elOffset.height / 2;
  const distanceLeft = Math.round((cursorPos.x - centerX) * 100 / window.innerWidth);
  const distanceTop = Math.round((cursorPos.y - centerY) * 100 / window.innerHeight);
  el.style.transform = `translate(${distanceLeft / xRatio}px, ${distanceTop / yRatio}px)`;
};

const initFolow = () => {
  if (ears) followCursor(ears, -2.8, -2.8);
  if (head) followCursor(head, 6, 6);
  if (eyes) followCursor(eyes, 1.8, 1.8);
  if (snout) followCursor(snout, 1.5, 1.7);
  if (nose) followCursor(nose, 1, 1);
};

window.addEventListener('resize', setWindowSize);
window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);