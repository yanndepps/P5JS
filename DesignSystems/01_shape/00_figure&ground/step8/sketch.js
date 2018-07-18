/*
programming design system : figure and ground
step8 --> rotate
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);
  noStroke();
  //
  var size = height / 3;
  var margin = width / 20;
  var x = width - margin - size;
  var y = height - margin - size;
  rotate(radians(10));
  fill(255, 255, 170);
  rect(0, 0, width, height);
  fill(40);
  rect(x, y, size, size);
  //
  console.log('x:' + " " + x);
  console.log('y:' + " " + y);
  console.log('width:' + " " + width);
  console.log('height:' + " " + height);
  console.log('size:' + " " + size);
  console.log('margin:' + " " + margin);
  //
  noLoop();
}
