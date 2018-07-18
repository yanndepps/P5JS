// basic shape --> cone shir


function setup() {
  createCanvas(600, 700);
  background(255);
  fill(255);
  stroke(0);
  strokeWeight(width * 0.024);

  var coneX = width / 2;
  var coneY = height * 0.6;
  var coneSize = width * 0.18;

  translate(coneX, coneY);

  // cookie
  push();
  rotate(radians(-25));
  translate(coneSize*0.8, -(coneSize*3));
  rect(0, 0, coneSize * 0.3, coneSize);
  pop();

  strokeJoin(ROUND);

  // ice cream
  for (var i = 3; i >= 0; i--) {
    ellipse(0, -(coneSize* 0.25) - (i * (coneSize * 0.6)), coneSize, coneSize);
  }

  // cone
  triangle(-(coneSize / 2), 0, coneSize / 2, 0, 0, coneSize * 1.6);

  noLoop();
}
