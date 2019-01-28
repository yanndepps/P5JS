////////////////////////////
//                        //
//  6.2 Arrays and Loops  //
//                        //
////////////////////////////


// --- INIT

var nums = [100, 25, 46, 72]
var indexC = 0
// colors pals
var myColors = ['#8fbc8f', '#bdb76b', '#e9967a', '#00ced1']
var jdColors = ['#FFFFFF', '#F7F7F7', '#ECECEC', '#333333', '#0095a8', '#00616f', '#773300', '#FF6600']
var batColors = [
  '#f8f8f0',
  '#ffcc00',
  '#edba00',
  '#e6db74',
  '#cccc99',
  '#a6e22e',
  '#8fbe00',
  '#79afa9',
  '#738c73',
  '#75715e',
  '#407886',
  '#37424A',
  '#00a8c6',
  '#aa6699',
  '#cc0033',
  '#da2000',
  '#f92672',
  '#967efb',
  '#313437',
  '#a0a0a0'
]

// --- SETUP

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(batColors[18])

  for (var i = 0; i < 4; i++) {
    var fillColor = floor(random(0, 20))
    fill(batColors[fillColor])
    console.log("hex color =" + " " + batColors[fillColor] + " " + "index number =" + " " + fillColor)
    ellipse(i*100+100, 400, nums[i], nums[i])
  }
}

// --- RUN

function draw() {

}

// --- FUNKs


// --- END
