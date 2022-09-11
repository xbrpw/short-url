let myMediaQuery = window.matchMedia('(min-resolution: 200dpi) and (min-aspect-ratio: 16/9)');

function matchMediaCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    document.querySelector("p").textContent = "Loading game resources..";
  } else {
    document.querySelector("p").textContent = "Please rotate your device";
  }
}

myMediaQuery.addEventListener('change', matchMediaCallback);

matchMediaCallback(myMediaQuery);