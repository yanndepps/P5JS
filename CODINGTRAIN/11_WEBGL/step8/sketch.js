// intro to WEBGL : step8 : textures : videos

let angle = 0;
let vid;

function preload() {
	vid = createVideo('data/output_02.webm');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	vid.hide();
	vid.loop();
}

function draw() {
	background('#313437');

	noStroke();
	ambientLight(255);
	// translate(-100, -100, 0);
	push();
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	texture(vid);
	box(200);
	// sphere(200);
	pop();

	angle += 0.025;


}
