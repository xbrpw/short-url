document.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--mouse-x', e.x);
  document.documentElement.style.setProperty('--mouse-y', e.y);
});
