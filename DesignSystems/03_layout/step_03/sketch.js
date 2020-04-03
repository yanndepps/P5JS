// @ts-nocheck
// Layout : thirds-margin-around
// introducing margins around the edges of the canvas.
// this removes the denseness of the layout even more, and call attention
// to each image as a separate piece of content.

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  
  const margin = height / 20;
  const imgWidth = width - 2 * margin;
  const allHeight = height - 4 * margin;
  const imgHeight = allHeight / 3;
  const crnRad = 8;

  noStroke();
  fill(75, 185, 165);
  rect(margin, margin, imgWidth, imgHeight, crnRad);
  fill(120, 155, 155);
  rect(margin, margin + imgHeight + margin, imgWidth, imgHeight, crnRad);
  fill(30, 50, 50);
  rect(margin, margin + 2 * ( imgHeight + margin ), imgWidth, imgHeight, crnRad);

  noLoop();
}

