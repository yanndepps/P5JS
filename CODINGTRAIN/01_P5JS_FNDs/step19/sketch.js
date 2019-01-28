// 6.7 click on objects

// --- INITS ---

let bubbles = []

// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 75; i++) {
    let x = random(width)
    let y = random(height)
    let dm = random(6, 48)
    bubbles.push(new Bubble(x, y, dm))
  }
}

// --- DRAW ---

function draw() {
  background('#313437')
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
    bubbles[i].showline()
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}
// --- END ---
