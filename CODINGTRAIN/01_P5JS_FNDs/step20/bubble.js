
// let sl = false



function Bubble(x, y, dm) {

  this.x = x
  this.y = y
  this.w = dm
  this.h = dm

  this.lifespan = 255
  this.allCol = []
  this.c1 = color(247, 247, 247)
  this.c2 = color(0, 149, 168)
  this.c3 = color(119, 51, 0)

  this.allCol.push(this.c1, this.c2, this.c3)
  this.rndCol = random(this.allCol)
  this.fcl = color(this.rndCol)


  this.display = function() {
    noStroke()
    // fill(this.fcl)
    fill(color(0, 149, 168, this.lifespan))

    ellipse(this.x, this.y, this.w, this.h)
  }

  this.isFinished = function() {
    // if (this.lifespan <= 64) {
    //   return true
    // } else {
    //   return false
    // }
    return this.lifespan <= 64 ? true : false

  }

  this.update = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
    this.lifespan = this.lifespan - 1
  }
}
