// Flow Field Perlin Noise
// Code for: https://youtu.be/BjoM9oKOAKY

let inc = 0.1;
let scl = 8;
let cols, rows;
let fr;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
}

function draw() {
  background('#f4f4f4');
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      // let index = (x + y * width) * 4;
      let r = noise(xoff, yoff)*255;
      let v = p5.Vector.fromAngle(random(TWO_PI));
      xoff += inc;
      // draw vector as a line
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
  }
  noLoop();
  fr.html(floor(frameRate()));
}
