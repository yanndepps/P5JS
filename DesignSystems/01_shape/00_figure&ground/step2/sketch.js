/*
programming design system : figure and ground
step2 --> dominant
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  var rectSize = height * 0.7;
  rectMode(CENTER);
  noStroke();
  fill(40);
  rect(width / 2, height / 2, rectSize, rectSize);
  noLoop();
}
