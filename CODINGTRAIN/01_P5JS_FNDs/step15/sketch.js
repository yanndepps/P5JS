// 6.3 arrays of objects

var bubbles = []
var jdColors = ['#FFFFFF', '#F7F7F7', '#ECECEC',
                '#0095a8', '#00616f',
                '#773300', '#FF6600']


function setup() {
  createCanvas(600, 400)
  var fillColor = floor(random(8))

  for (var i = 0; i < 100; i++) {
    bubbles[i] = {
      x: random(24, width),
      y: random(24, height),
      display: function() {
        // stroke('#F7F7F7')
        noStroke()
        strokeWeight(1)
        fill(jdColors[fillColor])
        ellipse(this.x, this.y, 12, 12)
      },
      move: function() {
        this.x = this.x + random(-1, 1)
        this.y = this.y + random(-1, 1)
      }
    }
  }
  console.log(bubbles)
}

function draw() {
  background('#313437')
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
  }
}

// --- END ---
