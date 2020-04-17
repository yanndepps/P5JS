// @ts-nocheck
// Composition Strategies
// For designers who have a hard time creating compelling 
// layouts from a blank canvas, this stricter approach to composition 
// can serve as a concrete starting point for further exploration.
// This layout uses only two of the four vertical divisions 
// which makes for an ordered and balanced design with lots of whitespace.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();

  const margin = height / 30;
  const allWidth = width - 3 * margin;
  const allHeight = height - 5 * margin;
  const moduleWidth = allWidth / 2;
  const moduleHeight = allHeight / 4;
  const crnRad = 8;

  fill('#ffa62b');
  rect(margin, margin + moduleHeight + margin, moduleWidth, 2 * moduleHeight + margin, crnRad);

  fill('#1b2431');
  rect(margin + moduleWidth + margin, margin + moduleHeight + margin, moduleWidth, moduleHeight / 4, crnRad);

  fill('#75b3e7');
  rect(margin + moduleWidth + margin, margin + 2 * (moduleHeight + margin), moduleWidth, moduleHeight, crnRad);

  noLoop();
}