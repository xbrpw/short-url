const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  fgColor = 'white',
  size = Math.round(Math.min(width, height) / 100);

let ctrls = {
    left: false,
    right: false,
    space: false,
  },
  ship = {
    x: roundToNearest(width / 2, size),
    y: roundToNearest(height, size) - size * 10,
    v: 0,
    speed: size,
    reloading: function() {
      return false;
    },
    act: function(ctx) {
      if (ctrls.left) {
        this.v = 0 - this.speed;
      } else if (ctrls.right) {
        this.v = this.speed;
      } else {
        this.v = 0;
      }

      if (!this.reloading() && ctrls.space) {
        this.shoot();
      }

      ctx.clearRect(ship.x - size * 2, ship.y, size * 5, size * 3);

      this.x = clamp(this.x + this.v, 0, width);

      ctx.fillStyle = fgColor;

      ctx.fillRect(this.x, this.y, size, size);
      ctx.fillRect(this.x + size, this.y + size, size, size);
      ctx.fillRect(this.x - size, this.y + size, size, size);
      ctx.fillRect(this.x + size * 2, this.y + size * 2, size, size);
      ctx.fillRect(this.x - size * 2, this.y + size * 2, size, size);
    },
    shoot: function() {
      let newBullet = Object.create(bullet);
      newBullet.y = this.y - size;
      newBullet.x = this.x;
      bullets.push(newBullet);
      this.reloading = (function() {
        let count = 0;
        return function() {
          return count++ <= 10;
        };
      })();
    }
  },
  bullet = {
    x: 0,
    y: 0,
    v: 0,
    speed: size * 2,
    hit: false,
    hitCount: 1,
    act: function(ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(this.x, this.y, size, size);

      let nextY = this.y - this.speed;
      id = ctx.getImageData(this.x, nextY, size, size);

      if (this.y <= 0) {
        this.hit = true;
      } else if (id.data.reduce(function(pv, cv) {
          return pv + cv;
        }, 0) / (size * size) !== 0) {
        this.hit = true;
      }

      if (this.hit && this.hitCount <= 5) {
        drawCircle(ctx, this.x, this.y, this.hitCount * size, size, fgColor);
        this.hitCount++;
      } else if (!this.hit) {
        ctx.clearRect(this.x, this.y, size, size * 3);
        this.y = nextY;
        ctx.fillStyle = fgColor;
        ctx.fillRect(this.x, this.y, size, size * 3);
      }

    }
  },
  bullets = [];

function clamp(value, min, max) {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}

function roundToNearest(value, multiplier) {
  return Math.round(value / multiplier) * multiplier;
}

function drawPtrn(ptrn, offset, ctx, fgColor, bgColor) {
  let x = 0,
    w = ptrn[0].length,
    t = offset * size;

  context.fillStyle = fgColor;

  while (x < width) {
    for (var i = 0; i < ptrn.length; i++) {
      for (var j = 0; j < ptrn[i].length; j++) {
        if (ptrn[i][j] === 1) {
          ctx.fillRect(x + j * size, t + i * size, size, size);
        }
      };
    };

    x += w * size;
  }
}

function drawCircle(ctx, xo, yo, radius, size, color) {
  for (let y = -radius; y <= radius; y += size) {
    for (let x = -radius; x <= radius; x += size) {
      if ((x * x) + (y * y) <= (radius * radius)) {
        ctx.fillStyle = color;
        if (radius >= size * 5) {
          ctx.clearRect(x + xo, y + yo, size, size);
        } else {
          ctx.fillRect(x + xo, y + yo, size, size);
        }
      }
    }
  }
}

document.body.addEventListener("keydown", function(e) {

  e.preventDefault();
  
  if (e.keyCode === 37) {
    ctrls.left = true;
  }

  if (e.keyCode === 39) {
    ctrls.right = true;
  }

  if (e.keyCode === 32) {
    ctrls.space = true;
  }

});

document.body.addEventListener("keyup", function(e) {

  e.preventDefault();
  
  if (e.keyCode === 37) {
    ctrls.left = false;
  }

  if (e.keyCode === 39) {
    ctrls.right = false;
  }

  if (e.keyCode === 32) {
    ctrls.space = false;
  }

});

document.body.addEventListener("touchstart", function(e) {

  e.preventDefault();
  
  ctrls.space = true;
  
  if(e.touches[0].clientX < width / 2) {
    ctrls.left = true;
  }
  else {
    ctrls.right = true;
  }
  
});

document.body.addEventListener("touchend", function(e) {

  e.preventDefault();
  
  ctrls.space = ctrls.left = ctrls.right = false;
  
});

function init() {

  // Draw pattern
  const ptrns = [
    [
      [0, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 1, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
      [0, 0, 1, 0],
      [0, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
      [0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0]

    ]
  ];

  drawPtrn(ptrns[0], 1, context, fgColor);
  drawPtrn(ptrns[1], ptrns[0].length + 2, context, fgColor);
  drawPtrn(ptrns[2], 20, context, fgColor);
  drawPtrn(ptrns[3], 23, context, fgColor);
  drawPtrn(ptrns[2].reverse(), 30, context, fgColor);
  drawPtrn(ptrns[1], 35, context, fgColor);
  drawPtrn(ptrns[0], 43, context, fgColor);
  drawPtrn(ptrns[4], 54, context, fgColor);

}

function update() {

  // Update ship
  ship.act(context);

  // Update bullets
  bullets.forEach(function(bullet) {
    bullet.act(context);
  });

  // Clean up bullets outside canvas
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];

    if (bullet.y < 0 || bullet.hitCount >= 6) {
      bullets.splice(i, 1);
    }
  }

  requestAnimationFrame(update);
};

init();
requestAnimationFrame(update);