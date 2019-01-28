// 6.4 constructor

// --- INITS ---

var jdColors = ['#F7F7F7', '#ECECEC',
                '#0095a8', '#00616f',
                '#773300', '#FF6600']

var bubbles = []


// -- SETUP ---

function setup() {
  createCanvas(600, 400)

  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble();
  }

  // console.log(bubbles)
}

// --- DRAW ---

function draw() {
  background('#313437')
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
  }
}

// --- FUNKS ---

function Bubble() {
  this.x = random(0, width)
  this.y = random(0, height)
  this.display = function() {
    stroke('#F7F7F7')
    strokeWeight(1)
    fill(jdColors[3])
    ellipse(this.x, this.y, 12, 12)
  }
  this.move = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
}

// --- END ---
