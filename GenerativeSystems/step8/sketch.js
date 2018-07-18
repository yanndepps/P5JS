
// 09 : Random Combos

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
	// background('teal')
  // testLines()
  // outlineShape()
  // simpleLines()
  // circles()

  let picker = random(1)
  if (picker > 0.3) {
    outlineShape()
  }

  picker = random(1)
  if (picker > 0.3) {
    simpleLines()
  }

  picker = random(1)
  if (picker > 0.3) {
    circles()
  }
}

// defines circles shapes
function circles() {
  const numShapes   = SIDES
  const angle       = 360 / numShapes
  const shapeSize   = (CRYSTAL_SIZE / 2) * 0.93
  const position    = (CRYSTAL_SIZE / 2) - (shapeSize / 2)
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(strokeColor)
  strokeWeight(1)
  push()
  translate(width/2, height/2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
}

// defines some lines
function simpleLines() {
  const stepOut     = 8
  const numSteps    = randomSelectTwo() ? stepOut : int(stepOut * 1.25)
  const step        = (CRYSTAL_SIZE / 2) / numSteps
  const start       = floor(random(0, numSteps))
  const stop        = floor(random(start, numSteps + 1))

  let   numShapes   = randomSelectTwo() ? SIDES : SIDES * 2   
  const strokeColor = getRandomFromPalette()
  const weight      = randomSelectTwo() ? 1 : 3
  const angle       = 360 / numShapes

  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    for (let i = 0; i < numShapes; i++) {
      line(start * step, 0, stop * step, 0)
      // line(0, 0, CRYSTAL_SIZE / 2, 0)
      rotate(angle)
    }
  pop()
}

// define our basics shapes
function outlineShape() {
  const strokeColor = getRandomFromPalette()
  const weight      = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width/2, height/2)
  if (hexagonTrue) {
      hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
  pop()
}

// bounds a bunch of lines into our main circle
function testLines() {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2   // Ternary operator
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(PALETTE[0])
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)
      // line(0, 0, CRYSTAL_SIZE / 2, 0)
      rotate(angle)
    }
  pop()
}

// --- END