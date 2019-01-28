// Boolean values

var x = 0
var speed = 3

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background('#313437')
  stroke('#F7F7F7')
  strokeWeight(4)
  noFill()

  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    if (mouseIsPressed) {
      background('#e9967a')
    }
    fill('#00ced1')
  }

  rectMode(CENTER)
  rect(300, 200, 100, 100)
}
