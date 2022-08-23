import Ball from "./models/Ball.js";
import Counter from "./models/Counter.js";
import EvilCircle from "./models/EvilCircle.js";
import { random, randomRGB } from "./utils/index.js";

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gameover = document.querySelector("#game-over")

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Counting balls

const countPara = document.querySelector("p");
const counter = new Counter(0, countPara);

// Define evilCircle
const evilCircle = new EvilCircle(30, 30);

// Animating the ball
const balls = [];

while (balls.length < 10) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  
  
  balls.push(ball);
  counter.increment();
}

function render() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists) {
      ball.draw(ctx);
      ball.update(width, height);
      ball.collisionDetect(balls);
    }

    evilCircle.draw(ctx);
    evilCircle.checkBounds(width, height);
    evilCircle.collisionDetect(balls, () =>  gameOver())
  }

  //requestAnimationFrame(loop);
}

function cleanBalls() {
  for (const ball of balls) {
    ball.exists = false;
  }
}

function gameOver(){
  cleanBalls();
  gameover.style.display = "flex";
}

let fps = 120;
const loop = () => setInterval(render, 1000 / fps);

loop();
