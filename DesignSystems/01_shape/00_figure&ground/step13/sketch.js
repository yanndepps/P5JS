/*
programming design system : figure and ground
step13 --> steep1
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  rectMode(CENTER);

  var w = width * 0.5;
  var h = width * 0.4;

  translate(width/2, height/2);
  rotate(radians(-50));
  rect(0, 0, w, h);

  noLoop();
}
