// hexagon shape
function hexagon(poxX, posY, radius) {
  const rotAngle = 360 / 6 
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(poxX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

// finding a point on a circle
function pointOnCircle(poxX, posY, radius, angle) {
  const x = poxX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
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

// create a triangle
function myTriangle(center, radius, direction) {
  if (direction) {
    beginShape()
    vertex(center + radius * cos(0), radius * sin(0))
    vertex(center + radius * cos(120), radius * sin(120))
    vertex(center + radius * cos(240), radius * sin(240))
    endShape(CLOSE)

  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180))
    vertex(center + radius * cos(360), radius * sin(360))
    vertex(center + radius * cos(60), radius * sin(60))
    endShape(CLOSE)
  }
}

// initialize layer objects
const layerConstructors = [
  {
    name: 'Outline Shape',
    init: () => new OutlineShape(),
    weight: 0.3
  },
  {
    name: 'Centered Shape',
    init: () => new CenterShape(),
    weight: 0.3
  },
  {
    name: 'Circles',
    init: () => new Circles(),
    weight: 0.3
  },
  {
    name: 'Simple Lines',
    init: () => new SimpleLines(),
    weight: 0.3
  },
  {
    name: 'Dotted Lines',
    init: () => new DottedLines(),
    weight: 0.3
  },
  {
    name: 'Ring Of Shape',
    init: () => new RingOfShapes(),
    weight: 0.3
  },
  {
    name: 'Stepped Hexagon',
    init: () => new SteppedHexagons(),
    weight: 0.9
  },
  {
    name: 'Test Lines',
    init: () => new TestLines(),
    weight: 1
  }
]



























// --- END