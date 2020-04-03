// @ts-nocheck
// the grid system
// so how do we draw three pieces of content inside six modules? 
// the first option is to pick three modules to hold the images and leave 
// the three remaining modules blank. This is the first time where 
// we are presented with actual decisions to be made around composition, 
// since we can create a great number of designs using this approach.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();
  
  const margin = height / 20;
  const allWidth = width - 3 * margin;
  const allHeight = height - 4 * margin;
  const moduleWidth = allWidth / 2; 
  const moduleHeight = allHeight / 3;
  const crnRad = 8;

  fill('#475f94');
  rect(margin, margin, moduleWidth, moduleHeight, crnRad);

  fill('#fddc5c');
  rect(margin, height - margin - moduleHeight, moduleWidth, moduleHeight, crnRad);

  fill('#fa4224');
  rect(margin + moduleWidth + margin, height - margin - moduleHeight, moduleWidth, moduleHeight, crnRad);

  noLoop();
}

