// basic shape --> ellipse


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  fill(40);
  ellipse(width/2, height/2, width*0.45, height*0.45);
  noLoop();
}
