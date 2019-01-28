////////////////////////////
// 6.1 what is an array ? //
// part 02                //
////////////////////////////


// --- INIT

var words = ["halloween", "blood", "masks", "pumpkins", "fears", "screams"]
var indexW = 0
var indexC = 0
var ts = 38
var myColors = ['#8fbc8f', '#bdb76b', '#e9967a', '#00ced1']

// --- SETUP

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// --- RUN

function draw() {
  background(33)
  fill(myColors[indexC])
  textSize(ts)
  text(words[indexW], 24, 300)
}

// --- FUNKs

function mousePressed() {
  indexW = indexW + 1
  indexC = indexC + 1
  if (indexW == words.length) {
    indexW = 0
  }
  if (indexC == myColors.length) {
    indexC = 0
  }
}

// --- END
