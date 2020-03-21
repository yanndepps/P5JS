// @ts-nocheck

function setup() {
  createCanvas(400, 400);
	background(0);
}

function draw() {
	translate(width / 2, height / 2);
	// random vector of length 1
	let v = p5.Vector.random2D();
	//v.mult(100);
	v.mult(random(50, 100));
	strokeWeight(1);
	stroke(255, 100);
	line(0, 0, v.x, v.y);
}
