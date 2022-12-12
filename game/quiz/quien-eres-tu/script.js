console.clear()
var url = '#' // <-- place shop now URL here 
var questions = [
  one= {
    name:'My hair is...',
    answers:['non-existant','on the short side','shoulder length','long','wild and unkept'],
    img:'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=740a0833-47b6-56ec-9080-346e48b35670',
  },
  two= {
    name:"Friend-wise - I'd probably say I have...",
    answers:['just one - me','a few','a fair amount','a lot','more than I can count!'],
    img:'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=182a6f32-edc0-5b17-91f7-b6ebfa4d5856',
  },
  three= {
    name:'Given the chance I would live...',
    answers:['in water','by water','inland','in a desert','in the mountains'],
    img:'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=1ea004f3-a01a-56bd-9714-717735bc1e3b',
  },
  four= {
    name:'I tend to eat...',
    answers:['only fruits and veggies','mostly vegetables','a balanced diet','mostly meat','only meat'],
    img:'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=7cefade6-b8f3-56ae-8748-b06784406bd8',
  },
  five= {
    name:'I would describe myself as...',
    answers:['rather timid','a little shy','confident with friends','outgoing','positively scary'],
    img:'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=2bb4c167-666d-5c74-9eae-f439848ac5c0',
  },
]

var possible_results = [
			{
       	name: " A Subcompact",				
				//BITS FOR THE RESULTS PANEL:
				desc: "Bold, beautiful and brilliant - you're an elephant!<br> You're intelligent and powerful. Your friends love you and whilst no-one wants to mess with you,  everyone agrees - you are great! <br> In the wild there are only 600,000 African elephants and it is officially classed as vulnerable.",
				img: " https://contentservice.mc.reyrey.net/image_v1.0.0/?id=5cd24a40-a9cf-5d1d-ab7b-8dbe7a7d61fc ",
			},{
      	name: " A Sedan ",				
				//BITS FOR THE RESULTS PANEL:
				desc: "Sometimes described as a king you are magnificent and regal - just like the lion!<br> You're sociable and would spend all day lounging around in the sun if you could!<br>In the wild, lions are powerful and majestic, but they’re incredibly vulnerable to loss of habitat and conﬂict with people.",
				img: " https://contentservice.mc.reyrey.net/image_v1.0.0/?id=eb17f59c-d3d4-5325-811e-ab0d9a147493 ",
			},{
				name: " A Crossover ",      
				//BITS FOR THE RESULTS PANEL:
				desc: "Cute, cold and a fan of the water - you're an Adélie penguin.<br> You might be quiet and calm (and possibly described as small) but you are elegant, loyal and - of course - a brilliant swimmer! <br>In the wild the Adélie penguin is threatened by the effects of climate change.",
				img: " https://contentservice.mc.reyrey.net/image_v1.0.0/?id=857fa113-2a50-5731-b931-fed13f2638d8 ",
			},{
				name: " An SUV ",	
        //BITS FOR THE RESULTS PANEL:
				desc: "What else could you be? You are - of course - the gorgeous Amur leopard!<br> You have an amazing sense of style and are rarely seen out and about before the sun sets.<br>In the wild, habitat destruction, degradation and poaching of Amur leopards have made this amazing cat critically endangered.",
				img: " https://contentservice.mc.reyrey.net/image_v1.0.0/?id=2abdc004-bb95-5439-a5be-68c19a3105e6 ",
			},{
				name: " A Truck",	      
				//BITS FOR THE RESULTS PANEL:
				desc: "With a great sense of style and stunning features, you're a jaguar.<br> You have a great - if sometimes 'unique' - fashion sense and are always on the go. People need to be wary though... you have a powerful bite!<br> In the wild jaguars have been virtually wiped out from most of their northern range and are officially near threatened.",
				img: " https://contentservice.mc.reyrey.net/image_v1.0.0/?id=198ee490-4d36-57c4-8d9f-b8cfa7f1da92 ",
			}
		]

