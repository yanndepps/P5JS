let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background('#313437');
	rectMode(CENTER);
	noStroke();
	fill('#ff0096');
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	torus(150, 50, 24, 16);
	angle += 0.07;
}
