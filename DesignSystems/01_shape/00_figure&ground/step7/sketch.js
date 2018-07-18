/*
programming design system : figure and ground
step7 --> rights
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);

  var rectSize = height * 0.15;
  var x = width - (rectSize*2);
  var y = height - (rectSize*2);
  noStroke();
  fill(40);
  rect(x, y, rectSize, rectSize);

  console.log('x:' + " " + x);
  console.log('y:' + " " + y);
  console.log('width:' + " " + width);
  console.log('height:' + " " + height);
  
  noLoop();
}
