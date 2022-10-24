const currentDate = new Date();
const today = currentDate.getUTCDate();
let overlayIsActive = false;
let overlay = document.querySelector('#overlay');
let overlayContent = document.querySelector('#overlay-content');
let overlayCloser = document.querySelector('#closer');
let days = document.querySelectorAll('button');
let animationHelper = document.querySelector('#animHelper');
let menuItems = document.querySelectorAll('.top-link');
let initiallyHiddenElements = document.querySelectorAll('.initially-hidden');

for (let i = 0; i < menuItems.length; i++) {
  let contentId = menuItems[i].dataset.content;
  let targetHTMLElement = document.getElementById(contentId);
  menuItems[i].addEventListener('click', function (e) {
    e.preventDefault();
    colorizeModal('bla');
    overlayContent.classList.add('non-video');
    showModal(targetHTMLElement.innerHTML, 0);
  });
}

for (let i = 0; i < days.length; i++) {

  let contentId = days[i].dataset.content;
  let targetHTMLElement = document.getElementById(contentId);
  let dayHasPassed = today >= getNumberFromDay(contentId);
  if (!targetHTMLElement || !dayHasPassed) {
    days[i].disabled = true;
  } else {
    days[i].addEventListener('click', function (e) {
      if (days[i].classList.contains("red")) {colorizeModal('red');} else
      if (days[i].classList.contains("whi")) {colorizeModal('whi');} else
      if (days[i].classList.contains("blu")) {colorizeModal('blu');} else
      if (days[i].classList.contains("bla")) {colorizeModal('bla');} else
      {colorizeModal('bla');}
      duplicateElement(days[i]);
      overlayContent.classList.remove('non-video');
      showModal(targetHTMLElement.innerHTML, 500);
    });
  }

}

overlayCloser.addEventListener('click', hideModal);

function showModal(content, timeout) {
  overlayContent.innerHTML = content;

  const vid = document.querySelector('#overlay-content iframe');
  if (vid) {
    vid.src = vid.dataset.src;
  }

  setTimeout(() => {
    overlay.style.display = "block";
  }, timeout);
}

function hideModal() {
  overlay.classList.add("slideOutDown");
  setTimeout(() => {
    overlay.style.display = "none";
    overlayContent.innerHTML = "";
    overlay.className = "";
  }, 500);
}

function colorizeModal(_classname) {
  overlay.classList.add(_classname, "animated", "fadeIn");
}

document.onkeydown = function (e) {
  e = e || window.event;
  if (e.keyCode == 27) {
    hideModal();
  }
};

function duplicateElement(el) {
  const elRect = el.getBoundingClientRect();
  const newEl = el.cloneNode(true);
  newEl.style.margin = "0";
  newEl.style.width = elRect.width + "px";
  newEl.style.height = elRect.height + "px";

  animHelper.innerHTML = "";
  animHelper.appendChild(newEl);

  animHelper.style.top = elRect.top + "px";
  animHelper.style.left = elRect.left + "px";
  animHelper.style.width = elRect.width + "px";
  animHelper.style.height = elRect.height + "px";
  animHelper.className = "balloon";
  setTimeout(() => {
    animHelper.innerHTML = "";
    animHelper.style.top = 0;
    animHelper.style.left = 0;
    animHelper.style.width = 0;
    animHelper.style.height = 0;
    animHelper.className = "";
  }, 1500);

}

function checkVisibilities() {
  let openDoors = document.querySelectorAll('.not-yet-visible');
  for (let i = 0; i < openDoors.length; i++) {
    if (isInViewport(openDoors[i])) {
      setTimeout(() => {
        openDoors[i].style.opacity = 1;
        openDoors[i].classList.add('animated', 'ploppIn');
        openDoors[i].classList.remove('not-yet-visible');
        setTimeout(() => {
          openDoors[i].classList.remove('animated');
          openDoors[i].classList.remove('ploppIn');
        }, 1000);
      }, Math.random() * 400);
    }
  }

  if (openDoors.length > 0) {
    setTimeout(() => {
      checkVisibilities();
    }, 200);
  }
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight;
};

function getNumberFromDay(string) {
  return parseInt(string.replace(/[^0-9\.]/g, ''), 10);
}


for (let i = 0; i < days.length; i++) {
  days[i].classList.add('not-yet-visible');
}


setTimeout(() => {
  document.querySelector('#upcount').classList.add('open');
  document.querySelector('#waysto').classList.add('open');
}, 1000);

setTimeout(() => {
  checkVisibilities();
  for (let i = 0; i < initiallyHiddenElements.length; i++) {
    initiallyHiddenElements[i].classList.add('then-visible');
  }
}, 3000);