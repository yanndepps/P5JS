// 6.8 --> Delete objects using splice

// --- INITS ---

let bubbles = []


// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight)
}

// --- DRAW ---

function draw() {
  background('#313437')

  for (let i = bubbles.length-1; i >= 0; i--) {
    bubbles[i].update()
    bubbles[i].display()
    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1)
    }
  }
}

function mousePressed() {
  let rs = random(8, 48)
  let b = new Bubble(mouseX, mouseY, rs)
  bubbles.push(b)
}

// --- END ---
