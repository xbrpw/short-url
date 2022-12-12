console.clear();
const elVergometro = document.querySelector('#vergometro');
const elChar = document.querySelector('.g');
const elRes = document.querySelector('.res');
const elZer = document.querySelector('.zer');

const getRect = (el) => {
  return el.getBoundingClientRect();
};

/**
 * FLIP
 * F = First
 * L = Last
 * I = Invert
 * P = Play
 */
function flip(doSomething, firstEls, getLastEls = () => firstEls) {
  // First
  const firstRects = firstEls.map(getRect);

  requestAnimationFrame(() => {
    // (something that changes layout)
    doSomething();

    // Last
    let lastEls = getLastEls();
    
    lastEls.forEach((lastEl, i) => {
      const firstRect = firstRects[i];
      const lastRect = getRect(lastEl);

      // Invert
      const dx = lastRect.x - firstRect.x;
      const dy = lastRect.y - firstRect.y;
      const dw = lastRect.width / firstRect.width;
      const dh = lastRect.height / firstRect.height;

      // (so CSS knows it's being flipped)
      // data-flipping="true"
      lastEl.dataset.flipping = true;

      lastEl.style.setProperty("--dx", dx);
      lastEl.style.setProperty("--dy", dy);
      lastEl.style.setProperty("--dw", dw);
      lastEl.style.setProperty("--dh", dh);
      lastEl.style.setProperty('--w', lastRect.width);
    });
    
    requestAnimationFrame(() => {
      // Play
      lastEls.forEach(lastEl => {
        delete lastEl.dataset.flipping;
      });
    });
  });
}

const widths = [5, .25, 2.5, 4, 1];
let widthIndex = 0;

function setWidth(s) {
  flip(() => {
    elChar.style.width = s + 'em';
    //elvergometro.dataset.widthIndex = s;
  }, [elRes, elChar, elZer]);
}

elVergometro.addEventListener('click', e => {
  widthIndex = (widthIndex + 1) % widths.length;
  
  setWidth(widths[widthIndex]);
});

// set starting width
setWidth(widths[0]);

setTimeout(()=>{
  elVergometro.click();
},1000);