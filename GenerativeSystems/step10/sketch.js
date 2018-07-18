
// 11 : Classes cont.

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
  const circles = new Circles()
  circles.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()

	// background('teal')
  // testLines()

  // let picker = random(1)
  // if (picker > 0.3) {
  //   outlineShape()
  // }

  // picker = random(1)
  // if (picker > 0.3) {
  //   simpleLines()
  // }

  // picker = random(1)
  // if (picker > 0.3) {
  //   circles()
  // }
}

// --- END