// basic shape --> triangle origin : center


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  var size = width * 0.15;
  translate(width/2, height/2);
  triangle(0, -size, size, size, -size, size);
  fill("#E1B000");
  ellipse(0, 0, size*0.2, size*0.2);
  noLoop();
}