function startQuiz(){
   document.querySelector('#quizBox').innerHTML = "<div id='quiz-intro' class='quiz-slide slide-on'>    <div class='quiz-content'>      <h1>Which kind of<br>vehicle is right<br>for you?</h1>      <a class='nextbutton'>TAKE OUR QUIZ ></a>    </div>  </div>  <div id='quiz-q1' class='quiz-slide'></div>  <div id='quiz-q2' class='quiz-slide'></div>  <div id='quiz-q3' class='quiz-slide'></div>  <div id='quiz-q4' class='quiz-slide'></div>  <div id='quiz-q5' class='quiz-slide'></div>  <div id='quiz-result' class='quiz-slide'>    <div class='quiz-content'>      <img src='' />      <h1></h1>      <p></p>       <a id='shopNow'>Shop Now!</a>      <a id='retake'>Retake Quiz</a>    </div>  </div>  "
  
  var shopNow = document.querySelector('#shopNow')
  shopNow.href = url
  
  for(var prop in questions) {
    var i = questions.indexOf(questions[prop]) + 1
    var div = document.getElementById('quiz-q'+[i])
    div.style.backgroundImage = 'url('+questions[prop].img+')'
    var c = document.createElement('div')
    c.className = 'quiz-content'
    var h = document.createElement('h3')
    h.innerHTML = questions[prop].name.toUpperCase()
    div.appendChild(c).append(h)
    var u = document.createElement('ul')
    div.appendChild(c).append(h,u)
    var num = 1
    questions[prop].answers.forEach(function(a){    
      var l = document.createElement('li')
      l.className = 'answer'
      l.innerHTML = a.toUpperCase()
      l.setAttribute('data-cost',num)
      num++
      div.getElementsByTagName('ul')[0].appendChild(l)
    })
    var l = document.createElement('li')
    l.innerHTML = "<div id='q-count'><span>"+i+"</span> / 5</div><div class='nxtbutton'>></div>"
    if(i == 5) {
      l.innerHTML = "<div id='q-count'><span>"+i+"</span> / 5</div><div class='last-nxtbutton'>></div>"
    }
    div.getElementsByTagName('ul')[0].appendChild(l)
  }

  var nb = document.querySelectorAll('.nextbutton')
  nb.forEach(function(elm) {
    elm.addEventListener('click', function() {
      var s = elm.parentElement.parentElement
      s.className = 'quiz-slide slide-off'    
      s.nextElementSibling.classList.add('slide-on')
      setTimeout(function(){
        s.classList.remove('slide-off')
      },1000)
    })  
  })

  var a = document.querySelectorAll('.answer')
  a.forEach(function(elm){
    elm.addEventListener('click', function(){
      if(elm.parentElement.querySelector('.a-clicked')){
        elm.parentElement.querySelector('.a-clicked').classList.remove('a-clicked')
      }
      elm.classList.add('a-clicked')
      if(elm.parentElement.querySelector('.nxtbutton')){
        elm.parentElement.querySelector('.nxtbutton').style.display = 'block'
      } else {
        elm.parentElement.querySelector('.last-nxtbutton').style.display = 'block'
      }
    })
  })

  var nx = document.querySelectorAll('.quiz-slide div ul li .nxtbutton')
  nx.forEach(function(elm) {
    elm.addEventListener('click', function() {
      var s = elm.parentElement.parentElement.parentElement.parentElement
      s.className = 'quiz-slide slide-off'    
      s.nextElementSibling.classList.add('slide-on')
      setTimeout(function(){
        s.classList.remove('slide-off')
      },1000)
    })  
  })

  var score = -1
  var btn = document.querySelector('.last-nxtbutton')
  btn.addEventListener('click', function() {
    var a = document.querySelectorAll('.a-clicked')
    a.forEach(function(elm){
      var num = parseInt(elm.getAttribute('data-cost'))
      score = score + num
      console.log(score)
    })

    var res = document.querySelector('#quiz-result')
    var n = Math.floor(score/5)
    res.getElementsByTagName('h1')[0].innerHTML = possible_results[n].name
    res.getElementsByTagName('p')[0].innerHTML = possible_results[n].desc
    res.getElementsByTagName('img')[0].src = possible_results[n].img

    var s = btn.parentElement.parentElement.parentElement.parentElement
    s.className = 'quiz-slide slide-off'    
    s.nextElementSibling.classList.add('slide-on')
    setTimeout(function(){
      s.classList.remove('slide-off')
    },1000)
  })
  
  document.querySelector('#retake').addEventListener('click', startQuiz)
}

startQuiz()