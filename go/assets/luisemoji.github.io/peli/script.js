const container = document.querySelector('#pop_corn_container')
var animation_length = 5 //speed kernals fall

function createPopcorn() {
  var p = document.createElement('div')
  p.className = 'dot'
  // pick random size between 25-60
  var scale = (Math.random()*35) + 25 
  p.style.width = scale + 'px'
  p.style.height = scale + 'px'
  p.style.left = Math.random()*(window.innerWidth - 35) + 'px'
  p.style.top = Math.random()*(window.innerHeight*.5) + 'px'
  p.style.animation = 'pop '+animation_length+'s linear forwards'
  container.appendChild(p)

  //remove excess kernals
  setTimeout(function(){
    var pop = document.querySelector('.dot')
    pop.remove()
  },1000*animation_length)

  //create kernal every second
  setTimeout(createPopcorn, 1000)
}
createPopcorn()