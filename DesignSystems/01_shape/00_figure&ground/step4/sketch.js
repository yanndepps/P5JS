/*
programming design system : figure and ground
step4 --> left
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  var rectSize = height * 0.15;
  noStroke();
  fill(40);
  rect(rectSize, rectSize, rectSize, rectSize);
  noLoop();
}
