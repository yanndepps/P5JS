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