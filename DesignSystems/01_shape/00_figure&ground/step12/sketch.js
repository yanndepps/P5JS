/*
programming design system : figure and ground
step12 --> shy
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  var size = width * 0.1;
  var x = width - size;
  var y = height - size;
  rect(x, y, size, size);

  noLoop();
}
