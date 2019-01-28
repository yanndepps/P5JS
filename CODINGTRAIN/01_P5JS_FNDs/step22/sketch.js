// 6.10 --> objects collision : overlapping : collusion

// --- INITS ---

let bubbles = []

// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 200; i++) {
    let rad = random(6, 18)
    bubbles[i] = new Bubble(random(width), random(height), rad)
  }

}

// --- DRAW ---

function draw() {
  background('#313437')

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update()
    bubbles[i].display()
    for (let j = 0; j < bubbles.length; j++) {
      if ( i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor()
        bubbles[j].changeColor()
        // bubbles[i].r = bubbles[i].r * 0.3
      }
    }
  }
}

// --- END ---
