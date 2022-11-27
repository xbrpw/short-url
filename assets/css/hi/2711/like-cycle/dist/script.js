var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    bgColour = '#216BB6',
    bezier = MorphSVGPlugin.pathDataToBezier('.footPath', {
  offsetX: -15,
  offsetY: -10
}), repeats = -1,
    pop = select('.pop'),
    popContainer = select('.popContainer')

var mainTl = new TimelineMax(),
    footLRotateTl = new TimelineMax({repeat: repeats}),
    footRRotateTl = new TimelineMax({repeat: repeats}),
    footLTimeTl = new TimelineMax({repeat: repeats}),
    footRTimeTl = new TimelineMax({repeat: repeats}),
    footLPathTl = new TimelineMax({paused: true}),
    footRPathTl = new TimelineMax({paused: true}),
    footLTl = new TimelineMax({repeat: repeats}),
    footRTl = new TimelineMax({repeat: repeats}),
    torsoTl = new TimelineMax({repeat: repeats}),
    headBobTl = new TimelineMax({repeat: repeats}),
    handBobTl = new TimelineMax({repeat: repeats}),
    heartTl = new TimelineMax(),
    roadTl = new TimelineMax({repeat: repeats}),
    bushesTl = new TimelineMax({repeat: repeats}).timeScale(0.5);

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

function createPop (obj) {
 var popClone = pop.cloneNode(true);
 //console.log(obj.target._gsTransform)
 popContainer.appendChild(popClone);
 TweenMax.set(popClone, {
   x: obj.target._gsTransform.x,
   y: obj.target._gsTransform.y
 })
 
} 
var bodyBounce = CustomEase.create("", "M0,0 C0.468,0.034 0.512,0.356 0.551,0.49 0.587,0.617 0.79,0.972 1,1")
var smoothSinus = CustomEase.create("", "M0,0 C0.15,0.022 0.374,0.306 0.507,0.512 0.652,0.738 0.876,0.98 1,1")
  footLPathTl.to('.footL', 2, {
    bezier: {
      type: "cubic",
      values: bezier,
      autoRotate: false
    },
    ease: Linear.easeNone
  })
    

  footRPathTl.to('.footR', 2, {
    bezier: {
      type: "cubic",
      values: bezier,
      autoRotate: false
    },
    ease: Linear.easeNone
  })
    

TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set('.foot', {
 transformOrigin: '80% 50%'
})
TweenMax.set(['.shadow'], {
 transformOrigin: '50% 50%'
})
TweenMax.set('.hand', {
 transformOrigin: '50% 100%'
})
TweenMax.set('.heartGroup use', {
 transformOrigin: '50% 50%'
})
footLRotateTl.to('.footL', 0.4, {
 rotation: 30,
 ease: Sine.easeIn
})
.to('.footL', 0.6, {
 rotation: -35,
 ease: Sine.easeIn
} )
.to('.footL', 0.5, {
 rotation: 0,
 ease: Power4.easeOut
} )
.to({}, 0.5,{})

roadTl.to('.road', 0.85, {
 //attr: {
  strokeDashoffset:'+=144',
 ease: Linear.easeNone,
 repeat: -1
 //}
})

footRRotateTl.to('.footR', 0.4, {
 rotation: 30,
 ease: Sine.easeIn
})
.to('.footR', 0.6, {
 rotation: -35, 
 ease: Sine.easeIn
} )
.to('.footR', 0.5, {
 rotation: 0,
 ease: Power4.easeOut
} )
.to({}, 0.5,{})


footLTimeTl.to(footLPathTl, 2, {
 time: footLPathTl.duration(),
 ease: smoothSinus
})

footRTimeTl.to(footRPathTl, 2, {
 time: footRPathTl.duration(),
 ease: smoothSinus
})

heartTl.staggerFromTo('.heartGroup use', 2, {
 x: 480,
 y: 240,
 alpha:1,
 scale: 0.3,
 fill:"#FFF"
}, {
 cycle: {
  x: function () {
   return randomBetween(490, 580)
  },
  y: function () {
   return randomBetween(40, 100)
  },
  duration: [11, 8, 9, 10]
 },
 alpha: 0,
 fill:bgColour,
 scale: 2,
 ease: Circ.easeOut,
 repeat: -1,
 onComplete: createPop,
 onCompleteParams:['{self}']
}, 0.6)


torsoTl.to('.upperBody',0.5, {
 y: 20,
 ease: smoothSinus,
 repeat: 1,
 yoyo: true
})
/* .from('.codepenLogo',0.5, {
 rotation: 10,
 transformOrigin: '50% 100%',
 ease: smoothSinus,
 repeat: 3,
 yoyo: true
}, 0) */
.to('.shadow', 0.5, {
 ease: smoothSinus,
 scaleX: 1.1,
 repeat: 1,
 yoyo: true
}, 0)

headBobTl.to('.headBob',0.5, {
 y: 7,
 ease: smoothSinus,
 repeat: 3,
 yoyo: true
})
handBobTl.to('.hand',0.32, {
 y: 3,
 rotation: 6,
 ease: CustomWiggle.create('', {type: 'easeInOut', wiggles:1}),
 //repeat: 2,
 //repeatDelay: 2,
 //yoyo: true
})
.to('.hand',0.32, {
 y: 3,
 delay: 0.5,
 rotation: 6,
 ease: CustomWiggle.create('', {type: 'easeInOut', wiggles:1}),
 repeat: 2,
 //repeatDelay: 2,
 //yoyo: true
})
.to('.hand',0.32, {
 y: 3,
 delay: 1,
 rotation: 6,
 ease: CustomWiggle.create('', {type: 'easeInOut', wiggles:1}),
 repeat: 1,
 //repeatDelay: 2,
 //yoyo: true
})
.to({}, 1.5, {})

bushesTl.staggerTo('.bush1', 5, {
 attr: {
  x: -150
 },
 cycle: {
  duration: [19,16,22,15]
 },
 repeat: -1,
 ease: Linear.easeNone
}, 1)
.staggerTo('.bush2', 5, {
 attr: {
  x: -150
 },
 cycle: {
  duration: [17,21,23,26],
  repeatDelay: [2,3,4]
 },
 repeat: -1,
 ease: Linear.easeNone
}, 1, 0)
/* .staggerTo('.bush3', 5, {
 attr: {
  x: -220
 },
 cycle: {
  duration: [11,15]
 },
 repeat: -1,
 ease: Linear.easeNone
}, 11, 0) */
//Draggable.create('.road', {})

footLTl.add([footLTimeTl, footLRotateTl])
footRTl.add([footRTimeTl, footRRotateTl])

mainTl.add(footLTl, 0)
.add(footRTl, 1)
.add(torsoTl, 0.75)
.add(headBobTl, 0.85)
.add(handBobTl, 0.9)
.add(heartTl, 0)
.add(bushesTl, 0)
.seek(100)


TweenMax.globalTimeScale(1.42)
//mainTl.add(torsoTl, 0.5)
//mainTl.add(footRRotateTl, 1)
//ScrubGSAPTimeline(mainTl);