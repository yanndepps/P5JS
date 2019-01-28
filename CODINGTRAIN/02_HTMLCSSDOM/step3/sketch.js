// Manipulating DOM elements with html() & position()

var canvas
var h1
var x = 75
var y = 75

function setup() {
	// store all these informations in their variables :
	canvas = createCanvas(200, 200);
	// we add the postion() function to the new object
	canvas.position(0, 300)
	h1 = createElement('h1', 'Waiting...')
	// h1.position(75, 300)
}

function mousePressed() {
	h1.html('My favorite number is :')
	createP("This one : " + random(0.0, 1.0))
}

function draw() {
	clear()
	// background(33)
	fill(200, 0, 0)
	rect(x, y, 50, 50)
	x = x + random(-5, 5)
	// h1.position(x, y)
}
