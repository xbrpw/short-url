const slider = document.getElementById('fontSize');
const display = document.getElementById('fontSizeDisplay');

slider.addEventListener('input', (e) => {
  const size = `${e.target.value}px`;
  
  display.innerHTML = size;
  
  document.body.style.fontSize = size;
})