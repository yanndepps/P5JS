// CSS Selectors : select() and selectAll()

// -------- INITS --------

var para
var butt
var paras

// -------- SETUP --------

function setup() {
	createCanvas(200, 200)
	background(33)
	para = select('#unicorn')
	para.mouseOver(changeColor)
	butt = select('#button')
	butt.mousePressed(changeBG)
	// paras = selectAll('p')
	paras = selectAll('.rainbow')
	for(var i = 0; i < paras.length; i++) {
		paras[i].style('font-size', '24pt')
	}
}

// -------- HANDLERS --------

function changeColor(){
	para.style('background-color', '#F0F')
}

function changeBG() {
	background(random(255))
}

// -------- END --------
