/*
programming design system : figure and ground
step15 --> steep3
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  rectMode(CENTER);

  var w = width * 2;
  var h = width * 1;
  var x = width * 0.3;
  var y = height * 0.1;

  translate(x, y);
  rotate(radians(-50));
  rect(0, 0, w, h);

  noLoop();
}
