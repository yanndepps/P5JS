// coding challenge 88 : Snow Fall --> step2

let snow = [];
let gravity;
let sheet;
let textures = [];

function preload() {
	sheet = loadImage('data/flakes32.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.03);

	for (let x = 0; x < sheet.width; x += 32) {
		for (let y = 0; y < sheet.height; y += 32) {
			let img = sheet.get(x, y, 32, 32);
			textures.push(img);
		}
	}

	for (let i = 0; i < 300; i++) {
		let x = random(width);
		let y = random(height);
		let design = random(textures);
		snow.push(new Snowflake(x, y, design));
	}
}

function draw() {
	background('#313437');
	// snow.push(new Snowflake());

	for (flake of snow) {
		flake.applyForce(gravity);
		flake.update();
		flake.render();
	}

	// for (let i = snow.length-1; i >= 0; i--) {
	// 	if (snow[i].offScreen()) {
	// 		snow.splice(i, 1);
	// 	}
	// }
}
