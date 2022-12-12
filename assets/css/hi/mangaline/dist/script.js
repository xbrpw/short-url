class MangaLine {
  constructor() {
    this.setupCanvas();
    this.getElements();
    this.setupEvents();
    this.initialize();
  }

  getElements() {
    this.elements = document.getElementsByClassName('manga');
  }

  setupCanvas() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.display = 'block';
    this.canvas.style.height = '100vh';
    this.canvas.style.width = '100vw';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.zIndex = '9999';
    this.canvas.style.pointerEvents = 'none';
  }

  setupEvents() {
    window.addEventListener('resize', this.initialize.bind(this));

    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];

      element.addEventListener('mouseover', this.getElementInfos.bind(this, element), false);
      element.addEventListener('mouseout', this.erase.bind(this), false);

      element.addEventListener('touchstart', this.getElementInfos.bind(this, element), false);
      element.addEventListener('touchend', this.erase.bind(this), false);
    }
  }

  initialize() {
    this.width = this.canvas.width = Math.floor(window.innerWidth);
    this.height = this.canvas.height = Math.floor(window.innerHeight);
  }

  getElementInfos(element) {
    const infos = element.getBoundingClientRect();

    const cx = Math.floor(infos.left + infos.width * 0.5);
    const cy = Math.floor(infos.top + infos.height * 0.5);

    this.points = [];
    for (let i = 0; i < 1080; i++) {
      const tmp = {};
      const rad = i / 1080 * Math.PI * 2;

      tmp.cx = cx;
      tmp.cy = cy;
      tmp.sx = Math.cos(rad) * infos.width * (Math.random() + 1);
      tmp.sy = Math.sin(rad) * infos.height * (Math.random() + 1);
      tmp.ex = tmp.sx * 100;
      tmp.ey = tmp.sy * 100;
      tmp.lw = Math.random() * 2;

      this.points.push(tmp);
    }

    this.draw();
  }

  erase() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];

      this.ctx.save();
      this.ctx.translate(p.cx, p.cy);
      this.ctx.lineWidth = p.lw;
      this.ctx.beginPath();
      this.ctx.moveTo(p.sx, p.sy);
      this.ctx.lineTo(p.ex, p.ey);
      this.ctx.stroke();
      this.ctx.restore();
    }
  }}


window.addEventListener('load', () => {
  console.clear();

  const s = new MangaLine();
});