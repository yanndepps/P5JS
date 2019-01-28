// 4.1 while and for loops


function setup() {
  createCanvas(600, 400)
}

function draw() {
  background('#313437')
  strokeWeight(2)
  // stroke(200)
  noStroke()
  
  var x = 25
  while (x <= width) {
    fill('#00a8c6')
    ellipse(x, 100, 25, 25)
    x = x + 50
  }

  for (var y = 25; y <= width; y += 50) {
    fill('#aa6699')
    ellipse(y, 200, 25, 25)
  }
}
