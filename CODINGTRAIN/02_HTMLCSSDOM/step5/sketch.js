// Interacting with the DOM using slider, buttons and text inputs

var bgcolor
var button
var sld
var input
var nameP

function setup() {
	createP('')
	createCanvas(200, 200);
	bgcolor = color(200)
	nameP = createP('type your shit !')
	button = createButton("go")
	button.mousePressed(changeColor)
	createP('')
	sld = createSlider(10, 100, 47)
	createP('')
	input = createInput('type your shit !')
}

function changeColor() {
	bgcolor = color(random(255))
}

function draw() {
	background(bgcolor)
	fill(255, 0, 175)
	ellipse(100, 100, sld.value(), sld.value())
	nameP.html(input.value())
	text(input.value(), 10, 20)
}
