// if - else if

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background('#313437')
	stroke('#F7F7F7')
	strokeWeight(4)
	noFill()
	if (mouseX > 250 && mouseX < 350) {
		fill('#ffcc00')
	} else {
		fill('#967efb')
	}
	ellipse(300, 200, 100, 100)
}
