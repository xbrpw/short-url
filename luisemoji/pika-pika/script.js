var canvas, stage;
var currentSound = null;
var isBlink = false;
var targetScale = 0.5;
var cursor = null;
var oldX = 0;
var oldY = 0;

function init() {
  canvas = document.getElementById("canvas");
  canvas1 = document.getElementById("canvas1");
  container = document.getElementById("container");
  handleComplete();
}
function handleComplete() {

  w = 1093;
  h = 633;

  stage = new createjs.Stage(canvas);
  stage1 = new createjs.Stage(canvas1);

  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;

  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;

  createjs.Touch.enable(stage1);

  stage1.on("stagemousedown", handleDown, this);
  stage1.on("stagemouseup", handleUp, this);

  makeFace();

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("touchmove", handleMouseMove);

  
  createjs.Ticker.on("tick", tick);
  handleResize();
  window.addEventListener("resize", handleResize);
  
  loadSounds();
}

function makeFace() {
  face = new createjs.Container();
  makeEyes();
  makeCheeks();
  makeNose();
  makeMouth();
  face.scale = targetScale;
  stage.addChild(face);

}

function makeNose() {
  nose = new createjs.Shape();
  nose.graphics.beginFill("#000000").beginStroke().moveTo(-11.7,8.8).curveTo(-16.9,4.3,-20.8,1.5).curveTo(-36,-9.5,-27.9,-14.6).curveTo(-21.6,-18.5,-0,-19.3).curveTo(21.6,-18.5,27.9,-14.6).curveTo(36,-9.5,20.8,1.5).curveTo(17,4.3,11.8,8.8).lineTo(-0,19.3).lineTo(-11.7,8.8).closePath();


  nose.x = w >>1;
  nose.y = leftEye.y + 39;
  face.addChild(nose);
}

function makeMouth() {
  var mouth = new createjs.Shape();
  mouth.graphics.beginFill().beginStroke("#000000").setStrokeStyle(8,1,1).moveTo(201.2,-139.3).curveTo(190.3,-136.9,177.5,-136.8).curveTo(147.7,-136.7,110.2,-149.4).curveTo(77.7,-160.4,45.9,-178.6).curveTo(17,-195.2,0.2,-210.8).curveTo(-13.8,-197.8,-37,-183.7).curveTo(-62,-168.4,-89.2,-157.2).curveTo(-156.5,-129.2,-201.2,-139).moveTo(232.7,-154.4).curveTo(219.7,-143.4,201.2,-139.3).moveTo(-180.6,-39).curveTo(-179.4,-34.5,-178.1,-30.1).curveTo(-159.9,32.2,-134.8,83.2).curveTo(-106.6,140.4,-74.5,172.9).curveTo(-38.1,209.6,0.2,210.8).curveTo(38.2,209.4,74.5,172.7).curveTo(106.7,140.2,134.8,83).curveTo(160,32,178.1,-30.3).curveTo(179.2,-33.9,180.2,-37.4).curveTo(195.3,-91.2,201.2,-139.3).moveTo(-232.7,-154.1).curveTo(-219.7,-143.1,-201.2,-139).curveTo(-195.4,-91.8,-180.6,-39).curveTo(-84.8,-105.1,6.7,-105.2).curveTo(99.3,-105.3,180.2,-37.4);

  mouth.x = w >> 1;
  mouth.y = nose.y + (422/2) + 80;


  var togue = new createjs.Shape();
  togue.graphics.beginFill("#D5617B").beginStroke().moveTo(-74.2,120.1).curveTo(-106.4,87.6,-134.5,30.5).curveTo(-159.7,-20.5,-177.8,-82.8).lineTo(-180.3,-91.7).curveTo(-84.5,-157.9,6.9,-158).curveTo(99.6,-158.1,180.4,-90.1).lineTo(178.3,-83.1).curveTo(160.1,-20.8,135,30.2).curveTo(106.9,87.4,74.7,119.9).curveTo(38.4,156.6,0.4,158).curveTo(-37.9,156.8,-74.2,120.1).closePath();

  togue.x = w>>1;
  togue.y = mouth.y+55;

  var togueBG = new createjs.Shape();
  togueBG.graphics.beginFill("#683039").beginStroke().moveTo(6.7,18.9).curveTo(-84.8,19,-180.6,85.1).curveTo(-195.4,32.3,-201.2,-15).curveTo(-156.5,-5.2,-89.2,-33.1).curveTo(-62,-44.4,-37,-59.6).curveTo(-13.8,-73.7,0.2,-86.7).curveTo(17,-71.1,45.9,-54.6).curveTo(77.7,-36.3,110.1,-25.3).curveTo(147.6,-12.7,177.5,-12.7).curveTo(190.3,-12.8,201.2,-15.2).curveTo(195.3,32.9,180.1,86.7).curveTo(99.3,18.8,6.7,18.9).closePath();

  togueBG.x = togue.x;
  togueBG.y = mouth.y-120;

  face.addChild(togue,togueBG,mouth);
}

