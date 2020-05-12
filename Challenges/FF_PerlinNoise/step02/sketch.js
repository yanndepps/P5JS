// Flow Field Perlin Noise : step02
// Code for: https://youtu.be/BjoM9oKOAKY

let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let fr;
let particle = [];
let flowfield;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);

  for (let i = 0; i < 10000; i++) {
    particle[i] = new Particle();
  }
  background('#f4f4f4');
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff)*TWO_PI*4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      // display / hide the vectors
      // stroke(200, 0, 0, 100);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
     }
    yoff += inc;
    zoff += 0.0003;
  }

  for (let i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
  }

  fr.html(floor(frameRate()));
}
