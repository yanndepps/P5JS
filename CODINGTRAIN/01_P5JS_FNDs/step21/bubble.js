
function Bubble(x, y, r) {

  this.x = x
  this.y = y
  this.r = r
  this.col = color(0, 149, 168)

  this.changeColor = function() {
    this.col = color(119, 51, 0)
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y)
    return d < this.r + other.r ? true : false
  }

  this.display = function() {
    noStroke()
    fill(this.col)
    ellipse(this.x, this.y, this.r*2, this.r*2)
  }

  this.update = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
}
