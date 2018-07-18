// hexagon shape
const hexagon = (poxX, posY, radius) => {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(poxX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

// finding a point on a circle
const pointOnCircle = (poxX, posY, radius, angle) => {
  const x = poxX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

// swap randomly the number of lines
const randomSelectTwo = () => {
  const rando = random(1)
  return rando > 0.5 ? true : false
}

// randomly pick a color in the palette
const getRandomFromPalette = () => {
  const rando = floor(random(0, PALETTE.length))
  return PALETTE[rando]
}

// bounds a bunch of lines into our main circle
const testLines = (state) => {
  state.numShapes = randomSelectTwo() ? state.sides : state.sides * 2 
  state.angle = 360 / state.numShapes

  return ({
    name: 'testLines',
    state,
    render: () => {
      noFill()
      stroke(state.layerColor)
      strokeWeight(state.thickStroke)
      push()
      if (state.lines) {
        for (let i = 0; i < 360 - 0.1; i += state.angle) {
          line(0, 0, 0, CRYSTAL_SIZE / 2)
          rotate(state.angle)
        }
      }
      if (state.circle) {
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
      }
      pop()
    }
  })
}

// create a triangle
const myTriangle = (center, radius, direction) => {
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
const layerConstructors = [{
    name: 'Outline Shape',
    init: (props) => outlineShape({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Centered Shape',
    init: (props) => centerShape({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Circles',
    init: (props) => circles({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Simple Lines',
    init: (props) => simpleLines({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Dotted Lines',
    init: (props) => dottedLines({
      ...props,
      ...setState(state)
    }),
    weight: 0.9
  },
  {
    name: 'Ring Of Shape',
    init: (props) => ringOfShapes({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Stepped Hexagon',
    init: (props) => steppedHexagons({
      ...props,
      ...setState(state)
    }),
    weight: 0.7
  },
  {
    name: 'Test Lines',
    init: (props) => testLines({
      lines: false,
      circle: false,
      ...props,
      ...setState(state)
    }),
    weight: 1
  }
]

const makeCrystal = (pos) => {
  const layers = layerConstructors.map(lcon => {
    let picker = random(1)
    const draw = picker > lcon.weight
    // const draw = lcon.name == 'Test Lines'
    return lcon.init({
      pos,
      draw
    })
  })
  return layers
}

const drawCrystal = (crystal) => {
  crystal.forEach(layer => {
    if (layer.state.draw) {
      push()
      translate(layer.state.pos.x, layer.state.pos.y)
      layer.render()
      pop()
    }
  })
}









// --- END