function makeCheeks() {
  var cheek = new createjs.Shape();
  var cheekWidth = 205/2;
  cheek.width = 205;
  cheek.graphics.s("#000000").ss(8).f("#E23D22").dc(0,0,cheekWidth);
  cheek.x = leftEye.x - 140;
  cheek.y = leftEye.y + 265;
  var rightCheek = cheek.clone();
  rightCheek.x = rightEye.x + 140;
  face.addChild(cheek, rightCheek)
}

function makeEyes() {
  leftEye = new createjs.Shape();
  leftEye.rotation = 120;
  var eyeWidth = 88;
  var eyeWidth1 = 34;
  leftEye.width = 88*2;
  leftEye.graphics.f("#000000").dc(0,0,eyeWidth).f("#FFFFFF").dc(eyeWidth1,-eyeWidth1,eyeWidth1);
  leftEye.x = (w >>1) - 300;
  leftEye.y = 100;

  var blink = new createjs.Shape();
  blink.graphics.beginFill("#000000").beginStroke().moveTo(16.7,7.3).curveTo(15.2,6.7,13.2,5.3).lineTo(9.8,3).curveTo(6.7,1.1,2.2,0.2).curveTo(0.4,-0.3,-1,-0.3).curveTo(-3.5,-0.5,-6.7,0.1).lineTo(-12.3,1.6).curveTo(-15,2.4,-16.1,3.1).curveTo(-17.2,3.9,-17.7,4.1).curveTo(-18.3,4.4,-19.4,4.6).lineTo(-22.3,5.1).curveTo(-23.4,5.3,-23.9,4.8).curveTo(-24.2,4.5,-24.2,3.9).curveTo(-24.4,1.9,-23.3,-0).curveTo(-22.3,-1.8,-20.5,-3.1).curveTo(-19,-4.2,-16.8,-5.1).lineTo(-12.8,-6.4).curveTo(-9.8,-7.3,-8.3,-7.5).curveTo(-5.7,-8,-2.9,-7.9).curveTo(0.1,-7.7,3.7,-6.8).curveTo(5.7,-6.3,10.1,-4.9).curveTo(13.1,-3.8,13.8,-3.4).curveTo(15.2,-2.7,17.8,-0.9).curveTo(20.3,0.9,21.8,1.6).curveTo(23.5,2.5,23.8,3).curveTo(24.3,3.5,24.2,4.2).curveTo(24.2,4.8,23.7,5.2).lineTo(22.6,5.5).curveTo(21.9,5.7,21.9,6.2).curveTo(21.9,6.5,22.1,7.1).curveTo(22.1,7.7,21,7.8).lineTo(20.1,7.9).curveTo(18.4,7.9,16.7,7.3).closePath().moveTo(18.9,-2.4).lineTo(18.4,-3).lineTo(17.9,-3.3).lineTo(17.7,-3.6).curveTo(17.3,-4.2,16.7,-4.5).lineTo(16,-4.9).curveTo(16,-4.9,16,-4.9).curveTo(16,-5,16,-5).curveTo(15.9,-5.1,15.9,-5.1).curveTo(16,-5.2,16,-5.3).curveTo(16,-5.3,16,-5.3).curveTo(16,-5.4,16,-5.4).curveTo(16,-5.4,16.1,-5.5).curveTo(16.1,-5.5,16.2,-5.5).curveTo(16.2,-5.5,16.3,-5.5).curveTo(16.3,-5.5,16.4,-5.5).curveTo(16.4,-5.5,16.4,-5.6).curveTo(16.4,-5.6,16.4,-5.6).curveTo(17.5,-5.6,18.1,-4.8).lineTo(18.5,-4.4).lineTo(19.5,-3.4).lineTo(19.9,-2.9).curveTo(20,-2.4,19.6,-2.3).lineTo(19.4,-2.2).curveTo(19.2,-2.2,18.9,-2.4).closePath();
  blink.scaleX = blink.scaleY = 5;
  blink.x = leftEye.x;
  blink.y = leftEye.y;

  leftEyeMC = new createjs.MovieClip({labels:{on:0, off:1}});
  leftEyeMC.timeline.addTween(createjs.Tween.get({})
                              .to({state:[{t:leftEye}]}).to({state:[{t:blink}]}, 1).wait(1));
  leftEyeMC.gotoAndStop("on");
  rightEye = leftEye.clone();
  rightEye.x = (w >>1) + 300;
  var blink2 = blink.clone();
  blink2.scaleX *= -1;
  blink2.x = rightEye.x;
  blink2.y = rightEye.y;

  rightEyeEyeMC = new createjs.MovieClip({labels:{on:0, off:1}});
  rightEyeEyeMC.timeline.addTween(createjs.Tween.get({})
                                  .to({state:[{t:rightEye}]}).to({state:[{t:blink2}]}, 1).wait(1));
  rightEyeEyeMC.gotoAndStop("on");
  var _this = this;
  createjs.Tween.get(this, {loop:-1}).wait(5000 + Math.random()*2000).call(function () {
    _this.blink();
  });

  face.addChild(leftEyeMC, rightEyeEyeMC);
}

