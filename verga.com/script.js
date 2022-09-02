console.clear();

let cols;
let rows;
let topOffset = 0;
let leftOffset = 0;
let cell;
let penises = [];

function setup () {
  createCanvas(100, 100);
  windowResized();
}

function windowResized () {
  const size = floor(min(windowWidth, windowHeight) * 0.95);
  resizeCanvas(size, size);
  
  cell = width < 450 ? 75 : 130;
  
  cols = floor(width / cell);
  rows = floor(height / cell);
  topOffset = (width - (cols * cell)) / 2;
  leftOffset = (height - (cols * cell)) / 2;
  
  createPenises();
  draw();
}

function createPenises () {
  penises = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      penises.push(new Penis(x, y));
    }
  }
}

const colors = ['hsla(22, 76%, 87%, 1)', 'hsla(25, 47%, 71%, 1)', 'hsla(29, 76%, 94%, 1)', 'hsla(25, 51%, 37%, 1)', 'hsla(16, 34%, 28%, 1)', 'hsla(16, 40%, 20%, 1)'];
class Penis {
  constructor (x, y) {
    this.x = x * cell + leftOffset;
    this.y = y * cell + topOffset;
    this.cross = (x !== 0 && y !== 0);
    
    this.reset();
    
    this.switch(true);
  }
  
  reset () {
    this.circumcised = Math.random() > 0.5;
    this.length = cell * ((Math.random() * 0.3) + 0.2);
    this.ballSize = cell * ((Math.random() * 0.08) + 0.2);
    const color = gsap.utils.splitColor(random(colors));
    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
  }
  
  switch (first) {
    const color = gsap.utils.splitColor(random(colors));
    const delay = first ? Math.random() * 2 : Math.random() * 2 + 1;
    gsap.timeline({
      onComplete: () => this.switch()
    }).to(this, {
      r: color[0],
      g: color[1],
      b: color[2],
      duration: 'random(0.3, 0.6)',
      ease: 'power1.inOut'
    }, delay).to(this, {
      length: cell * ((Math.random() * 0.3) + 0.2),
      ease: 'elastic.out(1.3, 0.4)',
      duration: 'random(1.5, 3)'
    }, delay).to(this, {
      ballSize: cell * ((Math.random() * 0.1) + 0.18),
      ease: 'bounce.out',
      duration: 'random(1, 3)'
    }, delay);
  }
  
  draw () {
    translate(this.x, this.y);

    if (this.cross) {
      stroke(0, 20);
      strokeWeight(1);
      line(-4, 0, 4, 0);
      line(0, -4, 0, 4);
    }
    
    fill(this.r, this.g, this.b);
    noStroke();
    // Left ball
    circle((cell * 0.4), (cell * 0.7), this.ballSize);
    // Middle ball, what?
    circle((cell * 0.5), (cell * 0.72), this.ballSize * 0.6);
    // Right ball
    circle((cell * 0.6), (cell * 0.7), this.ballSize);
    // Spongius
    rect((cell * 0.4), (cell * 0.7) - this.length, cell * 0.2, this.length);
    // Glans
    circle((cell * 0.5), (cell * 0.7) - this.length, cell * 0.21);
    if (this.circumcised) {
      // Urethra
      stroke(255);
      strokeWeight(2);
      line((cell * 0.5), (cell * 0.7) - this.length - (cell * 0.12), (cell * 0.5), (cell * 0.7) - this.length - (cell * 0.05))
    } else {
      // Uncircumcised
      triangle(
        (cell * 0.4), (cell * 0.7) - this.length,
        (cell * 0.6), (cell * 0.7) - this.length,
        (cell * 0.5), (cell * 0.7) - this.length - (cell * 0.18));
      fill(255);
      ellipse((cell * 0.5), (cell * 0.7) - this.length - (cell * 0.15), cell * 0.1, cell * 0.07);
    }
    
    resetMatrix();
  }
}

function draw () {
  clear();
  penises.forEach(penis => {
    penis.draw();
  });
}