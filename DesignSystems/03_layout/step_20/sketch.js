// @ts-nocheck
// Composition Strategies
// A dynamic composition with overlapping content and no margins

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();

  const moduleWidth = width / 3;
  const moduleHeight = height / 4;
  const crnRad = 8;

  fill('#fdb147');
  rect(0, 0, 2 * moduleWidth, 3 * moduleHeight, crnRad);

  fill('#3f012c');
  rect(moduleWidth, 2 * moduleHeight, 2 * moduleWidth, 2 * moduleHeight, crnRad);

  fill('#08787f');
  rect(moduleWidth, moduleHeight, 2 * moduleWidth, moduleHeight / 4, crnRad);

  noLoop();
}