// 6.5 adding and removing objects

// --- INITS ---

var jdColors = ['#F7F7F7', '#ECECEC',
                '#0095a8', '#00616f',
                '#773300', '#FF6600']

var bubbles = []
var rnd


// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight)
  rnd = random(jdColors)
  // console.log(bubbles)
}

// --- DRAW ---

function draw() {
  background('#313437')
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
  }
  // do not exceed x number of bubbles : remove one if
  if (bubbles.length > 100) {
    bubbles.splice(0, 1)
  }
}

// --- FUNKS ---

function Bubble(x, y, sw, sh) {
  this.x = x
  this.y = y
  this.w = sw
  this.h = sh
  this.display = function() {
    // console.log(jdColors.length)
    // stroke('#F7F7F7')
    // strokeWeight(1)
    // fill(jdColors[3])
    noStroke()
    fill(rnd)
    ellipse(this.x, this.y, this.w, this.h)
  }
  this.move = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
}

// function mousePressed() {
//   bubbles.push(new Bubble(mouseX, mouseY))
// }

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY, 3, 3))
}

function keyPressed() {
  bubbles.splice(0,1)
}

// --- END ---
