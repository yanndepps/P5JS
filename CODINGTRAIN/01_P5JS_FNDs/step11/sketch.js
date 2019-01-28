// 5.2 functions parameters & arguments

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background('#313437')
  // lollipop(100, 100, 50)
  // lollipop(300, 200, 150)
  for (var i = 50; i < width; i+=50) {
    lollipop(i, 200, 50)
  }
}

function lollipop(x, y, diameter) {
  fill('#edba00')
  rect(x-(diameter/8), y, diameter*0.25, diameter*3.0)
  fill('#8fbe00')
  ellipse(x, y, diameter, diameter)
}

// --- END ---
