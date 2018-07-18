/*
programming design system : figure and ground
step16 --> translate-rotate
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();

  var size = height / 3;
  var margin = width / 20;
  var x = width - margin - size;
  var y = height - margin - size;
  translate(x, y);
  rotate(radians(10));
  fill(255, 255, 170);
  rect(0, 0, width, height);
  fill(40);
  rect(0, 0, size, size);
  noLoop();
}
