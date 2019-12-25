// Coding Challenge #127 : Brownian Motion Snowflake
// paused : 2.40.50
let symmetry = 6;
let angle = 360/symmetry;
let xoff = 0;
let yoff = 1000;
let pmx,pmy,mx,my;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
  background(0);
  // ---
  // translate(width/2, height/2);
  // stroke(255, 0, 0);

  // for (let i = 0; i < symmetry; i++) {
  //   rotate(angle);
  //   line(0, 0, width, 0);
  // }
  // ---
  mx = noise(xoff) * width - width/2;
  my = noise(yoff) * height - height/2;
  pmx = mx;
  pmy = my;
}

function draw() {
  translate(width/2, height/2);

  // mx = mouseX - width/2;
  // my = mouseY - height/2;
  // pmx = pmouseX - width/2;
  // pmy = pmouseY - height/2;
  mx = abs(noise(xoff) * width - width/2);
  my = abs(noise(yoff) * height - height/2);
  xoff += 0.01;
  yoff += 0.01;
  
    stroke(255, 100);
    let angle = 360/symmetry;

    for (let i = 0; i < symmetry; i++) {
      rotate(angle);
      let d = dist(mx, my, pmx, pmy);
      let sw = map(d, 0, 4, 4, 1);
      strokeWeight(sw);
      line(mx, my, pmx, pmy);
      push();
      scale(1,-1);
      line(mx, my, pmx, pmy);
      pop();
    }
  pmx = mx;
  pmy = my;

  if (mouseIsPressed) {
    noLoop();
  }
}
