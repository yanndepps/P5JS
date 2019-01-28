// intro to WEBGL : step13 : createGraphics() as WebGL textures

let angle = 0;
let kitten;
let graphics;

function preload() {
	kitten = loadImage("data/sf_36Grad06.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	love = createGraphics(200, 200);
	love.background(255, 0);
	love.fill(255);
	love.textAlign(CENTER);
	love.textSize(16);
	love.text('The quick brown fox jumped over the lazy dog', 50, 50, 100, 200);
}

function draw() {
	background('#313437');
	ambientLight('#646464');
	directionalLight(255, 255, 255, 0, 1, 1);
	rotateX(angle);
	rotateY(angle*1.3);
	rotateZ(angle*0.7);
	texture(love);
	box(200);
	angle += 0.03;
}
