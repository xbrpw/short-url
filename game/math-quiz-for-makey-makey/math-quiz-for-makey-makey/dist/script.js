/* TODO
* Timer tar inte slut?
* Välja vilka tabeller
* INte ha två lika fake alt. while == el nåt...
* Betona highscore på nåt sätt
*/

// Settings
let timeLimit = 30;

// Customizable shortcuts for makey makey
let alt1Key = "ArrowLeft";
let alt2Key = " ";
let alt3Key = "ArrowRight";

// Cool globals
let score = 0;
let gameStatus = "start"; // or 'game', or 'wait'
let results = []; // history for this game session
let timer;

let screenStart = document.getElementById("startScreen");
let screenWait = document.getElementById("waitScreen");
let screenGame = document.getElementById("gameScreen");


document.addEventListener('keydown', function (e) {

  if (gameStatus === "start" && e.key === "Enter") {
    startGame();
    
  } else if (gameStatus === "game") {  

    let alt1Button = document.getElementById("answer1");
    let alt2Button = document.getElementById("answer2");
    let alt3Button = document.getElementById("answer3");
    if (e.key === alt1Key) {
        alt1Button.click();
      } else if (e.key === alt2Key) {
        alt2Button.click();
      } else if (e.key === alt3Key) {
        alt3Button.click();
      }
    }
});

function startGame() {
  generateQuestion();
  updateGameStatus("game");
  startTimer();
}

function startTimer() {
  let sec = 1;
  timer = setInterval(() => {
    let pie = (6.3/timeLimit)*sec;
    document.getElementById("pie").style.strokeDasharray = pie + ' ' + 6.3;
    sec++;
    if(sec > timeLimit) {
      reset();
    }
  }, 1000);  
}
function stopTimer () {
  clearInterval(timer);
}
function reset() {
  updateGameStatus("start");
  updateSessionHistory();
  score = 0;
  stopTimer();
  displayScore(score);
}
function updateSessionHistory() {
  results.push(score);
  let resultsElement = document.getElementById("results");
  let toDisplay = "";
  for (let i = results.length-1; i >= 0; i --) {
    toDisplay += results[i] + " pts<br>";
  }
  resultsElement.innerHTML = toDisplay;
}
function updateGameStatus(status) {
  gameStatus = status;
  updateScreen();
}
function updateScreen () {
  if (gameStatus === "start") {
    gameScreen.classList.add("hide");
    waitScreen.classList.add("hide");
    startScreen.classList.remove("hide");
    
  } else if (gameStatus === "wait") {
    gameScreen.classList.add("hide");
    waitScreen.classList.remove("hide");
    startScreen.classList.add("hide");
    
  } else if (gameStatus === "game") {
    gameScreen.classList.remove("hide");
    waitScreen.classList.add("hide");
    startScreen.classList.add("hide");
  }
}

function questionResult() {
  updateGameStatus("wait");
  addScore();
  let timeout = window.setTimeout(() => {
    generateQuestion();
    updateGameStatus("game");
  }, 500);
}

function submitAnswer (pts) {
  updateGameStatus("wait");
  addScore(pts);
  let time = pts>0 ? 0 : 500;
  
  let timeout = window.setTimeout(() => {
    generateQuestion();
    updateGameStatus("game");
  }, time);
}

function displayScore () {
  let str = score + " pts";
  document.getElementById("score").innerHTML = str;
}
function addScore(pts) {
  score += pts;
  displayScore(score);
}

function generateQuestion () {
  let nbr1 = getRandomInt(1, 10);
  let nbr2 = getRandomInt(1, 10);
  let correctAnswer = nbr1 * nbr2;
  
  let nbr1Element = document.getElementById("nbr1");
  let nbr2Element = document.getElementById("nbr2");
  
  nbr1Element.innerHTML = nbr1;
  nbr2Element.innerHTML = nbr2;
  generateAnswers(correctAnswer);
}

function generateAnswers(correctAnswer) {

  let fakeAnswer1 = getFake(correctAnswer);
  let fakeAnswer2 = getFake(correctAnswer);
    
  let answers = [[fakeAnswer1, -1],
                [fakeAnswer2, -1],
                [correctAnswer, 1]];
  answers = shuffleArray(answers);
  
  let alt1Element = document.getElementById("answer1");
  let alt2Element = document.getElementById("answer2");
  let alt3Element = document.getElementById("answer3");
  
  alt1Element.innerHTML = answers[0][0];
  alt2Element.innerHTML = answers[1][0];
  alt3Element.innerHTML = answers[2][0];

  alt1Element.onclick = () => {
    submitAnswer(answers[0][1])
  };
  alt2Element.onclick = () => {
    submitAnswer(answers[1][1])
  };
  alt3Element.onclick = () => {
    submitAnswer(answers[2][1])
  };
  gameStatus = "game";
}

function getFake(correctAnswer) {
  let fake, minVal, maxVal;
  
   if (correctAnswer <= 10) {
    minVal = 1;
    maxVal = 11;
  } else {
    minVal = -5;
    maxVal = 5;
  }
  fake = correctAnswer + getRandomInt(minVal, maxVal);
  fake = fake === 0 ? 1 : fake;
  fake = fake === correctAnswer ? fake + 1 : fake;
  
  return fake;
}
// My go-to-random-function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Found: https://stackoverflow.com/a/12646864
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}