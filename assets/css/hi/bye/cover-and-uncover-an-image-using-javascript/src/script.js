let button = document.querySelector('.button')
let text = document.querySelector('.text')
let img = document.querySelector('.img')
let state = 0 // 0 = uncover | 1 = cover

button.addEventListener('click', function() {
  if (state === 0) {
    button.innerHTML = 'Cover Image'
    text.style.display = 'none'
    img.style.filter = 'blur(0)'
    state = 1;
  } else {
    button.innerHTML = 'Uncover Image'
    text.style.display = 'block'
    img.style.filter = 'blur(24px)'
    state = 0;
  }
})