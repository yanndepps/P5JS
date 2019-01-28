// 4.2 nested loops

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background('#313437')
  strokeWeight(2)
  // stroke(200)
  noStroke()

  // for (var x = 0; x <= width; x += 50) {
  //   for (var y = 0; y <= height; y += 50) {
  //     fill('#aa6699')
  //     ellipse(x, y, 25, 25)
  //   }
  // }

  for (var x = 0; x <= mouseX + 25; x += 50) {
    for (var y = 0; y <= height; y += 50) {
      fill('#aa6699')
      ellipse(x, y, 25, 25)
    }
  }
}
