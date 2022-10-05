const root = document.querySelector(":root");
const body = document.body;
const textContainer = document.querySelector(".text-container");
const textElement1 = document.querySelector(".text-1");
const textElement2 = document.querySelector(".text-2");
const customPointer = document.querySelector(".custom-pointer");

let fontAxis = 300; // Variable Font Weight
let pointerX; // Pointer Position X
let pointerY; // Pointer Position Y
let text1 = '"Talk is cheap. '; // First Line
let text2 = 'Show me the code"'; // Second Line
let textSpan; // Single Charactor Element

// Set Pointer Start Position | Can Be Removed If You Don't Want To Init Pointer Position
pointerY = screen.availHeight / 4;
pointerX = screen.availWidth / 3;

window.onresize = (e) => {
  setFontWeight();
};

window.onload = () => {
  setText(text1);
  setText(text2);
  setFontWeight();
};

document.onmousemove = function (event) {
  pointerX = event.pageX;
  pointerY = event.pageY;

  setFontWeight();
  customPointer.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
};

// Append Each Single Charactor Into Span
function setText(t) {
  t == text1 ? (textElement1.innerHTML = "") : (textElement2.innerHTML = "");
  t.split("").map((x) => {
    let charElement = document.createElement("span");
    let charNode = document.createTextNode(x);
    charElement.appendChild(charNode);
    t == text1
      ? textElement1.appendChild(charElement)
      : textElement2.appendChild(charElement);
  });
  textSpan = document.querySelectorAll("span");
}

function setFontWeight() {
  textSpan.forEach((element) => {
    let position = element.getBoundingClientRect();

    // Calculate The Distance Between Cursor And Target Elements
    let distance = Math.ceil(
      Math.sqrt((position.x - pointerX) ** 2 + (position.y - pointerY) ** 2)
    );

    // The Longer The Distance The Lower The Font Weight
    element.setAttribute(
      "style",
      `font-variation-settings: 'wght' ${900 - distance * 2};`
    );
  });
}
