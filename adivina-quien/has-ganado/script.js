balls = [];
ballSize = 5;
numBalls = 64;
ballLife = 40; // Balls live this many iterations
freq = 5; // Explode at most every `freq` frames
time = 0;
previous = 0;
started = false;

function randInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

class Ball {
    constructor(x, y, vx, vy, color, size) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.size = size;
    }
    
    draw() {
        const {x, y, size, color} = this;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    update() {
        const sx = this.x + this.vx;
        const sy = this.y + this.vy;
        if (sx >= width  || sx <= 0) this.vx *= -1;
        if (sy >= height || sy <= 0) this.vy *= -1;
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.size -= ballSize / ballLife;
        return this.size > 0; // Success
    }
}

function setUpDimensions() {
    window.canvas = document.getElementsByTagName('canvas')[0];
    window.width  = window.innerWidth;
    window.height = window.innerHeight;
    window.ctx = canvas.getContext('2d');
    
    // Modify canvas to be high DPI
    // Lovingly adapted from
    // http://stackoverflow.com/a/15666143/1313757
    var dpr = window.devicePixelRatio || 1;
    var bsr = (ctx.webkitBackingStorePixelRatio
        || ctx.mozBackingStorePixelRatio
        || ctx.msBackingStorePixelRatio
        || ctx.oBackingStorePixelRatio
        || ctx.backingStorePixelRatio
        || 1);
    var ratio = dpr / bsr;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width  = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function setUp() {
    setUpDimensions();
    
    ctx.fillStyle = 'white';
    ctx.font = "1.5em monospace";
    ctx.textAlign = 'center';
    ctx.fillText('¡Has ganado!', width / 2, height / 2);
    
    canvas.addEventListener('mousemove', mousemove, false);
}

function mousemove(event) {
    started = true;
    if (time >= previous + freq) {
        previous = time;
        const [x, y] = [event.clientX, event.clientY]
        explode(x, y);
    }
}

function explode(cx, cy) {
    const R = randInt(0, 255);
    const G = randInt(0, 255);
    const B = randInt(0, 255);
    ballColor = `rgb(${R}, ${G}, ${B})`;

    const step = 2 * Math.PI / numBalls;
    const r = 20;
    for (let t = 0; t < 2 * Math.PI; t += step) {
        const ax = Math.cos(t);
        const ay = Math.sin(t);
        const x = r * ax + cx;
        const y = r * ay + cy;
        const v = 10;
        const ball = new Ball(x, y, ax * v, ay * v, ballColor, ballSize);
        balls.push(ball);
    }
}

function loop() {
    window.requestAnimationFrame(loop);
    if (!started) return;

    time++;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];
        if (ball.update())
            ball.draw();
        else {
            balls[i] = null;
        }
    }
    balls = balls.filter(item => item != null);
}

(() => {
    setUp();
    loop();
    window.addEventListener('resize', setUpDimensions);
})();