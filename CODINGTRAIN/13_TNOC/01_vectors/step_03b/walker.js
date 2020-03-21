// @ts-nocheck
// what is a vector : instance mode
// this does not work !! TODO
// the nature of code

export class Walker {
  constructor(p, x, y) {
    this.pos = p.createVector(x, y);
    this.vel = p.Vector.random2D();
    this.vel.mult(p.random(3));
  }


  update() {
    this.pos.add(this.vel);
  }

  show(p, rad) {
    // p5.stroke(255, 100);
    //p5.strokeWeight(rad);
    p.fill(255, 100);
    p.ellipse(this.pos.x, this.pos.y, rad);
    // p5.point(this.pos.x, this.pos.y);
  }
}
