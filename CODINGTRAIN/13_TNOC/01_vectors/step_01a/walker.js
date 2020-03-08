// @ts-nocheck
// what is a vector
// the nature of code

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  update() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
  }
  show() {
    stroke(255, 100);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }
}