// The basics of CSS

// -------- INITS --------

var bgcolor
var button
var txt
var sld

// -------- SETUP --------

function setup() {
	createCanvas(200, 200);
	bgcolor = color(33)
	txt = createP('some text !')
	txt.mouseOver(changeStyle)
	txt.mouseOut(revertStyle)
	button = createButton('go')
	createP('')	// spacing
	sld = createSlider(10, 100, 45)
}

// -------- DRAW --------

function draw() {
	background(bgcolor)
	fill(255, 0, 175)
	ellipse(100, 100, sld.value(), sld.value())
}

// -------- HANDLERS --------

function changeStyle() {
	txt.style("background-color", "pink")
	txt.style("padding", "24px")
	txt.html('Bødø !')
}
function revertStyle() {
	txt.style("background-color", "purple")
	txt.style("padding", "8px")
	txt.html('some text !')
}
// -------- END --------
