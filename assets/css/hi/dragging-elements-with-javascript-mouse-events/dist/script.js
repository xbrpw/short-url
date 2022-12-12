var pin = document.getElementById("pin");
var mouseStartPosition = {x: 0, y: 0};
var pinStartPosition = {x: 0, y: 0};
var targetPosition = {x: 0, y: 0};
var pinPosition = {x: 0, y: 0};
var velocityX = 0;

pin.addEventListener("mousedown", mousedown);

function mousedown(e) {
  // get mouse position
  mouseStartPosition.x = e.pageX;
  mouseStartPosition.y = e.pageY;
  // update target position for pin - shift pin to just above where mouse is
  targetPosition.x -= (35 - e.offsetX);
  targetPosition.y -= (115 - e.offsetY);
  // update the pin start position
  pinStartPosition.x = targetPosition.x;
  pinStartPosition.y = targetPosition.y;
  
  // add listeners for mousemove, mouseup
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);
}

function mousemove(e) {
  // get velocity of x (affects rotation)
  velocityX = pinStartPosition.x + e.pageX - mouseStartPosition.x - targetPosition.x;
  if (velocityX < -25) velocityX = -25;
  if (velocityX > 25) velocityX = 25;
  
  // update position - pin start + (current mouse - start mouse)
  targetPosition.x = pinStartPosition.x + e.pageX - mouseStartPosition.x;
  targetPosition.y = pinStartPosition.y + e.pageY - mouseStartPosition.y;
}

function mouseup(e) {
  // reset rotation to 0
  velocityX = 0;
  // update position for final time
  targetPosition.x = pinStartPosition.x + e.pageX - mouseStartPosition.x;
  targetPosition.y = pinStartPosition.y + e.pageY - mouseStartPosition.y;
  // "drop" pin
  targetPosition.y += 15;
  
  // remove listeners
  window.removeEventListener("mousemove", mousemove);
  window.removeEventListener("mouseup", mouseup);
}

function loop() {
  requestAnimationFrame(loop);
  
  // lerp pin to target -  https://codepen.io/rachsmith/post/animation-tip-lerp
  pinPosition.x += (targetPosition.x - pinPosition.x)*0.2;
  pinPosition.y += (targetPosition.y - pinPosition.y)*0.2;
  
  // update CSS of pin
  var pos = pinPosition.x + "px, " + pinPosition.y + "px, 0px";
  pin.style.transform =  "translate3d("+pos+") rotateZ("+-velocityX+"deg)"; 
}

loop();