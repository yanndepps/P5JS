// 15 : Crystal Class

const CRYSTAL_SIZE = 500
const SIDES        = 6
let   PALETTE      = []

function setup() {
	createCanvas(530, 530, SVG)
  PALETTE = [
    color(255, 52, 154),  // pink
    color(4, 0, 152),     // blue
  ]
	noLoop()
	angleMode(DEGREES)
	rectMode(CENTER)
}

function draw() {
  // go to a point on the screen and draw a pixel
  // continue until we run out of row

  const oneCrystal = new Crystal(width/2, height/2)
  oneCrystal.render()
}

// --- END