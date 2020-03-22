// @ts-nocheck
// acceleration vector
// the nature of code
// because : force = mass*acceleration !
class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    // calculate the acceleration
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(1);
    // apply the acceleration to the velocity
    this.vel.add(this.acc);
    // limit the velocity
    this.vel.limit(5);
    // apply the velocity to the position
    this.pos.add(this.vel);
  }

  show() {
    noStroke();
    strokeWeight(1);
    fill(255, 200);
    ellipse(this.pos.x, this.pos.y, 16);
  }
}