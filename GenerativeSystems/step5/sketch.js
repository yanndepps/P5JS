// 06 : Outline Shape

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
  outlineShape()
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
  console.log(strokeColor)

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

// swap randomly the number of lines
function randomSelectTwo() {
  const rando = random(1)
  if (rando > 0.5) {
    return true
  } else {
    return false
  }
}

// randomly pick a color in the palette
function getRandomFromPalette() {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}