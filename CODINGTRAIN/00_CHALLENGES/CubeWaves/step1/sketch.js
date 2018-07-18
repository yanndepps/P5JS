// coding challenge 86 : cube waves by bees and bombs

let angle = 0;
let w = 24;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#313437');
  translate(width / 2, height / 2);
  rectMode(CENTER);
  fill(255);
  noStroke();
  // simple harmonic motion on the height
	let offset = 0;
  for (let x = 0; x <= width; x += w) {
		let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 200);
    rect(x - (width / 2 - w / 2), 0, w-2, h);
		offset += 0.1;
  }
	angle += 0.05;
}
