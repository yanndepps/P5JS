//////////////////////////////////
//  7.15 Drag and Drop a file   //
//////////////////////////////////


// -------- INITS --------

// var batColors = [
//   '#f8f8f0',
//   '#ffcc00',
//   '#edba00',
//   '#e6db74',
//   '#cccc99',
//   '#a6e22e',
//   '#8fbe00',
//   '#79afa9',
//   '#738c73',
//   '#75715e',
//   '#407886',
//   '#37424A',
//   '#00a8c6',
//   '#aa6699',
//   '#cc0033',
//   '#da2000',
//   '#f92672',
//   '#967efb',
//   '#313437',
//   '#a0a0a0'
// ]

var dropzone

// -------- SETUP --------

function setup() {
  var canvas = createCanvas(200, 200)
  canvas.drop(gotFile)
  // background('#313437')
  canvas.style('background-color', '#313437')
  canvas.style('border-style', 'dashed')
  canvas.style('color', '#407886')


  dropzone = select('#dropzone')
  dropzone.dragOver(highlight)
  dropzone.dragLeave(unhighlight)

}

// -------- FUNCKS --------

function gotFile(file) {
  var fn = createP(file.name).style('color', '#407886')
  var ft = createP(file.type).style('color', '#407886')
  var fs = createP(file.size + " " + 'octets').style('color', '#407886')
  var img = createImg(file.data)
  img.size(200, 200)
  // img.hide()
  image(img, 0, 0, 200, 200)
}

function highlight() {
  dropzone.style('background-color', '#37424A')
}
function unhighlight() {
  dropzone.style('background-color', '#313437')
}

// -------- END --------
