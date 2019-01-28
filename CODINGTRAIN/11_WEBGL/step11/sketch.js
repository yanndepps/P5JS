// intro to WEBGL : step11 : perspective


let angle = 0;
let vid;

function preload() {
	vid = createVideo('data/output_06.webm');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	vid.hide();
	vid.loop();
}

function draw() {
	background('#313437');
	noStroke();
	// shaking the camera : earthquake !!!
	// shakeCam();
	// perspective 
	// let fov = PI / 3;
	let fov = map(mouseX, 0, width, 0, PI);
	let cameraZ = (height / 2) / tan((PI/3.0)/2.0);
	perspective(fov, width/height, cameraZ/10.0, cameraZ*10.0);

	ambientLight('#FFFFFF');
	push();
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	texture(vid);
	box(200);
	pop();

	angle += 0.025;


}

function shakeCam() {
	let camX = random(-10, 10);
	let camY = random(-10, 10);
	let camZ = random(-10, 10);
	camera(camX, camY, camZ + (height / 2) / tan(PI / 6), camX, camY, camZ, 0, 1, 0);
}