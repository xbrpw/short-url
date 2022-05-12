const game_box = document.getElementById('console')
const start_btn = document.getElementById('start_btn')
const water_box = document.getElementById('water_box')
const hook = document.getElementById('hook')
const score = document.getElementById('score')
var offset = game_box.getBoundingClientRect()
var d = document.getElementById('start_line');   
var fish_count = 20
var depth = 150

function addFish(){    
  var size = Math.floor(Math.random()*100) + 25
  var l = Math.random() < .5 ? 'left' : 'right'
  var loc = Math.random()*size + 75
  var f = document.createElement('div')
  f.className = 'fish fish'+Math.ceil(Math.random()*7)      
  f.classList.add(l)
  f.style.backgroundSize = '100% auto'
  f.style.backgroundRepeat = 'no-repeat'
  f.style.top = depth + 'px'
  depth = depth + 80
  f.style.left = loc + 'px'
  f.style.position = 'absolute'    
  f.style.width = size + 'px'
  f.style.height = size*.4 + 'px'
  f.style.animationDuration = Math.random()*10 + 5 + 's'

  var hb = document.createElement('div');
  hb.className = 'hitbox'  
  water_box.appendChild(f).appendChild(hb)
}

for(var i=0;i<fish_count;i++){
  addFish()
}

start_btn.addEventListener('click', function(){
  var offset = game_box.getBoundingClientRect()
  hook.innerHTML = '<div id="hook_hitbox"></div>'
  var hook_hb = document.getElementById('hook_hitbox')
  start_btn.classList.toggle('hide_start')
  water_box.innerHTML = ''
  depth = 150
  for(var i=0;i<fish_count;i++){
    addFish()
  }

  function moveHook(e){
    var x = e.clientX - offset.left - 25
    hook.style.left = x + 'px'       

    posX = e.clientX - offset.x - 4;      
    d.setAttribute("x2", posX)      
  }

  function moveHookTouch(e){
    var x = e.touches[0].clientX - offset.left - 25
    hook.style.left = x + 'px'       

    posX = e.touches[0].clientX - offset.x - 4;      
    d.setAttribute("x2", posX)      
  }

  if(!game_box.classList.contains('hook_down')){
    water_box.addEventListener('mousemove', moveHook)
    water_box.addEventListener('touchmove', moveHookTouch)

    game_box.className = 'hook_down'
    setTimeout(function(){
      game_box.className = 'hook_up'

      // collision detection      
      function checkForHits() {
        var hook_loc = hook_hb.getBoundingClientRect()        
        var fish = document.querySelectorAll('.hitbox')
        fish.forEach(function(elm){
          var elm_deets = elm.getBoundingClientRect()
          var ouch = !(elm_deets.right < hook_loc.left || 
                       elm_deets.left > hook_loc.right || 
                       elm_deets.bottom < hook_loc.top || 
                       elm_deets.top > hook_loc.bottom)        
          if(ouch) {
            var cln = elm.parentElement.cloneNode(true)
            elm.parentElement.remove()
            hook.appendChild(cln)

            score.children[0].innerHTML = hook.children.length - 1
          }
        })
      }      
      var checkForCatch = setInterval(checkForHits,1000/30)
      setTimeout(function(){       
        water_box.removeEventListener('mousemove', moveHook)
        water_box.removeEventListener('touchmove', moveHookTouch)
        d.setAttribute("y2", 225)
        d.setAttribute("x2", 259)

        clearInterval(checkForCatch)
        start_btn.classList.toggle('hide_start')
      },10000)
    },4000)
  }  
})