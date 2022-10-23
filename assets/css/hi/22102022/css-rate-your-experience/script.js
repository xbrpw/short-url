let app = document.querySelector('.app');
let rated = () => {
  app.classList.add('is-rated');
  app.removeEventListener('change', rated);
};
app.addEventListener('change', rated);