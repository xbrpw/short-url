const handle = document.getElementById('handle')
const grid = document.getElementById('grid')

handle.addEventListener('mousedown', event => {
  window.addEventListener('mousemove', resize, false)
  window.addEventListener('mouseup', stopResize, false)
}, false)

function resize(event) {
  console.log(event.pageX)
  grid.style.setProperty('--sidebar-width', event.pageX + 'px')
}

function stopResize() {
  window.removeEventListener('mousemove', resize, false)
}