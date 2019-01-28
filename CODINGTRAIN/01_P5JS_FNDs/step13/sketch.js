// 5.4 functions inside objects

var bubble = {
  x: 300,
  y: 200,
  display: function() {
    // stroke('#F7F7F7')
    // strokeWeight(1)
    fill('#ffcc00')
    ellipse(this.x, this.y, 24, 24)
  },
  move: function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
}

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background('#313437')
  bubble.move()
  bubble.display()
}

// --- END ---
