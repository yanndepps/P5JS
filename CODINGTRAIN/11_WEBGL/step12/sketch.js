// intro to WEBGL : step12 : perspective --> ortho


let angle = 0;
let vid;
let inc = 20;

function preload() {
	vid = createVideo('data/output_06.webm');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(6);
	vid.hide();
	vid.loop();
}

function draw() {
	background('#313437');
	noStroke();
	ortho(-200, 200, 6, -6, 0.01, 1000);
	pointLight(255, 255, 255, 0, -200, 200);
	ambientLight('#FFFFFF');
	for (let x = -200; x < 250; x += inc) {
		push();
		translate(x, 0, x);
		rotateX(angle);
		rotateY(angle * 0.3);
		rotateZ(angle * 1.2);
		texture(vid);
		box(50);
		pop();
	}
	angle += 0.025;
}
