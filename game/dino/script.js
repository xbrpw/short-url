levels = [
  {
    name:1,
    player:[17],
    path:[0,1,2,16,17,18,32,33,34],
    rock:[3,7,12,19,23,28,35,39,44,51,53,55,58,60,62,63,67,69,71,74,76,78,79,83,85,90,94,95,101,106,110,111,112,117,122,126,127],
    bones:[21,26,30,103]
  },
  {
    name:2,
    player:[30],
    path:[13,14,15,29,30,31,45,46,47],
    rock:[19,20,21,22,26,27,28,39,56,57,58,59,60,61,62,63,64,65,66,67,68,69,86,104,105,122,123,124,125,126,127],
    bones:[17,24,94,97]
  },
  {
    name:3,
    player:[17],
    path:[0,1,2,16,17,18,32,33,34],
    rock:[3,9,19,22,25,28,38,44,54,60,64,65,66,67,68,69,71,72,74,75,77,78,79,85,87,92,102,108],
    bones:[30,97,105,110]
  },
  {
    name:4,
    player:[103],
    path:[87,102,103,104,117,118,119,120,121],
    rock:[3,7,11,18,22,24,28,33,37,41,45,48,52,58,62,67,71,75,79,82,86,88,92,97,101,105,109,112,116,122,126],
    bones:[0,15,114,127]
  },
  {
    name:5,
    player:[69],
    path:[68,69,84,99,100,114,115,116],
    rock:[0,1,3,7,8,10,11,13,14,19,20,21,35,36,37,38,39,40,41,42,43,44,45,47,50,51,52,53,54,59,61,66,67,70,75,77,80,81,82,83,85,86,89,90,91,93,94,96,97,98,101,102,103,104,105,106,108,109,112,113,117,118,119],
    bones:[71,72,87,88]
  }
]

levels_mobile = [
  {
    name:1,
    player:[9],
    path:[0,1,2,8,9,10,16,17,18],
    rock:[24,25,26,27,28,59,60,61,62,63,88,89,90,91,92,123,124,125,126,127],
    bones:[30,57,94,121]
  },
  {
    name:2,
    player:[14],
    path:[5,6,7,13,14,15,21,22,23],
    rock:[0,4,8,12,16,20,24,28,30,32,36,38,40,44,46,49,52,57,60,69,74,78,83,86,91,94,99,102,107,115,123],
    bones:[10,62,113,118]
  },
  {
    name:3,
    player:[9],
    path:[0,1,2,8,9,10,16,17,18],
    rock:[4,12,20,24,25,28,36,44,45,49,50,51,54,60,61,68,72,73,84,92,97,98,99,101,102,108,116,124],
    bones:[14,78,113,118]
  },
  {
    name:4,
    player:[115],
    path:[107,114,115,116,121,122,123,124,125],
    rock:[3,10,12,17,21,24,30,35,39,42,44,49,53,56,62,67,71,74,76,81,85,88,94,99,103,106,108,113,117,120,126],
    bones:[83,51,19,14]
  },
  {
    name:5,
    player:[69],
    path:[69,70,77,78,86,87],
    rock:[0,1,3,5,7,8,16,18,19,20,21,22,24,26,28,30,34,41,42,45,49,50,53,58,59,60,61,62,63,64,66,67,68,71,72,74,75,76,79,82,83,84,85,89,90,91,92,93,97,98,99,100,106,107,108,110,111,112,114,115,118,119,120,126,127],
    bones:[43,44,51,52]
  }
]

const gc = document.querySelector('#game_console')
const ss = document.querySelector('#start_screen')
const ws = document.querySelector('#win_screen')
var or = window.innerWidth > window.innerHeight ? true : false ;
var tile_size = or ? 50 : 40 ;
var row_width = or ? 16 : 8;
gc.style.width = or ? tile_size * 16 + 'px' : tile_size * 8 + 'px'
gc.style.height = or ? tile_size * 8 + 'px' : tile_size * 16 + 'px'
blocks_count = 128
bones = 0
level = 0

function addBlocks() {
  for(var i=0;i<blocks_count;i++) {
    var b = document.createElement('div')
    b.className = 'game_block'
    b.style.width = tile_size + 'px'
    b.style.height = tile_size + 'px'
    // b.innerHTML = i
    gc.appendChild(b)
  }
}

