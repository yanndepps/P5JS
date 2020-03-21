// @ts-nocheck
// what is a vector : instance mode
// the nature of code

export class Walker {
  constructor(p5, x, y) {
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(1, -1);
  }

  getRandomInt(min, max) {
    // the min & max are inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  update() {
    this.pos.add(this.vel);
  }

  show(p5, rad) {
    // p5.stroke(255, 100);
    //p5.strokeWeight(rad);
    p5.fill(255, 100);
    p5.ellipse(this.pos.x, this.pos.y, rad);
    // p5.point(this.pos.x, this.pos.y);
  }
}
