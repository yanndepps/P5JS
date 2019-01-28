//////////////////////////////////
//  QA6 : Sketch as Background  //
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

var canvas
var mic
// -------- SETUP --------

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  mic = new p5.AudioIn()
  mic.start()
  // mic.connect()
}

function draw() {
  background('#ffcc00')
  var vol = mic.getLevel()
  fill(166, 226, 46, 128)
  ellipse(width/2, height/2, vol*10000, vol*10000)
}

// -------- FUNCKS --------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

// -------- END --------
