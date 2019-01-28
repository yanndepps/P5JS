//////////////////////////////////
// Parents, Child and Variables //
// part02 : adding a different  //
// image to each paragraph !    //
//////////////////////////////////


// -------- INITS --------

// var p = []
// var a = []
var images = []
var loadImg = ['imgs/pic01.jpg', 'imgs/pic02.jpg', 'imgs/pic03.jpg', 'imgs/pic04.jpg', 'imgs/pic05.jpg']
var index = 0

// -------- SETUP --------

function setup() {
  noCanvas()
  for (var i = 0; i < loadImg.length; i++) {
    var p = createP('This is a link : ')
    p.style('background-color', '#5f9ea0')
    p.style('color', '#f0ffff')
    p.style('padding', '24px')

    var a = createA('#', 'load pix : ')
    a.style('color', '#f0ffff')
    a.mousePressed(addPhoto)
    a.parent(p)
  }

  // remove pictures from the page
  var button = select('#clearPage')
  button.mousePressed(clearStuff)
}

// -------- FUNCKS --------

function addPhoto() {
  var img = createImg(loadImg[index])
  var paragraph = this.parent()
  img.size(100, 100)
  img.parent(paragraph)
  images.push(img)
  index = index + 1
  if (index == loadImg.length) {
    index = 0
  }
}


function clearStuff() {
  for (var i = 0; i < images.length; i++) {
    images[i].remove()
  }
  // reset the array to blank
  images = []
}

// -------- END --------
