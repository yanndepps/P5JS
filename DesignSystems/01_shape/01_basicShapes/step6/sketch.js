// basic shape --> ellipsemode : defaults


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  var size = width * 0.3;
  ellipse(width/2, height/2, size, size);
  fill("#E1B000");
  ellipse(width/2, height/2, size*0.1, size*0.1);
  noLoop();
}
