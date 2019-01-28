// parent() and child()

// -------- INITS --------

var hdr

// -------- SETUP --------

function setup() {
	var canvas = createCanvas(400, 400)
	canvas.parent('#canvasp')

	hdr = select('#pa')
	hdr.style('font-size', '18pt')
	hdr.mouseOver(pinkColor)
	hdr.mouseOut(blackColor)
}

function draw() {
	background(33, 50)
	fill(250, 50)
	ellipse(200, 200, random(200), random(200))
}
// -------- HANDLERS --------

function pinkColor() {
	this.style('color', 'pink')
}
function blackColor() {
	this.style('color', 'black')
}
// -------- END --------
