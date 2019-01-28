let jdColors = ['#F7F7F7', '#ECECEC',
  '#0095a8', '#00616f',
  '#773300', '#FF6600'
]

// let sl = true

function Bubble(x, y, dm) {

  this.x = x
  this.y = y
  this.w = dm
  this.h = dm
  this.col = color(random(jdColors))
  this.sl = false

  this.showline = function() {
    // console.log("cool !")
    // stroke
    if (this.sl) {
      stroke('#313437')
      strokeWeight(2)
      let mul = 0.10
      let an = 3
      line(this.x - (this.w * mul), this.y - an, this.x + (this.w * mul), this.y + an)
      line(this.x + an, this.y - (this.h * mul), this.x - an, this.y + (this.h * mul))
    }
  }

  this.display = function() {
    // circle
    noStroke()
    fill(this.col)
    ellipse(this.x, this.y, this.w, this.h)
  }

  this.clicked = function() {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < dm / 2) {
      this.col = color(random(jdColors))
      this.sl = true
    }
  }

  this.move = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
}
