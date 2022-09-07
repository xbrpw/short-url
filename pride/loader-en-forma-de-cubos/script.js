const gridLength = 10;
let emptyBoxIndex = gridLength * gridLength - 1;
let pIndex = -1;
const boxes = [];
const boxesMap = {};
const pos = [];
const speed = 400; // lower = faster
const size = 40;
const gap = 5;

for (let x = 0; x < gridLength * gridLength - 1; x++) {
  const div = document.createElement("div");
  document.querySelector("main").appendChild(div);
  boxes.push(div);
  boxesMap[x] = x;
  pos.push([0, 0]);
}

boxesMap[gridLength * gridLength] = null;
pos.push([0, 0]);

const move = (index, pos) => {
  boxes[index].style.transform = `translateX(${
  pos[0] * (size + gap)
  }px) translateY(${pos[1] * (size + gap)}px)`;
};

let start;
let steps = 0;
let accumulator = 0;

const walk = timestamp => {
  if (start === undefined) start = timestamp;
  accumulator += timestamp - start;

  if (accumulator > speed) {
    accumulator = 0;
    steps++;
    start = timestamp;

    // generate a lut?
    const adjacent = [];

    if (
    emptyBoxIndex > gridLength - 1 &&
    emptyBoxIndex - gridLength !== pIndex)
    {
      // Not top row
      adjacent.push(emptyBoxIndex - gridLength);
    }
    if (
    emptyBoxIndex < gridLength * gridLength - gridLength &&
    emptyBoxIndex + gridLength !== pIndex)
    {
      // Not bottom row
      adjacent.push(emptyBoxIndex + gridLength);
    }
    if (emptyBoxIndex % gridLength !== 0 && emptyBoxIndex - 1 !== pIndex) {
      // Not left row
      adjacent.push(emptyBoxIndex - 1);
    }
    if (
    emptyBoxIndex % gridLength !== gridLength - 1 &&
    emptyBoxIndex + 1 !== pIndex)
    {
      // Not right row
      adjacent.push(emptyBoxIndex + 1);
    }

    const m = Math.floor(Math.random() * adjacent.length);
    const boxesMapIndexToMove = adjacent[m];

    pIndex = emptyBoxIndex;
    const pTile = boxesMap[boxesMapIndexToMove];
    boxesMap[boxesMapIndexToMove] = boxesMap[emptyBoxIndex];
    boxesMap[emptyBoxIndex] = pTile;

    switch (emptyBoxIndex - boxesMapIndexToMove) {
      case 1:
        pos[boxesMap[emptyBoxIndex]][0] += 1;
        break;
      case gridLength:
        pos[boxesMap[emptyBoxIndex]][1] += 1;
        break;
      case -gridLength:
        pos[boxesMap[emptyBoxIndex]][1] -= 1;
        break;
      case -1:
        pos[boxesMap[emptyBoxIndex]][0] -= 1;
        break;}


    move(boxesMap[emptyBoxIndex], pos[boxesMap[emptyBoxIndex]]);

    emptyBoxIndex = boxesMapIndexToMove;
  }

  if (steps < 5000) {
    window.requestAnimationFrame(walk);
  }
};

window.requestAnimationFrame(walk);