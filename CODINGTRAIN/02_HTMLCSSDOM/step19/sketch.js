//////////////////////////////////
//  7.16 The Slider dance       //
//         ZOMBIE DOM 02        //
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

var sliders = []
var angle = 0.05
var num = 216

// -------- SETUP --------

function setup() {
  noCanvas()
  for (var i = 0; i < num; i++) {
    sliders[i] = createSlider(0, 255, 50)
  }
  sliders[0].input(adjustSliders)
}

function draw() {
//   var offset = 0
//   for (var i = 0; i < sliders.length; i++) {
//   var x = map(sin(angle*offset), -1, 1, 0, 255)
//   sliders[i].value(x)
//   offset += 0.025
// }
//   angle += 0.05
}

// -------- FUNCKS --------

function adjustSliders() {
  for (var i = 1; i < sliders.length; i++) {
    sliders[i].value(sliders[0].value())
  }
}

// -------- END --------
