// @ts-nocheck
// Composition Strategies
/*
If those were an example of a strict interpretation of geometric composition, then what does it mean to design with a more lenient interpretation of the grid? The key is to find ways of removing the box-like aesthetic of the grid, and there are many ways of doing this. Let us first explore how to break the uniformity of the whitespace, and we will do this by allowing multiple pieces of content to use the same module. The overlapping content makes for a less formal composition while still adhering to the rules of the grid. The example below uses three horizontal divisons in order to allow content overlaps in the middle of the canvas. Notice how the heading is placed at the bottom of the bottom-most modules.
*/

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();

  const margin = height / 15;
  const allWidth = width - 4 * margin;
  const allHeight = height - 5 * margin;
  const moduleWidth = allWidth / 3;
  const moduleHeight = allHeight / 4;
  const headingHeight = moduleHeight / 2;
  const crnRad = 8;

  translate(margin, margin);
  fill('#b9ff66');
  rect(moduleWidth + margin, 0, 2 * moduleWidth + margin, 4 * moduleHeight + 3 * margin, crnRad);

  fill('#c071fe');
  rect(0, moduleHeight + margin, 2 * moduleWidth + margin, 2 * moduleHeight + margin, crnRad);

  fill('#5b7c99');
  rect(0, 4 * moduleHeight + 3 * margin - headingHeight, 3 * moduleWidth + 2 * margin, headingHeight, crnRad);

  noLoop();
}