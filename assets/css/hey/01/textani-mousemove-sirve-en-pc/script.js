const position = document.documentElement;

position.addEventListener('mousemove', (e) => {
  position.style.setProperty('--x', e.clientX + 'px');
});

const span = document.querySelectorAll('span:nth-child(odd)');

console.log(span);

for (let i = 0; i < span.length; i++) {
  //   span[i].style.filter = `hue-rotate(${i % 360}deg)`;
  span[i].style.textShadow = `1px 0 ${
    5 + Math.random().toFixed(2) * 5
  }px rgba(255, 255, 255, ${0.5 + Math.random().toFixed(2) / 2})`;
}