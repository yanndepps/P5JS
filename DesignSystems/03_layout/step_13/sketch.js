// @ts-nocheck
// Composition Strategies
// A strict approach to geometric composition means that 
// most of the content in our design should align with 
// the lines created by the grid

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

  fill('#fcf679');
  rect(margin, margin, moduleWidth, moduleHeight / 4, crnRad);

  fill('#41fdfe');
  rect(margin + moduleWidth + margin, margin + moduleHeight + margin, moduleWidth, moduleHeight, crnRad);

  fill('#ff81c0');
  rect(margin, margin + 2 * (moduleHeight + margin), 2 * moduleWidth + margin, 2 * moduleHeight + margin, crnRad);


  noLoop();
}