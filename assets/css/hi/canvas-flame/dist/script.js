function fnFlame(t, e) {
      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN;
      return t >= e ? s : Math.floor(Math.random() * (e - t)) + t
    }

    o = {
      particle_image: new Image,
      bg_img: new Image,
      context: null,
      particles: [],
      ticks: 0,
      max_particles: 50,
      initFlame: function () {
        var t = this, e = document.getElementById("flameCanvas"),
          s = "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/canvas-flame/images/";

        this.context = e.getContext("2d"), this.particle_image.src = s + "fireblob3.png", this.bg_img.src = s + "torch-1.jpg", e.width = 450, e.height = 550, setInterval((function () {
          t.loop();
        }), 80)
      },
      loop: function () {
        this.ticks % 2 && this.makeParticle(), this.ticks++, this.context.fillStyle = "rgb(0, 0, 0, 0)", this.context.drawImage(this.bg_img, 0, 0, 450, 550);
        for (var t = 0; t < this.particles.length; t++) {
          var e = this.particles[t];
          e.render(this.context), e.update()
        }
        for (; this.particles.length > this.max_particles;)this.particles.shift()
      },
      makeParticle: function () {
        var t = new this.ImageParticle(this.particle_image, 210, 280);

        t.velX = fnFlame(-.5, .5), t.velY = 0, t.size = fnFlame(.4, .6), t.maxSize = 2, t.alpha = fnFlame(.7, 1), t.gravity = -.5, t.drag = 1.1, t.shrink = 1.2,
          t.fade = .03, t.rotation = fnFlame(0, 360), t.spin = fnFlame(-5, 5), t.compositeOperation = "lighter", this.particles.push(t);
      },
      ImageParticle: function (t, e, s) {
        this.posX = e, this.posY = s, this.velX = 0, this.velY = 0, this.shrink = 1, this.size = 1, this.maxSize = -1, this.shimmer = false, this.drag = 1, this.gravity = 0, this.alpha = 1, this.fade = 0, this.spin = 0, this.rotation = 0, this.compositeOperation = "source-over", this.img = t, this.update = function () {
          this.velX *= this.drag, this.velY *= this.drag, this.velY += this.gravity, this.posX += this.velX, this.posY += this.velY, this.size *= this.shrink, this.maxSize > 0 && this.size > this.maxSize && (this.size = this.maxSize), this.alpha -= this.fade, this.alpha < 0 && (this.alpha = 0), this.rotation += this.spin;
        }, this.render = function (e) {
          if (this.alpha) {
            e.save(), e.translate(this.posX, this.posY);
            var s = this.shimmer ? this.size * Math.random() : this.size;
            e.scale(s, s), e.rotate(this.rotation * (Math.PI / 180)), e.translate(-.5 * t.width, -.5 * t.width), e.globalAlpha = this.alpha, e.globalCompositeOperation = this.compositeOperation, e.drawImage(t, 0, 0), e.restore();
          }
        }
      }
    };

    o.initFlame();