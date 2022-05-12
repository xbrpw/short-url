const canvas = document.querySelector("canvas"),
context = canvas.getContext("2d", { alpha: true }),
red = document.createElement("canvas"),
redContext = red.getContext("2d"),
blue = document.createElement("canvas"),
blueContext = blue.getContext("2d");

const STATE_TITLE = 0,
STATE_GAME = 1,
STATE_WON = 2,
STATE_LOST = 3,
/**
 *
 * OPTIONS
 *
 */
POST_FX = false, // this enables or disables the post fx rendering, if the game is running slow set this to false
GLOW_FX = true, // this enables or disables the glow effect, if the game is running slow set this to false
PARTICLES_FX = true, // this enables or disables the particles effect, if the game is running slow set this to false
BACKGROUND = true, // this enables or disables the background, if the game is running slow set this to false
GLOW = GLOW_FX ? 64 : 0,
PROJECT_D = 4,
PROJECT_X = 2,
PROJECT_Y = 1,
PARTICLES = 20,
PAD_DIVISOR = 5,
VELX_BALL_MULTIPLIER = 2,
VELY_BALL_MULTIPLIER = 2,
MAX_BALL_VELOCITY = 10,
BALL_INITIAL_VELX = 5,
BALL_INITIAL_VELY = 0,
MIDDLE_WIDTH = 10,
MIDDLE_HEIGHT = 20,
MIDDLE_CENTER_X = MIDDLE_WIDTH * 0.5,
MIDDLE_CENTER_Y = MIDDLE_HEIGHT * 0.5,
BALL_WIDTH = 10,
BALL_HEIGHT = 10,
BALL_CENTER_X = BALL_WIDTH * 0.5,
BALL_CENTER_Y = BALL_HEIGHT * 0.5,
PAD_WIDTH = 10,
PAD_HEIGHT = 100,
PAD_CENTER_Y = PAD_HEIGHT * 0.5,
PAD_CENTER_X = PAD_WIDTH * 0.5,
PAD_ONE_RELX = 0.05,
PAD_TWO_RELX = 0.95,
PARTICLE_DECAY = 0.975,
GRID_SIZE_X = 25,
GRID_SIZE_Y = 25,
GRID_DECAY = 0.975,
GRID_HIT_ALPHA = 0.5,
TITLE_SIZE = 100,
SUBTITLE_SIZE = 20,
POINTS_SIZE = 40,
POINTS_Y = 10,
POINTS_X = 20;

const keys = new Array(256);
function keyreset() {
  for (let index = 0; index < keys.length; index++) {
    keys[index] = false;
  }
}

function keyup(e) {
  if (state === STATE_TITLE || state === STATE_WON || state === STATE_LOST) {
    padOne.y = canvas.height * 0.5;
    padOne.vy = 0;
    padOne.points = 0;

    padTwo.y = canvas.height * 0.5;
    padTwo.vx = 0;
    padTwo.points = 0;

    ball.x = canvas.width * 0.5;
    ball.y = canvas.height * 0.5;

    state = STATE_GAME;

    keyreset();
  } else if (state === STATE_GAME) {
    const key = e.keyCode;
    keys[key] = false;
  }
}

function keydown(e) {
  if (state === STATE_GAME) {
    const key = e.keyCode;
    keys[key] = true;
  }
}

const ball = {
  x: canvas.width * 0.5,
  y: canvas.height * 0.5,
  vx: BALL_INITIAL_VELX,
  vy: BALL_INITIAL_VELY },
padOne = {
  y: canvas.height * 0.5,
  vy: 0,
  points: 0 },
padTwo = {
  y: canvas.height * 0.5,
  vy: 0,
  points: 0 },
particles = [],grid = {
  alpha: 1.0 };


let state = STATE_TITLE,stateTransition = 0.0;

function tick(now = 0) {

  const CENTER_X = canvas.width * 0.5,
  CENTER_Y = canvas.height * 0.5;

  update(now);
  render(now);

  window.requestAnimationFrame(tick);
}

