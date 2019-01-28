// intro to WEBGL : step9 : textures : videos
// jump at random time position

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
	ambientLight(255);
	// jump every x second
	if (frameCount % 120 == 0) {
		vid.time(random()*vid.duration()-2);
	}

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
