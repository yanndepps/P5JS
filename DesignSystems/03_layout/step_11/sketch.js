// @ts-nocheck
// the grid system
// layout with room for text in the left-hand side of the canvas

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

  translate(margin + moduleWidth + margin, margin);

  fill('#5d21d0');
  rect(0, 0, moduleWidth, moduleHeight, crnRad);

  fill('#10a674');
  rect(0, margin + moduleHeight, moduleWidth, moduleHeight, crnRad);

  fill('#bff128');
  rect(0, 2 * ( margin + moduleHeight ), moduleWidth, moduleHeight, crnRad);

  noLoop();
}

