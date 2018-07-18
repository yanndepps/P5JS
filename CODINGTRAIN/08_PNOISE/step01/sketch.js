// Perlin Noise : Part01 : 1D Perlin Noise

let xoff = 0;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(51);
    let x = map(noise(xoff), 0, 1, 0, width);
    xoff += 0.01;
    ellipse(x, 400, 24, 24);
}
