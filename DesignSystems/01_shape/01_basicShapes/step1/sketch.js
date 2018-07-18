// basic shape --> rectangle


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  rectMode(CENTER);
  noStroke();
  fill(40);
  rect(width/2, height/2, width * 0.45, width * 0.45);
  noLoop();
}
