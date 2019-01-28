
var jdColors = ['#F7F7F7', '#ECECEC',
                '#0095a8', '#00616f',
                '#773300', '#FF6600']
var rnd

function Bubble(x, y, sw, sh) {
  this.x = x
  this.y = y
  this.w = sw
  this.h = sh
  rnd = random(jdColors)

  this.display = function() {
    noStroke()
    fill(rnd)
    ellipse(this.x, this.y, this.w, this.h)
  }

  this.move = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
}
