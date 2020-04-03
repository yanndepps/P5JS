// @ts-nocheck
// Layout : thirds-margin-around-translate
// make use of the translate() function to move the canvas
// down to the correct position.
// the result is a pixel-perfect, balanced design that makes it easy 
// to test variations by tweaking a single variable.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();
  
  const margin = height / 20;
  const imgWidth = width - 2 * margin;
  const allHeight = height - 4 * margin;
  const imgHeight = allHeight / 3;
  const crnRad = 8;

  // move down to the pos of the first image and draw it
  translate(margin, margin);
  fill(75, 185, 165);
  rect(0, 0, imgWidth, imgHeight, crnRad);
  // move down to the second image pos and draw it
  translate(0, margin + imgHeight);
  fill(120, 155, 155);
  rect(0, 0, imgWidth, imgHeight, crnRad);
  // move down the last image pos and draw it
  translate(0, margin + imgHeight);
  fill(30, 50, 50);
  rect(0, 0, imgWidth, imgHeight, crnRad);

  noLoop();
}