function addLevel() {
  if(or) {
    levels = levels
  } else {
    levels = levels_mobile
  }
  var blocks = document.querySelectorAll('.game_block')
  levels[level].rock.forEach(function(elm){
    blocks[elm].classList.add('game_rock')
    var rock_type = Math.random() < .5 ? 'rock1' : 'rock2';
    blocks[elm].classList.add(rock_type)
  })
  levels[level].bones.forEach(function(elm){
    blocks[elm].classList.add('game_bones'+levels[level].bones.indexOf(elm))
  })
  levels[level].path.forEach(function(elm){
    blocks[elm].classList.add('game_path')
  })
  levels[level].player.forEach(function(elm){
    blocks[elm].classList.add('game_player')
    document.documentElement.style.setProperty('--animation', 'slide_in_down .15s linear forwards')
  })  
}

function addPlayer() {
  var loc = Math.floor(Math.random()*blocks_count)  
  document.querySelectorAll('.game_block')[loc].classList.add('game_path')
  document.querySelectorAll('.game_block')[loc].classList.add('game_player')
  document.documentElement.style.setProperty('--animation', 'slide_in_down .15s linear forwards')
}

var rocks_count = 4
function addRocks() {
  for(var i=0;i<rocks_count;i++) {
    var not_bottom = blocks_count - row_width
    var ran_num = (1/rocks_count)*blocks_count
    var loc = Math.floor((Math.random()*ran_num) + (ran_num*i))
    var rock_type = Math.random() < .5 ? 'rock1' : 'rock2';
    // console.log(loc)
    document.querySelectorAll('.game_block')[loc].classList.add('game_rock')
    document.querySelectorAll('.game_block')[loc].classList.add(rock_type)
  }
}

function addBones() {
  for(var i=0;i<4;i++) {
    var not_bottom = blocks_count - row_width
    var loc = Math.floor(Math.random()*(blocks_count*.25)) + ((blocks_count*.25)*(i))
    if(i == 3) {
      var loc = Math.floor(Math.random()* row_width) + ((blocks_count*.25)*(i))
      }
    document.querySelectorAll('.game_block')[loc].classList.add('game_bones'+i)
  }
}

