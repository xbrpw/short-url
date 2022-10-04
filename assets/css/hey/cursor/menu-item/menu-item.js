"use strict";
const dot = document.querySelector("#dot");
const { top: initialTop } = dot.getBoundingClientRect();
window.onload = () => {
    const dots = document.querySelectorAll("a");
    for (const dot of dots) {
        dot.addEventListener("mouseover", onHover);
    }
    moveDot(dots[0], false);
};
const onHover = (event) => {
    moveDot(event.srcElement);
};
const moveDot = (link, moveTop = true) => {
    const dot = document.querySelector("#dot");
    const dotRect = dot.getBoundingClientRect();
    const { left, width } = link.getBoundingClientRect();
    const xPos = left + width / 2;
    const newTop = initialTop + 15;
    dot.style.left = `${xPos}px`;
    if (moveTop) {
        dot.style.top = `${newTop}px`;
        setTimeout(() => {
            dot.style.top = `${initialTop}px`;
        }, 250);
    }
};