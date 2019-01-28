//////////////////////////////////
// Parents, Child and Variables //
//////////////////////////////////


// -------- INITS --------

var p
var images = []

// -------- SETUP --------

function setup() {
  noCanvas()
  for (var i = 0; i < 5; i++) {
    p = createP('This is a link : ')
    p.style('background-color', '#5f9ea0')
    p.style('color', '#f0ffff')
    p.style('padding', '24px')

    var a = createA('#', 'load a ponge : ')
    a.style('color', '#f0ffff')
    a.mousePressed(addPhoto)
    a.parent(p)
  }

	// remove pictures from the page
	var button = select('#clear')
	button.mousePressed(clearStuff)
}


// -------- FUNCKS --------

function addPhoto() {
  var img = createImg('imgs/flyingH_03.jpg')
	images.push(img)
  img.size(100, 100)
	var paragraph = this.parent()
  img.parent(paragraph)
}

function clearStuff() {
	for (var i = 0; i < images.length; i++) {
		images[i].remove()
	}
	// reset the array to blank
	images = []
}

// -------- END --------
