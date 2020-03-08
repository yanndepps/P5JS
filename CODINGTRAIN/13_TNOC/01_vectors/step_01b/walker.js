// @ts-nocheck
// what is a vector : instance mode
// the nature of code

export class Walker {
  constructor(p5, x, y) {
    // this.p5 = p5;
    this.pos = p5.createVector(x, y);
  }

  getRandomInt(min, max) {
    // the min & max are inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  update() {
    // this.pos.x = this.pos.x + p5.random(-1, 1);
    this.pos.x = this.pos.x + this.getRandomInt(-1, 1);
    // this.pos.y = this.pos.y + p5.random(-1, 1);
    this.pos.y = this.pos.y + this.getRandomInt(-1, 1);
  }

  show(p5, rad) {
    p5.stroke(255, 100);
    p5.strokeWeight(rad);
    p5.point(this.pos.x, this.pos.y);
  }
}
