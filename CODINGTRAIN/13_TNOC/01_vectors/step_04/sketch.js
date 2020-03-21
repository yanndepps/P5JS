// @ts-nocheck

function setup() {
	createCanvas(400, 400);
	
}

function draw() {
	background(0);

	let pos = createVector(200, 200);
	let mouse = createVector(mouseX, mouseY);
	let v = p5.Vector.sub(mouse, pos);
	// normalize a vector to length 1 and scale it to a particular magnitude
	v.setMag(50);
	console.log(v);
	translate(width / 2, height / 2);
	strokeWeight(3);
	stroke(255);
	line(0, 0, v.x, v.y);
}
