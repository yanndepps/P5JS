// @ts-nocheck
// Layout : thirds-margin-around-loop
// Since all the images in the poster follow the same layout rule, 
// we can use a for-loop to draw the images procedurally one after the other.

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
    color('#9dbcd4'),   // ectophytic light grey blue
    color('#fffd01'),   // store bright yellow
    color('#6d5acf')    // undiagnosed light indigo
  ];

  for (let i = 0; i < 3; i++) {
    fill(colors[i]);
    const imgY = margin + i * (imgHeight + margin);
    rect(margin, imgY, imgWidth, imgHeight, crnRad);
  }

  noLoop();
}

