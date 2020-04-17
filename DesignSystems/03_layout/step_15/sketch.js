// @ts-nocheck
// Composition Strategies
// A very large image with text content acting as small annotations.

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

  translate(margin, margin);
  fill('#9dff00');
  rect(0, 0, 2 * moduleWidth + margin, 3 * moduleHeight + 2 * margin, crnRad);

  translate(0, 3 * (moduleHeight + margin));
  fill('#fe86a4');
  rect(0, 0, moduleWidth, moduleHeight / 4, crnRad);

  fill('#fe019a');
  rect(moduleWidth + margin, 0, moduleWidth, moduleHeight, crnRad);

  noLoop();
}