function update(now) {

  if (state === STATE_GAME) {

    input();

    updateParticles();
    updatePadOne();
    updatePadTwo();
    updateBall();

    if (padOne.points - padTwo.points >= 3) {
      state = STATE_WON;
    } else if (padOne.points - padTwo.points <= -3) {
      state = STATE_LOST;
    }

  } else {

    updateBackground(now);

  }

}

function input() {

  if (keys[38]) {
    padOne.vy -= 1;
  }

  if (keys[40]) {
    padOne.vy += 1;
  }

}

function updateBackground(now) {

  grid.alpha = (Math.sin(now % 10000 / 10000 * Math.PI * 2) + 1) * 0.1;

}

function updatePadOne() {

  padOne.y += padOne.vy;
  if (padOne.y < PAD_CENTER_Y) {
    padOne.y = PAD_CENTER_Y;
    padOne.vy = 0;
  } else if (padOne.y > canvas.height - PAD_CENTER_Y) {
    padOne.y = canvas.height - PAD_CENTER_Y;
    padOne.vy = 0;
  }

  padOne.vy *= 0.9;

}

function updatePadTwo() {

  if (ball.y < padTwo.y - PAD_CENTER_Y) {
    padTwo.vy -= 1;
  } else if (ball.y > padTwo.y + PAD_CENTER_Y) {
    padTwo.vy += 1;
  }

  padTwo.y += padTwo.vy;

  if (padTwo.y < PAD_CENTER_Y) {
    padTwo.y = PAD_CENTER_Y;
  } else if (padTwo.y > canvas.height - PAD_CENTER_Y) {
    padTwo.y = canvas.height - PAD_CENTER_Y;
  }

  padTwo.vy *= 0.9;

}

function createParticles() {
  if (!PARTICLES_FX) {
    return;
  }

  for (let index = 0; index < PARTICLES; index++) {
    particles.push({
      x: ball.x,
      y: ball.y + (Math.random() - 0.5) * BALL_HEIGHT,
      vx: -(ball.vx + (Math.random() + 1) * VELX_BALL_MULTIPLIER),
      vy: (Math.random() - 0.5) * VELY_BALL_MULTIPLIER,
      alpha: 1.0 });

  }

}

function updateBall() {

  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y >= padOne.y - (PAD_CENTER_Y + BALL_CENTER_Y) && ball.y <= padOne.y + (PAD_CENTER_Y + BALL_CENTER_Y)) {
    if (ball.x <= canvas.width * PAD_ONE_RELX + PAD_CENTER_X && ball.x >= canvas.width * PAD_ONE_RELX - PAD_CENTER_X) {

      ball.x = canvas.width * PAD_ONE_RELX + PAD_CENTER_X;
      createParticles();
      grid.alpha = GRID_HIT_ALPHA;

      if (ball.vx < 0 && ball.vx > -MAX_BALL_VELOCITY) {
        ball.vx--;
      } else if (ball.vx > 0 && ball.vx < MAX_BALL_VELOCITY) {
        ball.vx++;
      }

      ball.vx = -ball.vx;
      ball.vy = (ball.y - padOne.y) / PAD_DIVISOR;
    }
  }

  if (ball.y >= padTwo.y - (PAD_CENTER_Y + BALL_CENTER_Y) && ball.y <= padTwo.y + (PAD_CENTER_Y + BALL_CENTER_Y)) {
    if (ball.x >= canvas.width * PAD_TWO_RELX - PAD_CENTER_X && ball.x <= canvas.width * PAD_TWO_RELX + PAD_CENTER_X) {

      ball.x = canvas.width * PAD_TWO_RELX - PAD_CENTER_X;

      createParticles();

      grid.alpha = GRID_HIT_ALPHA;

      if (ball.vx < 0 && ball.vx > -MAX_BALL_VELOCITY) {
        ball.vx--;
      } else if (ball.vx > 0 && ball.vx < MAX_BALL_VELOCITY) {
        ball.vx++;
      }

      ball.vx = -ball.vx;
      ball.vy = (ball.y - padTwo.y) / PAD_DIVISOR;

    }
  }

  if (ball.x > canvas.width || ball.x < 0) {
    if (ball.x > canvas.width) {
      padOne.points++;
    } else if (ball.x < 0) {
      padTwo.points++;
    }

    ball.x = canvas.width * 0.5;
    ball.y = canvas.height * 0.5;
    ball.vx = BALL_INITIAL_VELX;
    ball.vy = BALL_INITIAL_VELY;

    padOne.y = canvas.height * 0.5;
    padTwo.y = canvas.height * 0.5;
  }

  if (ball.y > canvas.height) {
    ball.y = canvas.height;
    ball.vy = -ball.vy;
  } else if (ball.y < 0) {
    ball.y = 0;
    ball.vy = -ball.vy;
  }

}

