// 6.11 objects and images

// --- INITS ---

let bubbles = []
let pix = []

// -- SETUP ---

function preload() {
  for (var i = 0; i < 3; i++) {
    pix[i] = loadImage('data/abstract_0' + i + '.png')
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

// --- DRAW ---

function draw() {
  background('#313437')

  for (let i = bubbles.length-1; i >= 0; i--) {
    bubbles[i].update()
    bubbles[i].display()
  }
}

function mousePressed() {
  let r = floor(random(0, pix.length))
  let b = new Bubble(mouseX, mouseY, pix[r])
  bubbles.push(b)
}

// --- END ---
