var resizeCounter = 0;
var matchCounter = 0;


function resizeCallback() {
  resizeCounter += 1;
  document.querySelector("span.resize").textContent = resizeCounter;
}

let myMediaQuery = window.matchMedia('(min-width: 600px)');

function matchMediaCallback(myMediaQuery) {
  matchCounter += 1;
  document.querySelector("span.match").textContent = matchCounter;
}

myMediaQuery.addEventListener('change', matchMediaCallback);

matchMediaCallback(myMediaQuery);

window.addEventListener('resize', resizeCallback);
resizeCallback();