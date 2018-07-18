/*
programming design system : figure and ground
step3 --> flat
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  rectMode(CENTER);
  noStroke();
  fill(40);
  rect(width / 2, height * 0.8, width * 0.8, height * 0.1);
  noLoop();
}
