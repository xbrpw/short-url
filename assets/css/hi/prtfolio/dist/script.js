let max_particles = 1000;
let hero = 0;
var tela = document.createElement('canvas');
tela.width = $(window).width();
tela.height = $(window).height();
$("body").append(tela);

var canvas = tela.getContext('2d');

class Particle {
  constructor(canvas, progress) {
    let random = Math.random();
    this.progress = 0;
    this.canvas = canvas;


    this.x = $(window).width() / 2 + (Math.random() * 200 - Math.random() * 200);
    this.y = $(window).height() / 2 + (Math.random() * 200 - Math.random() * 200);
    this.s = Math.random() * 1;
    this.a = 0;
    this.w = $(window).width();
    this.h = $(window).height();
    this.radius = random > .2 ? Math.random() * 1 : Math.random() * .5;
    this.color = random > .2 ? "#EEEEEE" : "#FFFFFF";
    this.color = random > .8 ? "#EEEEEE" : this.color;
    this.radius = this.color == "#FFFFFF" ? 2 + Math.random() * 2 : this.radius;

    if (hero < 5) {
      this.color = "#005eff";
      this.radius = 2;
      hero++;
    }

    // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
    this.variantx1 = Math.random() * 300;
    this.variantx2 = Math.random() * 400;
    this.varianty1 = Math.random() * 100;
    this.varianty2 = Math.random() * 120;
  }

  render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move() {
    this.x += Math.cos(this.a) * this.s;
    this.y += Math.sin(this.a) * this.s;
    this.a += Math.random() * 0.7 - 0.35;

    if (this.x < 0 || this.x > this.w - this.radius) {
      return false;
    }

    if (this.y < 0 || this.y > this.h - this.radius) {
      return false;
    }
    this.render();
    this.progress++;
    return true;
  }}


let particles = [];
let init_num = popolate(max_particles);
function popolate(num) {
  for (var i = 0; i < num; i++) {
    setTimeout(
    function () {
      particles.push(new Particle(canvas, i));
    }.bind(this),
    i * 2);
  }
  return particles.length;
}

function clear() {
  canvas.globalAlpha = 0.03;
  canvas.fillStyle = '#FFFFFF';
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha = 1;
}

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  if (particles.length < init_num) {
    popolate(1);
  }
  clear();
  requestAnimationFrame(update.bind(this));
}
update();