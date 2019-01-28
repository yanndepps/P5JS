// Handling DOM events with callbacks

var bgcolor
var button

function setup() {
	createCanvas(200, 200)
	bgcolor = color(200)
	button = createButton("go go go !!!")
	button.mousePressed(changeColor)
}

function changeColor() {
	bgcolor = color(random(255))
}

// function mousePressed() {
// 	changeColor()
// }

function draw() {
	background(bgcolor)
	fill(200, 0, 0)
	rect(100, 100, 50, 50)
}
