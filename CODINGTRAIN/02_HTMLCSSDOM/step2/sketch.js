// Creating HTML elements with JS

function setup() {
	createCanvas(200, 200);
	// 03 : createElement() allows to create any DOM elements :
	createElement('h1', 'Random numbers below :')
}

// 02 : or create a paragraph each mouse pressed
function mousePressed() {
	createP("My favorite number is : " + random(0.0, 1.0))
}

function draw() {
	background(33)
	fill(200, 0, 0)
	rect(100, 100, 50, 50)
}