function handleResize() {
  canvas1.width = canvas.width = window.innerWidth;
  canvas1.height = canvas.height = window.innerHeight;

  container.style.width = canvas.width + "px";
  container.style.height = canvas.height + "px";
  container.style.marginTop = -1*(canvas.height/2) + "px";
  container.style.marginLeft = -1*(canvas.width/2) + "px";

  stage.update(event);
  stage1.update(event);

  face.x = canvas.width - (w*face.scaleX)>>1;
  face.y = canvas.height - (h*face.scaleY)>>1;

}
var lastEvent;
function tick(event) {
  lastEvent = event;
  updateCursor();
  stage.update(event);
  stage1.update(event);
}

function updateCursor() {
  if (cursor != null) {
    var dx2 = cursor.x - rightEye.x;
    var dy2 = cursor.y - rightEye.y;
    var angle1 = -1*Math.atan2(dy2, dx2)*180/Math.PI;
    rightEye.rotation = angle1;
    leftEye.rotation = angle1;
    cursor.x += (stage1.mouseX - cursor.x) *.3;
    cursor.y += (stage1.mouseY - cursor.y) *.1;
    cursor.scale += (targetScale - cursor.scale) * .5;
  }
}

function handleDown(event) {
  targetScale = 0.1;
}

function handleUp(event) {
  blink();
  playSound();
  targetScale = 0.5;

}

function blink() {
  leftEyeMC.gotoAndStop("off");
  rightEyeEyeMC.gotoAndStop("off");
  setTimeout(function () {
    isBlink = !isBlink;
    leftEyeMC.gotoAndStop("on");
    rightEyeEyeMC.gotoAndStop("on");
  }, 200)
}

