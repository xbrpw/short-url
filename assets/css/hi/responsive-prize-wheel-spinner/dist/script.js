const spinContainer = document.getElementById('container');
const spinBtn = document.getElementById('spin');
const spinWheel = document.getElementById('wheel');

spinBtn.addEventListener('click', e => {
  const lengthOfSpin = getComputedStyle(spinWheel).getPropertyValue('--spin-time');
  const startingDeg = Number(spinWheel.dataset.currDeg) || 500;
  const randDeg = startingDeg + Math.round(Math.random() * (3000 - 360) + 360);

  spinContainer.classList.add('is-spinning');
  spinWheel.style.transform = `rotate(${randDeg}deg)`;

  spinWheel.dataset.currDeg = randDeg;

  setTimeout(() => {
    spinContainer.classList.remove('is-spinning');
  }, lengthOfSpin);
});