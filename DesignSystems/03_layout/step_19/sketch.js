// @ts-nocheck
// Composition Strategies
// Multi-layered layout with a large heading

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();

  const margin = height / 20;
  const allWidth = width - 4 * margin;
  const allHeight = height - 5 * margin;
  const moduleWidth = allWidth / 3;
  const moduleHeight = allHeight / 4;
  const crnRad = 8;

  translate(margin, margin);
  fill('#fc86aa');
  rect(moduleWidth + margin, moduleHeight + margin, 2 * moduleWidth + margin, 2 * moduleHeight + margin, crnRad);

  fill('#000133');
  rect(0, 0, 3 * moduleWidth + 2 * margin, moduleHeight / 2, crnRad);

  fill('#d8dcd6');
  rect(0, 2 * (moduleHeight + margin), 2 * moduleWidth + margin, 2 * moduleHeight + margin, crnRad);

  noLoop();
}