window.onload = function() {
  var canvas = document.getElementById("canvas"), 
  ctx = canvas.getContext("2d"),
  shapes = [],
  numShapes = document.querySelector('input[name="numShapes"]'),
  fillShapes = document.querySelector('input[name="fillShapes"]');
  
  document.body.onmousemove = function(e) { // whenever the mouse is moved
    var shape = getRandomShape(); // create a random shape
    
    // 60% chance shape will snap to x or y coordinates of the mouse
    if(Math.random() < .6) shape.x = e.pageX;
    if(Math.random() < .6) shape.y = e.pageY;
    
    shapes.unshift(shape); // insert new shape at beginning of array
    shapes = shapes.splice(0,numShapes.value); // only keep most recent 100 shapes
  };
  
  
  function step(timestamp) { // each frame of the animation
     ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the last frame
     ctx.globalCompositeOperation = 'multiply';
    
    for(var i = 0; i < shapes.length; i++) {
      var shape = shapes[i];
      
      ctx.beginPath();
      ctx.fillStyle = ctx.strokeStyle = shape.fill;
      
      if(shape.radius === undefined) { // draw a rectangle
        ctx.rect(shape.x,shape.y,shape.width,shape.height);
      } else { // draw a circle
        ctx.ellipse(shape.x,shape.y,shape.radius,shape.radius,shape.rotation,shape.startAngle,shape.endAngle);
      }
      
      if(fillShapes.checked) ctx.fill();
      else ctx.stroke();
    }
    
    window.requestAnimationFrame(step); // keep the animation ticking
  }
  
  window.requestAnimationFrame(step); // start the animation
  
  window.onresize = function() {
    handleResize(); // keep the canvas full screen
  };
  
  handleResize();
  
  function randomRange(min,max) {
    return min + (Math.random() * (max-min));
  }
  
  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function getRandomShape() {
    var potentialShapes = [
      Rect(randomRange(0,window.innerWidth), randomRange(0,window.innerHeight), randomRange(18,90), randomRange(18,90)),
      Circle(randomRange(0,window.innerWidth), randomRange(0,window.innerHeight),randomRange(18,90))
    ];
    return potentialShapes[Math.round(Math.random() * (potentialShapes.length - 1))];
  }
  
  function randomColor() { // http://www.paulirish.com/2009/random-hex-color-code-snippets/
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  
  function Rect(x,y,width,height,fill) {
    fill = typeof fill !== 'undefined' ? fill : randomColor();
    return {
      x:x,
      y:y,
      width:width,
      height:height,
      fill:fill
    }
  }
  
  function Circle(x,y,radius,rotation,startAngle,endAngle,fill) {
    x = typeof x !== 'undefined' ? x : 0;
    y = typeof y !== 'undefined' ? y : 0;
    radius = typeof radius !== 'undefined' ? radius : 0;
    rotation = typeof rotation !== 'undefined' ? rotation : 45 * Math.PI/180;
    startAngle = typeof startAngle !== 'undefined' ?  startAngle : 0;
    endAngle = typeof endAngle !== 'undefined' ?  endAngle : 2 * Math.PI;
    fill = typeof fill !== 'undefined' ? fill : randomColor();
    return {
      x:x,
      y:y,
      radius:radius,
      radiusX:radius,
      radiusY:radius,
      rotation:rotation,
      startAngle:startAngle,
      endAngle:endAngle,
      fill:fill
    }
  }
}