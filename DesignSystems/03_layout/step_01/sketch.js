// @ts-nocheck
// Layout : thirds
// the height of each image is set to be exactly one-third of the canvas  
// height, and the y positions of the images are based on this value too

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  
  const imgHeight = height / 3;
  noStroke();
  // 1st
  fill(75, 185, 165);
  rect(0, 0, width, imgHeight);
  // 2nd
  fill(120, 155, 155);
  rect(0, imgHeight, width, imgHeight);
  // 3rd
  fill(30, 50, 50);
  rect(0, 2 * imgHeight, width, imgHeight);
}

