/*
programming design system : figure and ground
step11 --> rotation3
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  rectMode(CENTER);
  fill(40);
  translate(width/2, height/2);
  rotate(radians(-27));
  rect(0, 0, height * 0.4, height * 0.4);
  noLoop();
}
