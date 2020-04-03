// @ts-nocheck
// Layout : thirds-margin-between
// introduce margins, (empty space around content), to make 
// the design more airy

function setup() {
  createCanvas(440, 600);
  background('#1c1c1c');
  
  // size of the margin based on canvas height
  const margin = height / 20;
  // calculate the combined height of all three images, which is the
  // canvas height without our margins. there are only two margins for 
  // three images (margin between).
  const allHeight = height - 2 * margin;
  // the height of a single image. used with the margin var 
  // to calculate the pos of each image.
  const imgHeight = allHeight / 3;

  noStroke();
  // 1st
  fill(75, 185, 165);
  rect(0, 0, width, imgHeight);
  // 2nd
  fill(120, 155, 155);
  rect(0, imgHeight + margin, width, imgHeight);
  // 3rd
  fill(30, 50, 50);
  rect(0, 2 * ( imgHeight + margin ), width, imgHeight);

  noLoop();
}

