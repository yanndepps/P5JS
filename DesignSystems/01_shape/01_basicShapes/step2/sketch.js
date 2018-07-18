// basic shape --> rectangle CENTER


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  rectMode(CENTER);
  var size = width * 0.3;
  rect(width / 2, height / 2, size, size);
  fill("#E1B000");
  ellipse(width / 2, height / 2, size * 0.1, size * 0.1);
  noLoop();
}
