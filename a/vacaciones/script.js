const game_console = document.querySelector("#console")
const console_contain = document.querySelector("#console_contain")
const something_amazing = document.querySelector("#something_amazing")
const wave = document.querySelector("#wave")
const sandy_text = document.querySelector("#sandy_text")
const find_item = document.querySelectorAll(".find_item")
const tile_size = 72
const num_hidden_items = 3
var slide = 1

const game_deets = game_console.getBoundingClientRect()

function setUpGame(){  
  var total_num_blocks = window.innerWidth < 1000 ? 16 : 30;
  game_console.innerHTML = ''
  find_item.forEach(function(elm){
    elm.className = 'find_item'
  })
  var hidden_items = []
  function itemsToFind(){
    for(var i=0;i<num_hidden_items;i++) {
      var x = Math.floor(Math.random()*5)
      var y = Math.floor(Math.random()*4)+1
      hidden_items.push(x*tile_size+'px '+ y*tile_size+'px')
    }
    console.log(hidden_items)
    for(var i=0;i<num_hidden_items;i++) {
      find_item[i].style.width = tile_size+'px'
      find_item[i].style.height = tile_size+'px'
      find_item[i].style.backgroundPosition = hidden_items[i]
      find_item[i].classList.add('find'+i)      
    }
  }
  itemsToFind()

  function addGameBlock() {
    var b = document.createElement('div')
    b.className = 'game_block'
    b.style.width = tile_size+'px'
    b.style.height = tile_size+'px'
    var x = Math.floor(Math.random()*5)
    var y = Math.floor(Math.random()*5)
    var avoid = x*tile_size+'px '+ y*tile_size+'px'
    if(hidden_items.includes(avoid)) {
      b.style.backgroundPosition = Math.random() < .5 ? '0px 0px' : tile_size+'px 0px';
    } else {
      b.style.backgroundPosition = avoid;
    }  
    var rot = Math.random()*45
    b.style.transform = Math.random() < .5 ? 'rotate('+rot+'deg)' : 'rotate('+rot*(-1)+'deg)'; 
    b.style.animationDelay = Math.random()*3+'s'

    // place items anywhere in container
    if(window.innerWidth < 375) {
      game_console.appendChild(b)  
    } else {
      b.style.position = 'absolute'
      b.style.left = Math.random()*90+'%'
      b.style.top = Math.random()*90+'%'  
      game_console.appendChild(b)
    }   
  }

  for(var i=0;i<total_num_blocks;i++) {
    addGameBlock()
  }

  var items = document.querySelectorAll('.game_block')
  for(var i=0;i<num_hidden_items;i++) {
    var item_to_find = Math.floor(Math.random()*items.length)
    if(items[item_to_find].classList == 'game_block') {
      items[item_to_find].classList.add('find'+i)  
      items[item_to_find].style.zIndex = 9
    } else {
      var item_to_find = Math.floor(Math.random()*items.length)
      items[item_to_find].classList.add('find'+i)  
      items[item_to_find].style.zIndex = 9
    }
    items[item_to_find].style.backgroundPosition = hidden_items[i]
    items[item_to_find].onclick = function(){
      this.style.backgroundColor = 'rgba(0,255,0,.25)'
      this.style.pointerEvents = 'none'
      console.log(this.classList[1])
      var name = this.classList[1]
      document.getElementsByClassName(name)[1].classList.add('found')

      if(document.querySelectorAll('.found').length == num_hidden_items) {
        run_wave()        
      }
    }
  }
}

function run_wave(){
  if(document.querySelector('.run_wave')){
    wave.classList.toggle('run_wave')
  } else {
    wave.classList.toggle('run_wave')
    setTimeout(function(){
      if(slide == 1) {
        setUpGame()
        sandy_text.classList.toggle('show_something_amazing')
        console_contain.classList.toggle('show_something_amazing')
      }
      if(slide == 2) {
        something_amazing.classList.toggle('show_something_amazing')
        console_contain.classList.toggle('show_something_amazing')
      }
      slide++
    }, 1500)
    setTimeout(function(){
      wave.classList.toggle('run_wave')
    },3100)
  }  
}

setTimeout(run_wave,3000)