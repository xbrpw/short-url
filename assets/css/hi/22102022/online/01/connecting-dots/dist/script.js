let c = document.getElementById("theCanvas");

let ctx = c.getContext("2d"),
halfWidth = window.innerWidth / 2,
halfHeight = window.innerHeight / 2;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

c.addEventListener('click', addDot);

let prevX = 0,
prevY = 0,
cx = 0,
cy = 0;

function addDot(e) {
  let size = 0;

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';

  ctx.beginPath();

  if (e.x && e.y) {
    drawDot(e.x, e.y, size);
  } else {
    drawDot(e.clientX, e.clientY, size);
  }
}

function drawDot(x, y, s) {
  if (s !== 10) {
    ctx.arc(x, y, s, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    s++;
    requestAnimationFrame(function () {
      drawDot(x, y, s);
    });
  } else {
    if (prevX !== 0 && prevY !== 0) {
      addLine(x, y, prevX, prevY);
    } else {
      prevX = x;
      prevY = y;
    }
  }
}

function addLine(x, y, px, py) {
  let goingForward = false,
  goingUp = false;

  ctx.beginPath();
  ctx.moveTo(px, py);
  cx = px;
  cy = py;

  if (cx < x) {
    goingForward = true;
  }

  if (cy > y) {
    goingUp = true;
  }

  drawLine(x, y, goingForward, goingUp);
}

function drawLine(x, y, gf, gu) {
  let metX = false,
  metY = false;

  c.removeEventListener('click', addDot);

  ctx.lineTo(cx, cy);
  ctx.stroke();

  if (gf) {
    if (cx >= x) {
      metX = true;
    }

    if (cx < x && !metX) {
      cx += 4;
    }

  } else {
    if (cx <= x) {
      metX = true;
    }

    if (cx > x && !metX) {
      cx -= 4;
    }
  }

  if (gu) {
    if (cy <= y) {
      metY = true;
    }

    if (cy > y && !metY) {
      cy -= 4;
    }

  } else {
    if (cy >= y) {
      metY = true;
    }

    if (cy < y && !metY) {
      cy += 4;
    }
  }

  if (!metY || !metX) {
    requestAnimationFrame(function () {
      drawLine(x, y, gf, gu);
    });
  } else {
    prevX = x;
    prevY = y;
    c.addEventListener('click', addDot);
  }
}