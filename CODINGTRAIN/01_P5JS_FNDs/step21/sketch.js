// 6.9 --> objects collision : overlapping : collusion

// --- INITS ---

let b1
let b2

// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight)
  r = 48
  b1 = new Bubble(250, 200, r)
  b2 = new Bubble(350, 200, r)
}

// --- DRAW ---

function draw() {
  background('#313437')

  b1.update()
  b2.update()
  b1.display()
  b2.display()
  if (b1.intersects(b2)) {
    b1.changeColor()
    b2.changeColor()
  }
}

// --- END ---
