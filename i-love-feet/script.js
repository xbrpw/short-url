var canvas, stage;
var tongue = null;
var targetRots = [-2, 2];
var turnon = false;
var footOffSetX = -500;
var yum = null;

function loadAssets() {
  var manifest = [
    {id: "foot", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/foot.png", crossDomain:"Anonymous"},
    {id: "back", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/mouth-back.png"},
    {id: "front", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/mouth-front.png"},
    {id: "tongue", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/tongue.png"}
  ];
  loadQ = new createjs.LoadQueue(true);
  
  loadQ.addEventListener("complete", handleLoadComplete);
  loadQ.loadManifest(manifest);
}

function loadSound() {
   var manifest = [{id:"yum", src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/yum.mp3"}]
  var loadQ = new createjs.LoadQueue(true);
  loadQ.installPlugin(createjs.Sound);
  loadQ.addEventListener("complete", handleSoundComplete);
  loadQ.loadManifest(manifest);
}

function init() {
  canvas = document.getElementById("canvas");
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver(20);
  createjs.Touch.enable(stage);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  loadAssets();
  //SD:Simple workaround to get preview to appear on codepen.
  loadSound();
}

function handleSoundComplete() {
  yum = createjs.Sound.createInstance("yum");
}

function handleLoadComplete(event) {
  scale = (Math.min(canvas.width, canvas.height)/1318);

  window.addEventListener("resize", handleResize);

  foot = new createjs.Bitmap(loadQ.getResult('foot'));
  front = new createjs.Bitmap(loadQ.getResult('front'));
  tongue = new createjs.Bitmap(loadQ.getResult('tongue'));
  back = new createjs.Bitmap(loadQ.getResult('back'));

  foot.cursor = "ew-resize";
  foot.x = canvas.width - foot.image.width*scale;
  foot.y = footOffSetX*scale;

  back.x = front.image.width - back.image.width-41;
  back.y = (front.image.height / 2) - 11;

  faceRot = 0;
  faceX = 0;
  footTerrorSpeed = 0;
  index = 0;
  angle = 0;

  _x = foot.x;
  _y = foot.y;

  foot.on("mousedown", handleFootDown);
  foot.on("pressmove", handleFootMove);
  foot.on("pressup", handleFootUp);

  targetRot = [index];

  tongue.x = back.x;
  tongue.regX = 10;
  tongue.y = (back.y + back.image.height/2)-20;
  tongue.posX = tongue.x-20;
  tongue.posY = tongue.y;
  tongue.speed = 0;
  tongue.rotSpeed = 0;

  face = new createjs.Container();
  face.regY = front.image.height>>1;
  face.y = canvas.height>>1;
  face.width = front.image.width;
  face.height = front.image.height;
  face.addChild(back, tongue, front);

  startDistance = foot.x - (face.x + face.width);

  stage.addChild(face, foot);

  handleResize();
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", onTick);
}

function handleFootDown(evt) {
  turnon = true;
  faceRot = -3;
  faceX = -25*scale;
  startDistance = this.x - (face.x + face.width);
  this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
  console.log(yum);
  if (yum != null) {
    yum.play({loop:-1});
  }
}

function handleFootMove (evt) {
  var xValue = evt.stageX + this.offset.x;
  var yValue = evt.stageY + this.offset.y;
  var pt = tongue.localToGlobal(174, 20);
  this.x = Math.max(pt.x,Math.min(xValue, canvas.width - this.image.width*scale));
  this.y = Math.min(-10,Math.max(yValue, -this.image.height*scale));
  _x = this.x;
  _y = this.y;
}

function handleFootUp(evt) {
  createjs.Tween.get(foot).to({x:canvas.width-this.image.width*scale, y:footOffSetX*scale},150);
  tongue.rotation = 0;
  tongue.speed = 0;
  angle = 0;
  tongue.rotSpeed = 0;
  turnon = false;
  faceRot = 0;
  faceX = 0;
  footTerrorSpeed = 0;
  _x = canvas.width - this.image.width*scale;
  _y = footOffSetX*scale;
  if (yum != null) {
    yum.stop();
  }
}

function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  scale = (Math.min(canvas.width, canvas.height)/1049);

  face.y = canvas.height>>1;
  face.scale = Math.min(scale, 1);
  foot.x = canvas.width - foot.image.width*scale;
  foot.scale = scale;
  foot.y = footOffSetX*scale;

  _x = foot.x;
  _y = foot.y;

  stage.update(lastEvent);
}

function updateFace() {
  face.rotation += (faceRot - face.rotation)*0.1;
  face.x += (faceX - face.x)*0.1
}

function updateTongue() {
  if (tongue == null) {return;}
  tongue.x = tongue.posX + Math.cos(angle)*10;
  tongue.y = tongue.posY + Math.sin(angle)*10;
  angle -= tongue.rotSpeed;
}

function yumyum() {
  tongue.rotation += (targetRot - tongue.rotation)*tongue.speed;
  if (Math.abs(targetRot - tongue.rotation)< 1) {
    targetRot = targetRots[++index % targetRots.length];
  }
}

function calculateDistance() {
  var pt = foot.localToGlobal(0, 1130);
  var pt1 = tongue.localToGlobal(174, 20);
  var dx = pt.x - pt1.x;
  var dy = pt.y - pt1.y;
  var distance = Math.sqrt(dx*dx + dy*dy);
  var per =  1 - (distance /startDistance);
  tongue.speed = Math.max(.1,  Math.min(per, 0.95));
  tongue.rotSpeed = Math.max(.15,  Math.min(per, .99));
  if (distance < 50) {
    if (yum != null) {
      yum.volume = per*0.5;
    }
    
    footTerrorSpeed = 3*per;
  }else {
    if (yum != null) {
      yum.volume = 0;
    }
    footTerrorSpeed = 1;
  }
  foot.x = _x + Math.random()*footTerrorSpeed;
  foot.y =_y + Math.random()*footTerrorSpeed;
}
var lastEvent = null;
function onTick(event) {
  lastEvent = event;
  if (turnon === true) {
    calculateDistance();
    updateTongue();
    yumyum();
  }
  updateFace();

  stage.update(event);
}
init();