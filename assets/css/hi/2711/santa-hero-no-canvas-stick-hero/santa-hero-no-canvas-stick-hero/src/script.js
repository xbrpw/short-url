function init() {

  var stick_h = 0,
      pillars_x = 0,
      score = 0,
      offset = 50,
      original_x = window.innerWidth*.45,
      last_p = original_x,
      stick_growing,
      growth_rate = 3,
      check_score = 0;

  function addPillar() {
    var p = document.createElement('div')
    p.className = 'pillar'
    last_p = last_p + Math.floor(Math.random()*250) + 100
    p.style.left = last_p + 'px'
    var skew = Math.random() < .5 ? Math.random()*5 + 'deg' : -(Math.random()*5) + 'deg',
        color = 'hsl('+Math.random()*360+'deg, 75%, 40%)'

    p.style.setProperty('--skew', skew)
    p.style.setProperty('--bg-color', color)
    pillar_box.appendChild(p)
  }

  addPillar()
  addPillar()
  addPillar()
  addPillar()
  addPillar()

  function stickGrow() {
    stick_h = stick_h + growth_rate
    stick.style.height = stick_h + 'px'
    stick_growing = setTimeout(stickGrow, 1000/60)
  }

  function doubleScore() {
    double.classList.add('show_double')
    setTimeout(function(){ double.classList.remove('show_double') }, 2000)
  }

  function runTheGame() {
    window.removeEventListener('mousedown', stickGrow)
    window.removeEventListener('mouseup', runTheGame)
    clearTimeout(stick_growing)
    stick.classList.add('falling_stick')

    var p1 = document.querySelectorAll('.pillar')[0].getBoundingClientRect(),
        p2 = document.querySelectorAll('.pillar')[1].getBoundingClientRect()

    stick.ontransitionend = function() {    
      if(stick_h < p2.right - p1.right && stick_h > p2.left - p1.right){
        score = score + Math.round(p2.x - p1.x)
        santa.style.transform = 'translateX('+(p2.x - original_x)+'px)' 
        santa.classList.add('santa_moving')
      } else {
        santa.style.transform = 'translateX('+(stick_h + offset)+'px)'
      }

      if(stick_h < ((p2.right - p2.width*.35) - p1.right) && stick_h > (p2.left + p2.width*.4) - p1.right){
        // console.log('double')
        // score = score + Math.round((p2.x - p1.x))
        score = score + 5000    
        doubleScore()
      }
      score_box.querySelector('span').innerHTML = score

      santa.ontransitionend = function() {
        // if success else fail
        if(stick_h < p2.right - p1.right && stick_h > p2.left - p1.right){
          santa.classList.add('success')

          // console.log('solid landing')
          stick_h = 0
          stick.style.height = stick_h + 'px'
          stick.classList.remove('falling_stick')
          santa.style.transform = ''
          pillars_x = pillars_x + (p2.x - p1.x)
          pillar_box.style.left = -pillars_x + 'px'  
          document.querySelectorAll('.pillar')[0].remove()
          addPillar()
          pillar_box.ontransitionend = function(){
            window.addEventListener('mousedown', stickGrow)
            window.addEventListener('mouseup', runTheGame)
            santa.classList.remove('santa_moving')
          }        
        } else {
          if(!santa.classList.contains('success')) {
            // console.log('you failed')
            check_score = score
            getScores()            
            score = 0
            stick_h = 0
            score_box.querySelector('span').innerHTML = score
            stick.style.height = stick_h + 'px'
            stick.classList.remove('falling_stick')   
            santa.classList.remove('santa_moving')
            santa.classList.add('fail')
            santa.onanimationend = function() {
              santa.style.transform = ''           
              santa.classList.remove('fail')
              santa.classList.add('success')
            }
          } else {          
            santa.classList.remove('success')
            window.addEventListener('mousedown', stickGrow)
            window.addEventListener('mouseup', runTheGame)
          }
        }      
      }
    }
  }

  function addHighScoresFrame() {
    var f = document.createElement('iframe')
    f.id = 'high_scores'
    f.style.position = 'absolute'
    f.style.left = '-9999px'
    f.style.top = '-9999px'
    document.body.appendChild(f)
  }
  addHighScoresFrame()

  function submitHighScore() {
    var form = 'https://docs.google.com/forms/d/e/1FAIpQLSeK0nvJfp7WojG_QOhTwFWed1gq4OnJkJ57RTVH9eSJ5P4sGQ/formResponse?',
        game_name = 'Santa Hero',
        player_name = prompt('YOU GOT A HIGH SCORE!', 'Name (5 letters max)').substr(0, 5),
        game_score = check_score,
        game = 'entry.787263041=' + game_name,
        name = 'entry.1587103203=' + player_name,
        new_score = 'entry.661694085=' + game_score

    document.querySelector('#high_scores').src = form + game + '&' + name + '&' + new_score
    check_score = 0
  }

  function getScores() {
    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSYZLDJIblDdWEv1t_dCQB5zsjZ-Qej0cFICzM84Uxe_AudabsmZevrhqQT66jm-t4etEpDtBjsRgoN/pub?gid=108080835&output=csv'
    Papa.parse(public_spreadsheet_url, {
      download: true,
      header: true,
      preview: 5,
      complete: compareScores
    })
  }

  function compareScores(results) {
    var data = results.data    

    if(Number(data[4].Score) < check_score) {
      submitHighScore()
      getScores()
    }

    scoreboard.innerHTML = `<h3>HIGH SCORES</h3><span class='score_heading rank'>RANK</span><span class='score_heading score_name'>NAME</span><span class='score_heading score_laps'>LAPS</span>`
    for(var i=0;i<data.length;i++){  
      var s = document.createElement('div')
      s.className = 'score_block'
      s.innerHTML = `<span>${i+1}</span><span>${data[i]['Player Name']}</span><span>${data[i]['Score']}</span>`
      scoreboard.appendChild(s)
    }
    // console.log(data);
  }  

  window.addEventListener('mousedown', stickGrow)
  window.addEventListener('mouseup', runTheGame)
  getScores()
}

setTimeout(init, 1000)