function updateParticles() {

  for (let index = particles.length - 1; index >= 0; index--) {
    const particle = particles[index];
    particle.x += particle.vx;
    particle.y += particle.vy;

    particle.vx *= PARTICLE_DECAY;
    particle.vy *= PARTICLE_DECAY;

    particle.alpha *= PARTICLE_DECAY;

    if (particle.alpha <= 0.1) {
      particles.splice(index, 1);
    }

  }

}

function render(now) {

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.globalAlpha = 1.0;
  context.fillStyle = "#000";context.fillRect(0, 0, canvas.width, canvas.height);

  context.shadowBlur = GLOW;
  context.shadowColor = "#fff";
  context.fillStyle = "#fff";
  context.strokeStyle = "#fff";
  context.textBaseline = "top";

  if (state === STATE_TITLE) {

    renderTitle(now);
    if (BACKGROUND) {
      renderBackground(now);
    }

  } else if (state === STATE_GAME) {

    renderPoints(now);
    renderPads(now);
    renderBall(now);
    renderMiddle(now);

    context.shadowBlur = 0;

    if (PARTICLES_FX) {
      renderParticles(now);
    }

    if (BACKGROUND) {
      renderBackground(now);
    }

    if (POST_FX) {
      renderProjectionEffect(now);
    }

  } else if (state === STATE_WON) {

    renderWon(now);
    if (BACKGROUND) {
      renderBackground(now);
    }

  } else if (state === STATE_LOST) {

    renderLost(now);
    if (BACKGROUND) {
      renderBackground(now);
    }

  }

}

function renderWon(now) {

  const TEXT = "YOU WON";

  context.font = `bold ${TITLE_SIZE}px Orbitron, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";

  renderSinText(now, TEXT, TITLE_SIZE);

  context.font = `bold ${SUBTITLE_SIZE}px Orbitron, sans-serif`;

  context.globalAlpha = (Math.sin(now / 1000 * Math.PI * 2.0) + 1) * 0.5;
  context.fillText("press any key to start", canvas.width * 0.5, canvas.height * 0.8);

}

function renderLost(now) {

  const TEXT = "YOU LOST";

  context.font = `bold ${TITLE_SIZE}px Orbitron, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";

  renderSinText(now, TEXT, TITLE_SIZE);

  context.font = `bold ${SUBTITLE_SIZE}px Orbitron, sans-serif`;

  context.globalAlpha = (Math.sin(now / 1000 * Math.PI * 2.0) + 1) * 0.5;
  context.fillText("press any key to start", canvas.width * 0.5, canvas.height * 0.8);


}

function renderSinText(now, TEXT, SIZE) {

  for (let index = 0; index < TEXT.length; index++) {
    context.fillText(TEXT.charAt(index), canvas.width * 0.5 - (TEXT.length - 1) * 0.5 * SIZE + index * SIZE, canvas.height * 0.5 + Math.sin((now + index * 300 % 2500) / 2500 * Math.PI * 2) * SIZE * 0.5);
  }

}

