// intro to WEBGL : step3 : materials and lights ...

let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background('#313437');
	noStroke();
	ambientLight(25);
	directionalLight(0, 0, 255, 1, 0, 0);
	pointLight(255, 0, 0, -200, 0, 0);
	// fill('#ff0096');
	// normalMaterial();
	ambientMaterial('#ffffff');
	// specularMaterial('#ff0096');
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	// torus(150, 50, 24, 16);
	sphere(150, 24, 16);
	angle += 0.025;
}
