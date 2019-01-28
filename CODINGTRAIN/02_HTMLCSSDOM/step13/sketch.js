// parent() and child() : 02

// -------- INITS --------

var hdr
var li
var happy = ['rainbow', 'unicorn', 'bacteria', 'purple']

// -------- SETUP --------

function setup() {
	noCanvas()

	hdr = select('#hdr')
	hdr.style('font-size', '18pt')

	li = select('.list')
	li.style('font-size', '12pt')

	var button = select('#button')
	button.mousePressed(addItems)

}

function draw() {
	background(240, 128, 128, 100)
}

// -------- HELPERS --------

function addItems() {
	var r = floor(random(0, happy.length))
	var hl = createElement('li', happy[r])
	hl.parent('#happylist')
}

// -------- END --------