function loadSounds() {
  var manifest = [
    {id:"sound0", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika1.mp3"},
    {id:"sound1", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika2.mp3"},
    {id:"sound2", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika3.mp3"},
    {id:"sound3", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika4.mp3"},
    {id:"sound4", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika5.mp3"},
    {id:"sound5", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika6.mp3"},
    {id:"sound6", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika7.mp3"},
    {id:"sound7", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika8.mp3"},
    {id:"sound8", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika9.mp3"},
    {id:"PikaPika", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/PikaPika.png"},
    {id:"Pika", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika.png"},
    {id:"Pikachu", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pikachu.png"},
    {id:"Pika_chu", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/Pika_chu.png"},
    {id:"huh", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/huh.png"}
  ]
  queue = new createjs.LoadQueue(true);
  queue.installPlugin(createjs.Sound);
  queue.on("complete", handleSoundComplete, this);
  queue.loadManifest(manifest);
}

function playSound() {
  if (currentSound == null) {
    var indx = ++soundIndex % sounds.length;
    currentSound = sounds[indx];
    showText(indx);
    createjs.Tween.get(face,{onChange:function () {
      face.x = stage.canvas.width - (w*face.scale)>>1;
      face.y = stage.canvas.height - (h*face.scale)>>1;
    }}).to({scale:.25}, 100).to({scale:.5}, 200);
    currentSound.play();
  }
}

function handleSoundComplete(event) {
  sounds = [];
  soundIndex = 0;

  var _w = (124)-16;
  cursor = new createjs.Container();
  var shadow =  new createjs.Shape();
  shadow.graphics.f(createjs.Graphics.getRGB(72, 30, 47, 0.65)).dc(6, 15,_w*1.1);
  var mask = new createjs.Shape();
  mask.graphics.f("#000000").dc(0, 0,_w);
  var bg = new createjs.Shape();
  bg.graphics.f("#491e2f").dc(0, 0, 124);
  var _ball = new createjs.Shape();
  _ball.graphics.f("#ed424a").arc(0, 0, _w, 0, Math.PI*2)
    .f("#e3e4e6").arc(0, 0, _w, 0, Math.PI)
    .f("#FFFFFF").arc(-40, 0, _w+10, 0, Math.PI)
    .ss(50/2, "square").s("#312d2b").mt(-_w,0).lt(_w, 0)
    .mt(0, 0)
    .ss(1, "square")
    .f("#312d2b").dc(0, 0, 40).f("#FFFFFF").dc(0,0,25);

  cursor.x = Math.random()*canvas.width;
  cursor.y = Math.random()*canvas.height;
  _ball.mask = mask;
  cursor.addChild(shadow, bg, _ball);

  var PikaPikaBMP = new createjs.Bitmap(queue.getResult("PikaPika"));
  var PikachuBMP = new createjs.Bitmap(queue.getResult("Pikachu"));
  var PikaBMP = new createjs.Bitmap(queue.getResult("Pika"));
  var Pika_chuBMP = new createjs.Bitmap(queue.getResult("Pika_chu"));
  var huhBMP = new createjs.Bitmap(queue.getResult("huh"));

  displayMC = new createjs.MovieClip({labels:{PikaPika:0, Pikachu:1, Pika:2, Pika_chu:3, huh:4}});

  displayMC.timeline.addTween(createjs.Tween.get({})
                              .to({state:[{t:PikaPikaBMP}]})
                              .to({state:[{t:PikachuBMP}]},1)
                              .to({state:[{t:PikaBMP}]},1)
                              .to({state:[{t:Pika_chuBMP}]},1)
                              .to({state:[{t:huhBMP}]},1).wait(1));
  displayMC.gotoAndStop(5);
  displayMC.scale = 0;
  displayMC.alpha = 0;

  stage1.addChild(cursor, displayMC);

  for(var i=0;i<9;i++) {
    var sound = createjs.Sound.createInstance("sound"+i);
    sound.on("complete", handleSoundDone);
    sounds.push(sound);
  }
}

function showText(index) {
  var indx = null;
  var speedIn = 250;
  var speedOut = 250;
  var wait = 1000;
  var scaleUp = 0.5;
  var ease = createjs.Ease.elasticInOut;
  if (index) {
    switch (index) {
      case 2:
      case 4:
        indx = 0;
        break;
      case 5:
        indx = 0;
        scaleUp = 1;
        break;
      case 1:
      case 6:
        indx = 1;
        break;
      case 7:
        indx = 1;
        ease = createjs.Ease.backInOut;
        wait = 1700;
        speedIn = 500;
        speedOut = 250;
        break;
      case 3:
        indx = 2;
        break;
      case 8:
        indx = 4;
        scaleUp = 1;
        ease = createjs.Ease.backInOut;
        speedIn = 500;
        speedOut = 250;
        break;
      case 0:
        indx = 4;
        scaleUp = 1;
        ease = createjs.Ease.elasticInOut;
        speedIn = 700;
        wait = 1700;
        speedOut = 250;
        break;
    }
    if (indx != null) {
      displayMC.gotoAndStop(indx);
      displayMC.alpha = 1;
      var image = displayMC.children[0].image;
      displayMC.regX = image.width / 2;
      displayMC.regY = image.height / 2;
      displayMC.rotation = -8 + Math.random() * 16;
      displayMC.x = cursor.x;
      displayMC.y = cursor.y;
      createjs.Tween.get(displayMC, {override: true}).to({scale: scaleUp}, speedIn, ease).wait(wait).to({scale: 0}, speedOut, ease).call(function () {
        displayMC.alpha = 0;
      });
    }
  }
}

function handleSoundDone(event) {
  currentSound = null;
}

function handleMouseMove(event) {
  var cx = window.innerWidth>>1;
  var cy = window.innerHeight>>1;
  var dx = event.pageX - cx;
  var dy = event.pageY - cy;

  tiltx = (dy / cy);
  tilty = -(dx / cx);

  var distance = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
  var degree = (distance * 2);
  canvas.style.webkitTransform = canvas.style.MozTransform = canvas.style.msTransform = canvas.style.OTransform = canvas.style.transform = 'translateX('+(tilty*5)*10+'px) translateY('+(tiltx*5)+'px) rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + (degree*(10)*2) + 'deg)';

}

init();