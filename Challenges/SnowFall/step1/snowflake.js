function getRandomSize() {
  // while(true) {
  //   let r1 = random(1);
  //   let r2 = random(1);
  //   if (r2 > r1) {
  //     return r1*36;
  //   }
  // }
  // smaller solution :
  let r = pow(random(0, 1), 5);
  return constrain(r*36, 2, 36);
}


class Snowflake {

  constructor() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  applyForce(force) {
    // Parallax Effect hack
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  offScreen() {
    return (this.pos.y > height + this.r);
  }
}
