/*
programming design system : figure and ground
step17 --> use variables
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  var size = height / 3;
  var margin = width / 20;
  var x = width - margin - size;
  var y = height - margin - size;
  rect(x, y, size, size);
  noLoop();
}
