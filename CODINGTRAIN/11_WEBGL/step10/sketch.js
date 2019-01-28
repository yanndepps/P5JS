// intro to WEBGL : step10 : camera and perspective


let angle = 0;
let vid;

function preload() {
	vid = createVideo('data/output_01.webm');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	vid.hide();
	vid.loop();
}

function draw() {
	background('#313437');
	noStroke();
	// let camX = map(mouseX, 0, width, -400, 400);
	// shaking the camera : earthquake !!!
	let camX = random(-10, 10);
	let camY = random(-10, 10);
	let camZ = random(-10, 10);
	camera(camX, camY, camZ+(height/2) / tan(PI / 6), camX, camY, camZ, 0, 1, 0);
	ambientLight(255);
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
