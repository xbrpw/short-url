let darkMode = true;
let buttonVisible = false;
const saberDrag = new Draggable('.lightsaber', {
  type: "x",
  bounds: { minX: 0, maxX: 430 },
  dragResistance: 0.15,
  onDrag: () => {
    saberDrag.getDirection('velocity') === "left" ? makeSaberRed() : makeSaberGreen();
    animateBG();
    animateMask();
    if (gsap.getProperty('.lightsaber', 'x') > 80 && gsap.getProperty('.lightsaber', 'x') < 360) {
      hideButton();
    }
    if (!buttonVisible) {
      if (gsap.getProperty('.lightsaber', 'x') <= 80) {
        !darkMode ? showButton() : null;
        changeBtnText('Unlimited Power!');
      }
      if (gsap.getProperty('.lightsaber', 'x') >= 360) {
        darkMode ? showButton() : null;
        changeBtnText('Use The Force!');
      }
    }
  } });


const animateBG = () => {
  let tlTime = gsap.getProperty('.lightsaber', "x") / 430 * bgTl._dur;
  gsap.set(bgTl, { time: tlTime });
};

// SABER COLOR
const makeSaberGreen = () => {
  gsap.set('#saberFill', { fill: "url(#green)" });
  gsap.set('#glow path', { fill: "#1C7C49" });
};
const makeSaberRed = () => {
  gsap.set('#saberFill', { fill: "url(#red)" });
  gsap.set('#glow path', { fill: "#964343" });
};
// SABER GLOW 
gsap.set('#glow path', { scaleX: 1.30, transformOrigin: "center center" });
const animateGlow = () => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to('#glow path', { opacity: 0.75, duration: 1.32 }).
  to('#glow path', { opacity: 1, duration: 1.32 });
  return tl;
};

animateGlow();

const saberShake = () => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to('.saber', { x: -0.18, duration: 0.001 }).
  to('.saber', { x: 0.18, duration: 0.001 }).
  to('.saber', { x: 0, duration: 0.001 });
};

saberShake();

// Animate Image Mask
const animateMask = () => {
  let tlTime = gsap.getProperty('.lightsaber', "x");
  let maskShowAmount = (tlTime - 60) / 500;
  gsap.set(maskTl, { time: maskShowAmount });
};

gsap.set('#SVGBG', { visibility: "visible" });
// BG 
gsap.set('#stars circle', { scale: "random(0.35,0.6)", transformOrigin: "center center" });

const bgTl = gsap.timeline({ paused: true, defaults: { duration: 1 } });
// BG STUFF
bgTl.to('#stars', { x: 388 }, 'slide').
to('#stars circle', { scale: '-=0.1', duration: 0.5 }, 'slide').
to('#stars circle', { scale: '+=0.1', duration: 0.5 }, 'slide+=0.5');

const maskTl = gsap.timeline({ paused: true });

maskTl.to('.luke', { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 }, 'slide').
fromTo('.kylo', { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", duration: 1 }, 'slide');

const changeUIColor = (color, color2, mode) => {
  gsap.to(':root', { '--background': color, '--text': color2, onStart: () => {
      darkMode = mode;
    } });
};

// TIE FIGHTER 
gsap.set('#tf', { x: 118, transformOrigin: "center center" });

const tfTl = gsap.timeline({ paused: true, defaults: { duration: 1 } });

tfTl.to('#tf', { x: -500 }, 'side').
to('#tf', { rotation: 90, duration: 0.8 }, 'side+=0.1').
to('#tf', { scale: 0.85, duration: 0.48 }, 'side').
to('#tf', { scale: 1, duration: 0.52 }, 'side+=0.48');

// X-WING
gsap.set('#xw', { y: -100, x: -10, transformOrigin: "center center" });

const xwTl = gsap.timeline({ paused: true });

xwTl.to('#xw', { x: 600, duration: 1, y: -200 }, 'side').
to('#xw', { scale: 0.75, duration: 0.52 }, 'side').
to('#xw', { duration: 0.4, scale: 1 }, 'side+=0.6');

const confirmBtn = document.querySelector('.confirm-btn');

confirmBtn.addEventListener('click', () => {
  if (gsap.getProperty('.lightsaber', "x") <= 80) {
    changeUIColor('#141414', '#DFDFE1', true);
    hideButton();
    tfTl.progress() === 0 ? tfTl.play() : tfTl.restart();
  }
  if (gsap.getProperty('.lightsaber', 'x') >= 360) {
    changeUIColor('#FFFFFF', '#141414', false);
    hideButton();
    xwTl.progress() === 0 ? xwTl.play() : xwTl.restart();
  }
});
// CONFIRM ALLIANCE
const showButton = () => {
  gsap.fromTo(confirmBtn, { y: 5, opacity: 0, immediateRender: true }, { y: 0, opacity: 1, duration: 0.24 });
  buttonVisible = true;
};
const hideButton = () => {
  gsap.to(confirmBtn, { y: 5, opacity: 0, duration: 0.24 });
  buttonVisible = false;
};
const changeBtnText = text => {
  confirmBtn.textContent = text;
};

gsap.set('.saber', { visibility: 'visible' });
const audio = document.querySelector('#sound');
audio.volume = 0.75;
// ONLOAD 
const onLoad = () => {
  makeSaberGreen();
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "sine.inOut" } });
  tl.add(() => {
    audio.play();
  }, 'saber').
  fromTo('.saber', { scaleY: 0, transformOrigin: "50% 97.5%" }, { opacity: 1, scaleY: 1 }, 'saber').
  to(maskTl, { time: 0.2948 }, 'load').
  to('.lightsaber', { x: 209 }, 'load').
  to(bgTl, { time: 0.5 }, 'load');

};

window.addEventListener('load', () => {
  onLoad();
});

// MENU
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const openMenu = () => {
  gsap.to('nav', { y: '0%', duration: 0.32 });
  menuOpen = true;
  menuBtn.dataset.toggled = true;
};
const closeMenu = () => {
  gsap.to('nav', { y: '-100%', duration: 0.32 });
  menuBtn.dataset.toggled = false;
  menuOpen = false;
};

menuBtn.addEventListener('click', () => {
  !menuOpen ? openMenu() : closeMenu();
});

// resize event listener for menu
window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 769px)").matches && menuOpen == false) {
    gsap.set('nav', { y: '0%' });
  }
  if (window.matchMedia("(max-width: 768px)").matches && menuOpen == false) {
    gsap.set('nav', { y: '-100%' });
  }
});