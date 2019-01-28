// 6.6 Multiple js files

// --- INITS ---

var bubbles = []

// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight)
  rnd = random(jdColors)
  for (var i = 0; i < 50; i++) {
    var x = random(width)
    var y = random(height)
    var bsz = random(6, 24)
    bubbles.push(new Bubble(x, y, bsz, bsz))
  }
}

// --- DRAW ---

function draw() {
  background('#313437')
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
  }
}

// --- END ---
