// simplebar
$('.scroll').each(function(i, el) {
  new SimpleBar(el, {
    autoHide: false
  })
})

// drag slider
const slider = document.querySelector('.simplebar-content-wrapper')
let isDown = false
let startX
let scrollLeft
let moved

slider.addEventListener('mousedown', (e) => {
  isDown = true
  moved = false
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () => {
  isDown = false
})
slider.addEventListener('mouseup', () => {
  isDown = false
})
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  moved = true
  const x = e.pageX - slider.offsetLeft
  const walk = (x - startX)
  slider.scrollLeft = scrollLeft - walk
})

$('.item').on('click', function() {
  if (moved) {
    event.preventDefault()
    event.stopImmediatePropagation()
    return false
  }
})