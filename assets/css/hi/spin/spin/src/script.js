const prizes = [
  "СКИДКА 50 000",
  "СКИДКА 15% на пылесосы",
  "Скидка 30% на гриль",
  "При покупке кофемашины",
  "СКИДКА 10% на весь ассортимент",
  "ПОДАРОК тепловентилятор",
  "При покупке 2-х аксессуаров скидка 50%"
];

const container = document.querySelector(".container");
const spin = container.querySelector(".spin");
const btn = container.querySelector(".btn-spin");
const resultText = document.querySelector(".result-text");
const prizeRotate = 360 / prizes.length;
const animationClass = "animation";
let rotation = 0;

btn.addEventListener("click", () => {
  resultText.innerHTML = "";
  rotation = Math.floor(Math.random() * 360 + 740);
  container.classList.add(animationClass);
  spin.style.setProperty("--rotate", rotation);
});

spin.addEventListener("transitionend", () => {
  rotation %= 360;
  const prizeIndex = Math.floor(rotation / prizeRotate);
  resultText.innerHTML = prizes[prizeIndex];
  container.classList.remove(animationClass);
  spin.style.setProperty("--rotate", rotation );
});
