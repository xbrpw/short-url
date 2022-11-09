const cardsNum = document.querySelectorAll('.slot').length;
const cardAssigned = document.getElementById('card-assigned');
const board = document.getElementById('board');
const btnRematch = document.getElementById('btn-rematch');
const btnMode = document.getElementById('btn-mode');

const getRand = limit => Math.round(Math.random() * limit);

cardAssigned.className = 'card card--assigned card-' + getRand(cardsNum);

btnRematch.onclick = () => {
  cardAssigned.className = 'card card--assigned card-' + getRand(cardsNum);
};

btnMode.onclick = () => { board.classList.toggle('special') };