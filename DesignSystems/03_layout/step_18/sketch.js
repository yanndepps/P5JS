// @ts-nocheck
// Composition Strategies
// A denser layout with text overlay typical for a photo book

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();

  const margin = height / 10;
  const allWidth = width - 4 * margin;
  const allHeight = height - 5 * margin;
  const moduleWidth = allWidth / 3;
  const moduleHeight = allHeight / 4;
  const crnRad = 8;

  translate(margin, margin);
  fill('#b9ff66');
  rect(0, 0, 3 * moduleWidth + 2 * margin, 3 * moduleHeight + 2 * margin, crnRad);

  fill('#c071fe');
  rect(0, 0, 2 * moduleWidth + margin, moduleHeight / 3, crnRad);

  fill('#5b7c99');
  rect(moduleWidth + margin, 2 * (moduleHeight + margin), 2 * moduleWidth + margin, moduleHeight, crnRad);

  noLoop();
}