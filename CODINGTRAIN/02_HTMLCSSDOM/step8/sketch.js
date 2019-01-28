// Events changed and inputs

// -------- INITS --------

var textbox
var slider
var paragraph

// -------- SETUP --------

function setup() {
	noCanvas()
	textbox = createInput('enter text')
	createP('') // spacing
	slider = createSlider(10, 64, 16)
	paragraph = createP('starting text')
	// textbox.changed(updateText)
	textbox.input(updateText)
	slider.input(updateSize)
}

// -------- DRAW --------



// -------- HANDLERS --------

function updateText() {
	paragraph.html(textbox.value())
}

function updateSize() {
	paragraph.style("font-size", slider.value() + "pt")
}

// -------- END --------
