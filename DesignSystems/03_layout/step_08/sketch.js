// @ts-nocheck
// the grid system
// graphic designers often refer to the spaces within a grid system as modules.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noFill();
  stroke(255, 0, 0);
  
  const margin = height / 20;
  const allWidth = width - 3 * margin;
  const allHeight = height - 4 * margin;
  const imgWidth = allWidth / 2; 
  const imgHeight = allHeight / 3;
  const crnRad = 8;

  translate(margin, margin);
  rect(0, 0, imgWidth, imgHeight, crnRad);
  rect(imgWidth + margin, 0, imgWidth, imgHeight, crnRad);

  translate(0, margin + imgHeight);
  rect(0, 0, imgWidth, imgHeight, crnRad);
  rect(imgWidth + margin, 0, imgWidth, imgHeight, crnRad);

  translate(0, margin + imgHeight);
  rect(0, 0, imgWidth, imgHeight, crnRad);
  rect(imgWidth + margin, 0, imgWidth, imgHeight, crnRad);

  noLoop();
}

