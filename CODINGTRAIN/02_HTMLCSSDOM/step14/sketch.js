// Assigning a CSS class dynamically

// -------- INITS --------


// -------- SETUP --------

function setup() {
	noCanvas()

	for (var i = 0; i < 25; i++) {
		var p = createP('apples')
		var x = floor(random(windowWidth))
		var y = floor(random(windowHeight))
		p.position(x, y)
		p.class('apple')
	}

	for (var i = 0; i < 25; i++) {
		var p = createA('#', 'blueberries')
		var x = floor(random(windowWidth))
		var y = floor(random(windowHeight))
		p.position(x, y)
		p.class('blueberry')
		p.mousePressed(becomeApple)
	}
}


// -------- HELPERS --------

function becomeApple() {
	this.removeClass('blueberry')
	this.class('apple')
}

// -------- END --------
