const eyes = document.querySelector("#eyes");
const instructions = document.querySelector("#instructions");
const boo = document.querySelector("#boo");

const scaleEyesUp = () => {
  const currentScale = Number(eyes.style.transform.slice(6, -1)) || 0.05;
  
  if (document["hidden"] && currentScale < 1) {
    const newScale = currentScale + 0.19;
    eyes.style.transform = `scale(${newScale})`;
  } else if (currentScale >= 1) {
    instructions.style.display = "none";
    boo.style.display = "block";
  }
}

document.addEventListener("visibilitychange", scaleEyesUp);