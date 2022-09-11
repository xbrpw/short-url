var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const themeButton = document.querySelectorAll('.themeButton');


const themeMap = {
    dark: "light",
    light: "dark"
};


const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);
  
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

themeButton.forEach(a => {
    a.addEventListener('click', () => {
        toggleTheme();
    })
})

const openModalLink = document.getElementById('openModalOne');
const closeModalButtons = document.getElementById('closeModalOne');
const overlayOne = document.getElementById('overlayOne');
const modalOne = document.getElementById('modalOne');


openModalLink.addEventListener('click', () => {
    openModalOne()
})

closeModalButtons.addEventListener('click', () => {
    closeModalOne()
})

overlayOne.addEventListener('click', () => {
    closeModalOne()
})

function openModalOne() {
    modalOne.classList.add('active')
    overlayOne.classList.add('active')
}

function closeModalOne() {
    modalOne.classList.remove('active')
    overlayOne.classList.remove('active')
}