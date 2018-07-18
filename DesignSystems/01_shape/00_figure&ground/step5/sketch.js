/*
programming design system : figure and ground
step5 --> non-dominant
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  var rectSize = height * 0.1;
  rectMode(CENTER);
  noStroke();
  fill(40);
  rect(width/2, height/2, rectSize, rectSize);
  noLoop();
}
