const btnTransition = document.querySelector('#btnTransition');
const nav = document.querySelector('nav');

btnTransition.addEventListener('click', () => {
  
  nav.classList.toggle("is-invisible");
  nav.classList.toggle("visibility");
  
});