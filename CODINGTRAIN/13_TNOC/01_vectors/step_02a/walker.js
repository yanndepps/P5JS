// @ts-nocheck
// what is a vector
// the nature of code

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }
  update() {
    this.pos.add(this.vel);
    //this.pos.x = this.pos.x + this.vel.x;
    //this.pos.y = this.pos.y + this.vel.y;
  }
  show() {
    //stroke(255, 100);
    strokeWeight(1);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
    // point(this.pos.x, this.pos.y);
  }
}
