// intro to WEBGL : step6 : textures : videos

let angle = 0;
let pics;
let cam;

// function preload() {
// 	// pics = loadImage('data/build_06211016.mov');
// }

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	cam = createCapture(VIDEO);
	cam.size(200, 200);
	cam.hide();
}

function draw() {
	background('#313437');

	noStroke();
	ambientLight(255);

	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	texture(cam);
	box(200);


	angle += 0.025;
}
