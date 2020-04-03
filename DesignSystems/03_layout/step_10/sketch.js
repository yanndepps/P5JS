// @ts-nocheck
// the grid system
// layout with room for text to flow left-right-left next to each image

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

  fill('#f19e8e');
  rect(margin + moduleWidth + margin, margin, moduleWidth, moduleHeight, crnRad);

  fill('#98756f');
  rect(margin, margin + moduleHeight + margin, moduleWidth, moduleHeight, crnRad);

  fill('#58656d');
  rect(margin + moduleWidth + margin, height - margin - moduleHeight, moduleWidth, moduleHeight, crnRad);

  noLoop();

  console.log(margin);
}

