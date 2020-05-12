let x = 0
let y = 0
let spacing = 10
let prob = 0.5


function setup() {
	// createCanvas(windowWidth, windowHeight)
	createCanvas(500, 500)
	background(33)
}

function draw() {
	let c = color('#F7F7F7')
	stroke(c)
	strokeWeight(1)
	strokeCap(ROUND)
	if (random(1) > prob) {
		// rect(x, y, spacing, spacing)
		line(x, y, x+spacing, y+spacing)
	} else {
		line(x, y+spacing, x+spacing, y)
	}
	x = x + spacing
	if (x > width-10) {
		x = 0
		y = y + spacing
	}
	if (y > height-10) {
		noLoop()
		console.log("Done!")
	}
}