// Callback on multiple DOM elements

// -------- INITS --------

var para
var paras

// -------- SETUP --------

function setup() {
	createCanvas(200, 200)
	background(33)
	// ---
	// para = select('#unicorn')
	// para.mouseOver(highlight)
	// para.mouseOut(unhighlight)

	// crazy exemple below ...
	// for (var i = 0; i < 100; i++) {
	// 	var par = createP('rainbow!')
	// 	par.position(random(500), random(500))
	// }



	paras = selectAll('.apple')
	// paras = selectAll('.rainbow')
	for (var i = 0; i < paras.length; i++) {
		paras[i].mouseOver(highlight)
		paras[i].mouseOut(unhighlight)
	}
}

// -------- HANDLERS --------

function highlight() {
	this.style('background-color', '#F0F')
	this.style('padding', '16pt')
}

function unhighlight() {
	this.style('background-color', '#FFF')
	this.style('padding', '0pt')
}

// -------- END --------
