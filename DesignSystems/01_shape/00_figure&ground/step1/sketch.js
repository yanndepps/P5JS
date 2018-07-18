/*
programming design system : figure and ground
step1 --> big
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  rectMode(CENTER);
  noStroke();
  fill(40);
  translate(width * 0.2, height * 0.56);
  rotate(radians(10));
  rect(0, 0, height * 0.4, height * 0.4);
  noLoop();
}

function draw() {

}
