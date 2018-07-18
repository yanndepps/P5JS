/*
programming design system : figure and ground
step14 --> steep2
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  rectMode(CENTER);

  var w = width * 2;
  var h = width * 1;

  translate(width/2, height/2);
  rotate(radians(-50));
  rect(0, 0, w, h);

  noLoop();
}
