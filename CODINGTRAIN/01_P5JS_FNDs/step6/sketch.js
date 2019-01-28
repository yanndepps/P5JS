var x = 0
var speed = 3

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background('#313437')
  noStroke()
  fill('#967efb')
  strokeWeight(4)
  ellipse(x, 200, 100, 100)
  if (x > width || x < 0) {
    speed *= -1
  }
	x = x + speed
}
