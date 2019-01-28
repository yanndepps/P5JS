// intro to WEBGL : step14 : loading objects

let angle = 0;
var mdl;
var pic;
var vid;

function preload() {
	// pic = loadImage("data/sf_36Grad38.png");
	// vid = createVideo('data/output_06.webm');
	// vid.hide();
	// vid.loop();
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	mdl = loadModel("data/mdl.obj", true);
	pg = createGraphics(200, 200);
	pg.background(128, 200);
}

function draw() {
	background('#313437');
	ambientLight('#FF00FF');
	directionalLight(255, 255, 255, 0, 1, 1);
	rotateX(angle);
	rotateY(angle*1.3);
	rotateZ(angle*0.7);
	texture(pg);
	model(mdl);
	angle += 0.03;
}
