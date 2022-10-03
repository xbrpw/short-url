const o = document.querySelector('#outlet')
const p = document.querySelector('#plug')
const c = document.querySelector('#cord')
var root = document.documentElement
var run = true;

function getColor() {
  return 'hsl('+Math.floor(Math.random()*360)+'deg,75%,50%)'
}

o.addEventListener('click', function(e){
  if(run) {
    run = false;
    p.classList.add('plugged')  
    p.style = ''
    root.style.setProperty('--bg-color', getColor())
  } else {
    run = true;
    p.classList.remove('plugged')
    root.style.setProperty('--bg-color', '#ccc')
    var x = e.clientX - 40
    var y = e.clientY - 40
    p.style.left = x + 'px'
    p.style.top = y + 'px'
    c.style.width = window.innerWidth - x - 35 + 'px'
    c.style.height = window.innerHeight - y - 40 + 'px'
  }
})

function moveThePlug(e) {
  e = e.type == 'touchmove' ? e.touches[0] : e
  if(run) {
    var x = e.clientX - 40
    var y = e.clientY - 40
    p.style.left = x + 'px'
    p.style.top = y + 'px'
    c.style.width = window.innerWidth - x - 35 + 'px'
    c.style.height = window.innerHeight - y - 80 + 'px'  
  }  
}

['mousemove','touchmove'].forEach( function(evt) {
    window.addEventListener(evt, moveThePlug, false);
});