var direction = 0
window.addEventListener('mouseup', function(e) {
  e = e || window.event;  
  if(e.target.classList.contains('button_left')) {
    direction = 37
  }
  if(e.target.classList.contains('button_top')) {
    direction = 38
  }
  if(e.target.classList.contains('button_right')) {
    direction = 39
  }
  if(e.target.classList.contains('button_bottom')) {
    direction = 40
  }
  // console.log(direction)
})
// MOVEMENT
var b = document.querySelectorAll('.game_block')
function movePlayer(e) {
  var pl = document.querySelector('.game_player')
  var b = document.querySelectorAll('.game_block')
  var num = Array.from(b).indexOf(pl)
  // console.log(num)
  if((e.keyCode == 37 || direction == 37 ) && num % row_width !== 0) {
    face = 1
    if(pl.previousSibling.classList.length == 1 || 
       !pl.previousSibling.classList.contains('game_rock')) {
      pl.classList.remove('game_player')
      pl.previousSibling.classList.add('game_path')
      pl.previousSibling.classList.add('game_player')
      document.documentElement.style.setProperty('--animation', 'slide_in_left .15s linear forwards')
    }
  }
  if((e.keyCode == 39 || direction == 39 ) && (num + 1) % row_width !== 0) {
    face = 0
    if(pl.nextSibling.classList.length == 1 ||
       !pl.nextSibling.classList.contains('game_rock')) {
      pl.classList.remove('game_player')
      pl.nextSibling.classList.add('game_path')
      pl.nextSibling.classList.add('game_player')
      document.querySelector('.game_player').style.animation = ''
      document.documentElement.style.setProperty('--animation', 'slide_in_right .15s linear forwards')
    }  
  }
  if((e.keyCode == 38 || direction == 38 )) {
    var num = Array.from(b).indexOf(pl)
    var thing = num - row_width
    if(thing >= 0 && (b[thing].classList.length == 1 || !b[thing].classList.contains('game_rock'))) {
      pl.classList.remove('game_player')
      b[thing].classList.add('game_path')
      b[thing].classList.add('game_player')
      document.documentElement.style.setProperty('--animation', 'slide_in_up .15s linear forwards')
    }
  }
  if((e.keyCode == 40 || direction == 40 )) {
    var num = Array.from(b).indexOf(pl)
    var thing = num + row_width
    if(thing < blocks_count && (b[thing].classList.length == 1 || !b[thing].classList.contains('game_rock'))) {
      pl.classList.remove('game_player')
      b[thing].classList.add('game_path')
      b[thing].classList.add('game_player')
      document.documentElement.style.setProperty('--animation', 'slide_in_down .15s linear forwards')
    }
  }  

  setTimeout(function(){
    var pl = document.querySelector('.game_player') 
    var num = Array.from(b).indexOf(pl)
    var thing = num - row_width
    if(thing >= 0 && b[thing].classList.contains('game_rock')){
      var rt = b[thing].classList[2]
      console.log(rt)
      b[thing].classList.add('falling_rock')
      if(document.querySelectorAll('.falling_rock').length == 1) {

        function fallingRocks() {  
          if(document.querySelector('.falling_rock')) {
            var rocks = document.querySelectorAll('.falling_rock')
            rocks.forEach(function(elm){
              var num = Array.from(b).indexOf(elm)
              var thing = num + row_width
              var next_thing = thing + row_width

              if(thing < blocks_count && b[thing].classList.contains('game_path') && !b[thing].classList.contains('game_rock')){
                elm.classList.remove('game_rock')
                b[thing].classList.add('game_rock')
                elm.classList.remove(rt)
                b[thing].classList.add(rt)                
                elm.classList.remove('falling_rock')
                b[thing].classList.add('falling_rock')                
                if(!b[next_thing] || !b[next_thing].classList.contains('game_path') || b[next_thing].classList.contains('game_rock')) {
                  b[thing].classList.remove('falling_rock')
                }
              }
              // DEATH
              if(thing < blocks_count && b[thing].classList.contains('game_player')){
                // document.querySelector('.game_player').style.background = 'red'
                document.querySelector('.game_player').classList.add('game_dead')
                window.removeEventListener('keyup', movePlayer)
                b[thing].classList.remove('falling_rock')
                clearInterval(fall)
                setTimeout(function(){
                  ws.classList.add('show_win_screen')  
                  ws.querySelector('h1').innerText = 'OUCH!'
                  window.removeEventListener('keyup', movePlayer)
                  window.removeEventListener('mouseup', movePlayer)
                }, 250)   
              }

              if(document.querySelectorAll('.falling_rock').length == 0) {
                clearInterval(fall)
              }
            })  
          }  
        }
        var fall = setInterval(fallingRocks, 500)
        }      
    }
  }, 100)

  setTimeout(function(){
    var pl = document.querySelector('.game_player') 
    var num = Array.from(b).indexOf(pl)
    if(b[num].classList.contains('game_bones0') ||
       b[num].classList.contains('game_bones1') ||
       b[num].classList.contains('game_bones2') ||
       b[num].classList.contains('game_bones3')){
      var name = b[num].classList[1]
      document.querySelector('#'+name).classList.add(name)
      b[num].classList.remove(name)
      document.querySelector('#bones_display').classList.add('show_bones')
      bones++
      setTimeout(function(){
        if(bones != 4) {
          document.querySelector('#bones_display').classList.remove('show_bones') 
        }        
      }, 1500)      
      if(bones == 4) {        
        setTimeout(function(){          
          if(level == levels.length - 1) {
            ws.querySelector('h1').innerText = 'THE END!'
            ws.querySelector('#game_cont').style.display = 'none'
          }
          ws.classList.add('show_win_screen')
          if(level < levels.length - 1 ) {
            level++
          }
          window.removeEventListener('keyup', movePlayer)
          window.removeEventListener('mouseup', movePlayer)
        }, 250)
      }
    }
  }, 100)
}

function resetGame() {  
  // document.querySelector('#game_box').webkitRequestFullScreen();
  ss.classList.add('hide_ss')
  bones = 0
  var face = 0  
  gc.innerHTML = "<div id='bones_display'>      <div id='game_bones0'></div>      <div id='game_bones1'></div>      <div id='game_bones2'></div>      <div id='game_bones3'></div></div>"
  addBlocks()
  // addRocks()
  // addBones()
  // addPlayer()
  addLevel()
  window.addEventListener('keyup', movePlayer)
  window.addEventListener('mouseup', movePlayer)
  // window.focus()
}
// resetGame()

ss.addEventListener('click', resetGame)
ws.querySelector('#game_cont').addEventListener('click', function(){
  ws.classList.remove('show_win_screen')  
  ws.querySelector('h1').innerText = 'CONGRATS!'      
  resetGame()
})