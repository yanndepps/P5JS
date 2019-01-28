// intro to WEBGL : step15 : custom shapes

let angle = 0;
let pic;

function preload() {
	pic = loadImage("data/sf_36Grad38.png");
	// vid = createVideo('data/output_06.webm');
	// vid.hide();
	// vid.loop();
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background('#313437');
	ambientLight('#FF00FF');
	directionalLight(255, 255, 255, 0, 1, 1);
	// rotateX(angle);
	// rotateY(angle*1.3);
	// rotateZ(angle*0.7);
	texture(pic);
	// fill(255);
	translate(-50, 0);
	beginShape();
	vertex(0, 0, 0, 0, 0);
	vertex(100, 0, 0, 1, 0);
	vertex(100, 100, 0, 1, 1);
	vertex(0, 100, 0, 0, 1);
	endShape(CLOSE);

	// angle += 0.03;
}
