// Other events

// -------- INITS --------

var bgcolor
var button
var sld
var input
var nameP
var canvas

// -------- SETUP --------

function setup() {
	createP('')

	canvas = createCanvas(200, 200);
	bgcolor = color(200)

	nameP = createP('Type here bolos !')

	canvas.mouseOver(overPara)
	canvas.mouseOut(outPara)

	button = createButton("go")
	button.mousePressed(changeColor)
	createP('')	// spacing

	sld = createSlider(10, 100, 47)
	createP('') // spacing

	input = createInput(' ')
	input.changed(updateText)
}

// -------- DRAW --------

function draw() {
	background(bgcolor)
	fill(255, 0, 175)
	ellipse(100, 100, sld.value(), sld.value())
	// nameP.html(input.value())
	text(input.value(), 10, 20)
}

// -------- HANDLERS --------

function updateText(){
	nameP.html(input.value())
}

function changeColor() {
	bgcolor = color(random(255))
}

function overPara() {
	nameP.html('Your mouse is so over me !!')
}

function outPara() {
	nameP.html('you are out !!!')
}

// -------- END --------
