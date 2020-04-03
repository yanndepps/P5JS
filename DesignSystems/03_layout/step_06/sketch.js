// @ts-nocheck
// Layout : thirds-margin-around-loop-translate
// These were the key principles concerning geometric composition: 
// To use a division of the canvas – with or without margins – to guide 
// the size and position of the content.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  noStroke();
  
  const margin = height / 20;
  const imgWidth = width - 2 * margin;
  const allHeight = height - 4 * margin;
  const imgHeight = allHeight / 3;
  const crnRad = 8;
  const colors = [
    color('#ffab0f'),   
    color('#247afd'),   
    color('#fe46a5')   
  ];

  // translate to the pos of the first image
  translate(margin, margin);

  for (let i = 0; i < 3; i++) {
    fill(colors[i]);
    rect(0, 0, imgWidth, imgHeight, crnRad);
    // translate to the pos of the next image 
    translate(0, imgHeight + margin);
  }

  noLoop();
}

