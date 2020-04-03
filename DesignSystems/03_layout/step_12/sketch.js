// @ts-nocheck
// the grid system
// the next option is to draw a single piece of content across 
// multiple modules. This introduces the ability to highlight 
// certain pieces of content by changing the relative scale between the photos.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();
  
  const margin = height / 20;
  const allWidth = width - 3 * margin;
  const allHeight = height - 4 * margin;
  const moduleWidth = allWidth / 2; 
  const moduleHeight = allHeight / 3;
  const crnRad = 8;

  translate(margin, margin);
  fill('#610023');
  rect(0, 0, 2 * moduleWidth + margin, 2 * moduleHeight + margin, crnRad);

  translate(0, 2 * (moduleHeight + margin));
  fill('#c27f79');
  rect(0, 0, moduleWidth, moduleHeight, crnRad);

  fill('#ffd8b1');
  rect(moduleWidth + margin, 0, moduleWidth, moduleHeight, crnRad);

  noLoop();
}

