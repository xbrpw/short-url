
console.clear();

namespace Demo {
  
  const baseURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/";
  
  const starTexture = PIXI.Texture.fromImage(`${baseURL}stars.png`);
  const starCount   = 3000;
  const starSize    = 25;
  const starFrames  = 6;
  
  const blockTexture = PIXI.Texture.fromImage(`${baseURL}blockfaces.png`);
  const blockCount   = 3;
  const blockSize    = 138;
  const blockFrames  = 3;  
  const blockColor   = 2;
    
  const eyeTexture = PIXI.Texture.fromImage(`${baseURL}blockeye.png`);
  
  const starTextures  = getTextures(starTexture, starSize, starFrames);
  const blockTextures = getTextures(blockTexture, blockSize, blockFrames);
     
  const alphaStart = 1;
  const alphaEnd   = 0;  
  
  const anchorX    = 0.5;
  const anchorY    = 0.5;  
  
  const delayMin   = 0.1;
  const delayMax   = 0.2;  
  
  const offsetMin  = 5;
  const offsetMax  = 20;    
  
  const scaleStart = 1.5;
  const scaleEnd   = 3;  
  
  const timeMin    = 0.4;
  const timeMax    = 0.6;  
  
  const spawnCount = 3;
  
     
  //
  // EYE
  // ===========================================================================
  class Eye extends PIXI.Sprite {
        
    constructor(x, y) {
      super(eyeTexture);
      
      this.anchor.set(0.5);
      this.pivot.set(0.5);
      this.position.set(x + 43/2, y + 13/2);      
      this.setRotation(Math.PI * 5/4);
    }
    
    setRotation(rotation) {
      
      TweenLite.to(this, 0.2, {
        directionalRotation: { rotation, useRadians: true }
      });
    }
  }
  
  
  //
  // BLOCK
  // ===========================================================================
  class Block extends PIXI.Container {
        
    private originX = 63;
    private originY = 36;
      
    leftEye  = new Eye(18, 29);
    rightEye = new Eye(66, 29);
  
    face = new PIXI.Sprite(blockTextures[blockColor]);
    
    constructor(x, y) {
      super();
            
      this.addChild(this.face);
      this.addChild(this.leftEye);
      this.addChild(this.rightEye);      
      
      this.setPosition(x, y);
    }
  
    setPosition(x, y) {
            
      this.position.set(x, y);
      
      this.eyeX = this.originX + this.x;
      this.eyeY = this.originY + this.y;
    }
  
    update() {
      
      let dx = pointer.x - this.eyeX;
      let dy = pointer.y - this.eyeY;
      
      let th = Math.atan2(dy, dx);
      
      let rotation = `${th}_short`;
      
      this.leftEye.setRotation(rotation);
      this.rightEye.setRotation(rotation);
    }
  }
  

  //
  // STAR
  // ===========================================================================
  class Star extends PIXI.Sprite {
    
    isActive = false;

    delay = _.random(delayMin, delayMax);
    time  = _.random(timeMin, timeMax);
    totalTime = this.delay + this.time;

    timeline;
    
    constructor(public emitter) {
      super();
      
      this.alpha   = 0;
      this.visible = false;
      this.texture = _.sample(starTextures);
      
      this.anchor.set(anchorX, anchorY);
      
      this.timeline = new TimelineMax({
        paused: true,
        onStart: () => { 
          this.visible  = true; 
          this.isActive = true;
        },
        onComplete: () => { 
          this.visible  = false; 
          this.isActive = false;
        }
      });
               
      this.timeline
        .set(this, { pixi: { alpha: alphaStart, scale: scaleStart }})
        .to(this, this.time, { pixi: { alpha: alphaEnd, scale: scaleEnd }}, this.delay);      
    }
    
    animate(x, y) {
      
      let xSign = _.randomSign();
      let ySign = _.randomSign();      
      
      let xMin  = _.random(offsetMin);
      let yMin  = _.random(offsetMin);
      
      let xMax  = _.random(offsetMin, offsetMax);
      let yMax  = _.random(offsetMin, offsetMax);
      
      x += xSign * xMin;
      y += ySign * yMin;
      
      let x2 = x + xSign * xMax;
      let y2 = y + ySign * yMax;
            
      this.position.set(x, y);       
      this.timeline.restart();      
      
      TweenLite.to(this, this.totalTime, { pixi: { x: x2, y: y2 }});      
    }
  }
  
  
  //
  // STAR EMITTER
  // ===========================================================================
  class StarEmitter {
    