function renderTitle(now) {

  const TEXT = "PONG";

  context.font = `bold ${TITLE_SIZE}px Orbitron, sans-serif`;
  context.textAlign = "center";

  renderSinText(now, TEXT, TITLE_SIZE);

  context.font = `bold ${SUBTITLE_SIZE}px Orbitron, sans-serif`;

  context.globalAlpha = (Math.sin(now / 1000 * Math.PI * 2.0) + 1) * 0.5;
  context.fillText("Press any key to start.", canvas.width * 0.5, canvas.height * 0.8);

}

function renderPoints() {

  context.font = `bold ${POINTS_SIZE}px Orbitron, sans-serif`;
  context.textBaseline = "top";

  context.textAlign = "right";
  context.fillText(padOne.points, canvas.width * 0.5 - POINTS_X, POINTS_Y);

  context.textAlign = "left";
  context.fillText(padTwo.points, canvas.width * 0.5 + POINTS_X, POINTS_Y);

}

function renderPads() {

  context.fillRect(canvas.width * PAD_ONE_RELX - PAD_CENTER_X, padOne.y - PAD_CENTER_Y, PAD_WIDTH, PAD_HEIGHT);
  context.fillRect(canvas.width * PAD_TWO_RELX - PAD_CENTER_X, padTwo.y - PAD_CENTER_Y, PAD_WIDTH, PAD_HEIGHT);

}

function renderBall() {
  context.fillRect(ball.x - BALL_CENTER_X, ball.y - BALL_CENTER_Y, BALL_WIDTH, BALL_HEIGHT);
}

function renderMiddle() {

  for (let y = 0; y < canvas.height; y += MIDDLE_HEIGHT * 2) {
    context.fillRect(canvas.width * 0.5 - MIDDLE_CENTER_X, y, MIDDLE_WIDTH, MIDDLE_HEIGHT);
  }

}

function renderParticles() {
  for (let index = 0; index < particles.length; index++) {
    const particle = particles[index];
    context.globalAlpha = particle.alpha;
    context.beginPath();
    context.moveTo(particle.x, particle.y);
    context.lineTo(particle.x - particle.vx * 3, particle.y - particle.vy * 3);
    context.stroke();
  }
}

function renderBackground() {

  grid.alpha *= GRID_DECAY;
  context.globalAlpha = grid.alpha;
  for (let x = 0; x < canvas.width; x += GRID_SIZE_X) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }

  for (let y = 0; y < canvas.height; y += GRID_SIZE_Y) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

}

function renderProjectionEffect() {

  redContext.globalCompositeOperation = "destination-atop";

  redContext.fillStyle = "#f00";
  redContext.fillRect(0, 0, red.width, red.height);

  redContext.drawImage(canvas, 0, 0);

  blueContext.globalCompositeOperation = "destination-atop";

  blueContext.fillStyle = "#0ff";
  blueContext.fillRect(0, 0, blue.width, blue.height);

  blueContext.drawImage(canvas, 0, 0);

  context.globalCompositeOperation = "lighter";
  context.drawImage(red, PROJECT_X * grid.alpha * PROJECT_D, PROJECT_Y * grid.alpha * PROJECT_D);
  context.drawImage(blue, -PROJECT_X * grid.alpha * PROJECT_D, -PROJECT_Y * grid.alpha * PROJECT_D);

}

function resize() {

  blue.width = red.width = canvas.width = window.innerWidth;
  blue.height = red.height = canvas.height = window.innerHeight;

  ball.x = canvas.width * 0.5;
  ball.y = canvas.height * 0.5;

  padOne.y = canvas.height * 0.5;
  padTwo.y = canvas.height * 0.5;

}

window.addEventListener("resize", resize);

window.addEventListener("keyup", keyup);
window.addEventListener("keydown", keydown);

resize();
tick();
keyreset();