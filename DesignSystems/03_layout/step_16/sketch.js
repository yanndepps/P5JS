// @ts-nocheck
// Composition Strategies
// The larger heading takes precedence over the smaller paragraph 
// and image in a layout with heavy whitespace.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();

  const margin = height / 15;
  const allWidth = width - 3 * margin;
  const allHeight = height - 5 * margin;
  const moduleWidth = allWidth / 2;
  const moduleHeight = allHeight / 4;
  const crnRad = 8;

  translate(margin, margin);
  fill('#ffffe4');
  rect(0, 0, 2 * moduleWidth + margin, moduleHeight / 2, crnRad);

  translate(0, moduleHeight + margin);
  fill('#b17261');
  rect(0, 0, moduleWidth, moduleHeight, crnRad);

  translate(moduleWidth + margin, moduleHeight + margin);
  fill('#8f1402');
  rect(0, 0, moduleWidth, 2 * moduleHeight + margin, crnRad);

  noLoop();
}