    cachedStars = new LinkedList();
    
    container = new PIXI.ParticleContainer(starCount, {    
      position  : true,
      rotation  : false,
      alpha     : true,
      scale     : true,
      uvs       : false    
    }); 
  
    constructor() {
            
      for (let i = 0; i < starCount; i++) {
      
        let star = new Star(this);
        
        this.cachedStars.add(star);
        this.container.addChild(star);
      }
    }
      
    getStar() {
      
      let star = this.cachedStars.next;
      this.cachedStars.next = star.next || this.cachedStars.first;
      return star;
    }
     
    emit(x, y) {
      
      for (let i = 0; i < spawnCount; i++) {
              
        let star = this.getStar();
                
        if (star && !star.isActive) {
          star.animate(x, y);
        }
      }
      
      return this;
    }
  }
  
  
  //
  // POINTER
  // ===========================================================================
  class Pointer {
    
    x = 0;
    y = 0;
  
    isDirty = false;
  
    points = new LinkedList();
    
    constructor() {
      
      let onMove = this.onMove.bind(this);
           
      document.addEventListener("mousemove", onMove);
      document.addEventListener("touchmove", onMove);
    }
  
    onMove(event) {
            
      this.isDirty = true;
      
      this.x = event.pageX;
      this.y = event.pageY;

      if (event.targetTouches && event.targetTouches[0]) {
        
        event.preventDefault();
        this.x = event.targetTouches[0].pageX;
        this.y = event.targetTouches[0].pageY;
      }
      
      this.points.add({ x: this.x, y: this.y });
    }
  }
  
  
  //
  // SCENE
  // ===========================================================================
  class Scene {
    
    blocks  = [];
    width   = window.innerWidth;
    height  = window.innerHeight;    
    view    = document.querySelector("#view");
    stage   = new PIXI.Container();  
    emitter = new StarEmitter();
  
    renderer = PIXI.autoDetectRenderer(this.width, this.height, {
      antialias: true,
      transparent: true,
      view: this.view
    });
  
    constructor() {
            
      let rows = this.height / blockSize >> 0;
      let cols = this.width  / blockSize >> 0;
      
      if (!(cols & 1)) cols++;
      
      let offsetX = (this.width  - cols * blockSize) / 2;
      let offsetY = (this.height - rows * blockSize) / 2;
            
      for (let row = 0, i = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
                    
          if (!(i++ & 1)) continue;
          
          let x = offsetX + col * blockSize;
          let y = offsetY + row * blockSize;
                          
          let block = new Block(x, y);
          this.blocks.push(block);
          this.stage.addChild(block);         
        }        
      }
      
      this.stage.addChild(this.emitter.container);
      
      window.addEventListener("resize", this.resize.bind(this));
      
      TweenLite.ticker.addEventListener("tick", this.render.bind(this));      
    }

    resize() {
      
      this.width  = window.innerWidth;
      this.height = window.innerHeight;
      
      this.renderer.resize(this.width, this.height);
    }

    render() {
      
      if (pointer.isDirty) {
        
        pointer.isDirty = false;
                
        let points = pointer.points;
        let point  = points.first; 
        let size   = points.size; 
               
        while (size--) {          
          this.emitter.emit(point.x, point.y);
          point = point.next;
        }       
        
        size = this.blocks.length;
                
        for (let i = 0; i < size; i++) {          
          this.blocks[i].update();
        }     
        
        points.clear();
      }
      
      this.renderer.render(this.stage);
    }
  }
  
  function getTextures(baseTexture, size, numFrames) {
    
    let textures = [];
    
    for (let i = 0; i < numFrames; i++) {
    
      let frame   = new PIXI.Rectangle(size * i, 0, size, size);
      let texture = new PIXI.Texture(baseTexture, frame);
      textures.push(texture);
    }
    
    return textures;
  }
  
  let pointer = new Pointer();
  let scene   = new Scene();
}

// CodePen be messin' up my loops
window.CP = window.CP || {};
window.CP.shouldStopExecution = function() { return false };
window.CP.exitedLoop = function() {};


