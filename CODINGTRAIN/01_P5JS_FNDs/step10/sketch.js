// 5.1 functions basics
var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background('#313437')
  display()
  move()
  bounce()
}

function move() {
  ball.x = ball.x + ball.xspeed
  ball.y = ball.y + ball.yspeed
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1
  }
}

function display() {
  stroke('#F7F7F7')
  strokeWeight(1)
  fill('#ffcc00')
  ellipse(ball.x, ball.y, 24, 24)
}

// --- END ---
