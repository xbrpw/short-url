const questions = [
{
  quest: "What is 20-19?",
  options: ["1","2","3","4"],
  correct: "1"
},
{
  quest: "Brendan Eich is founder of?",
  options: ["Javascript","Python","Ruby","PHP"],
  correct: "Javascript"
}
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
  load_question(),result();
});

function load_question(){
  document.querySelector("#question").innerHTML = questions[question_number].quest;
  const options = document.querySelector("#options");
  options.innerHTML = "";
  for(const option of questions[question_number].options){
    options.innerHTML += `<button class='option'>${option}</button>`;
  }

  document.querySelectorAll(".option").forEach(option => {
      option.onclick = () => {
          if (option.textContent == questions[question_number].correct) {
              correct++;
          }
          question_number++;
          result();
          if (question_number != questions.length) { // I it's the last question, don't load question
              load_question();
          }
          else {
              complete();
          }
      }
  });
}

function result(){
  document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
}

function complete() {
    document.querySelector("#question").innerHTML = `Quiz complete! Refresh to restart!`;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
    document.querySelector("#result").style.fontSize = "50px";
}
