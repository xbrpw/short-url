console.log('hi.');
const WEIGHTS = {
  MIN: 100,
  MAX: 900,
};
const SLANT = {
  MIN: 1,
  MAX: 12,
}
const WIDTH = {
  MIN: 75,
  MAX: 100,
}
let offset = 0;
Splitting();

const letters = document.querySelectorAll('.char');
let numLetters = letters.length;

// letters.forEach((letter, index) => {
//   const indexNorm = index / letters.length;
//   const weight = map(indexNorm, 0, 1, WEIGHTS.MIN, WEIGHTS.MAX);
//   letter.style.setProperty('--text-weight', weight);
// });

window.requestAnimationFrame(loop);

function loop() {
  letters.forEach((letter, index) => {
    let offsetIndex = (index + offset) % numLetters;
    let indexNorm = offsetIndex / numLetters;
    indexNorm = mirror(indexNorm);
    const weight = map(indexNorm, 0, 1, WEIGHTS.MIN, WEIGHTS.MAX);
    const slant = map(indexNorm, 0, 1, SLANT.MIN, SLANT.MAX);
    const width = map(indexNorm, 0, 1, WIDTH.MIN, WIDTH.MAX);
    const hue = map(indexNorm, 0, 1, 0, 255);
    const glowSize = map(indexNorm, 0, 1, 0, 100);
    letter.style.setProperty('--text-weight', weight);
    letter.style.setProperty('--text-slant', slant);
    letter.style.setProperty('--text-width', width);
    letter.style.setProperty('--glow-hue', hue);
    letter.style.setProperty('--glow-size', glowSize);
  });
  offset += 0.125;
  requestAnimationFrame(loop);
}

// HELPERS
function map(value, min1, max1, min2, max2) {
  return (value - min1) * (max2 - min2) / (max1 - min1) + min2;
}
function mirror(val) {
  return Math.abs(val * 2 - 1) * -1 + 1;
}