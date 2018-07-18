/*
programming design system : figure and ground
step10 --> rotation2
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  rectMode(CENTER);
  fill(40);
  translate(width/2, height/2);
  rotate(radians(45));
  rect(0, 0, height * 0.4, height * 0.4);
  noLoop();
}
