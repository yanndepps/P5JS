// coding challenge 88 : Snow Fall --> step1

let snow = [];
let gravity;

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.03);
}

function draw() {
	background('#313437');
	snow.push(new Snowflake());

	for (flake of snow) {
		flake.applyForce(gravity);
		flake.update();
		flake.render();
	}

	for (let i = snow.length-1; i >= 0; i--) {
		if (snow[i].offScreen()) {
			snow.splice(i, 1);
		}
	}
}
