// @ts-nocheck
// the grid system
// we introduce another division – this time by dividing the canvas width – 
// to add more flexibility to the layout system. 
// this is the beginning of what in graphic design is 
// referred to as a grid system. 

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noFill();
  stroke(255, 0, 0);
  
  const margin = height / 20;
  const imgWidth = width - 2 * margin;
  const allHeight = height - 4 * margin;
  const imgHeight = allHeight / 3;
  const crnRad = 8;

  translate(margin, margin);
  rect(0, 0, imgWidth, imgHeight, crnRad);

  translate(0, margin + imgHeight);
  rect(0, 0, imgWidth, imgHeight, crnRad);

  translate(0, margin + imgHeight);
  rect(0, 0, imgWidth, imgHeight, crnRad);

  noLoop();
}

