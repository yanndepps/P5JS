// intro to WEBGL : step2 : materials and textures

let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background('#313437');
	noStroke();
	ambientLight(185);
	pointLight(200, 200, 200, -50, -100, -250);
	// fill('#ff0096');
	// normalMaterial();
	ambientMaterial('#ff0096');
	// specularMaterial('#ff0096');
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	// torus(150, 50, 24, 16);
	sphere(150, 24, 16);
	angle += 0.025;
}
