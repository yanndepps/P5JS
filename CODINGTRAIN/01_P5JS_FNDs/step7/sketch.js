// Boolean values
var on = false

function setup() {
  createCanvas(600, 400)
}

function draw() {
  if (on) {
    background('#313437')
  } else {
    background('#cccc99')
  }
  stroke('#F7F7F7')
  strokeWeight(2)
  noFill()
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill('#ffcc00')
  }
  rectMode(CENTER)
  rect(300, 200, 100, 100)
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on
  }
}
