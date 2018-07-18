// Perlin Noise : step02 : Graphing values 

// let xoff1 = 0;
// let xoff2 = 10000;

let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(51);

    stroke(200);
    noFill();
    beginShape();
    let xoff = start;
    for (let x = 0; x < width; x++) {
        stroke(200);
        let n = map(noise(xoff), 0, 1, -50, 50);
        let s = map(sin(xoff), -1, 1, 0, height);
        let y = s + n;
        
        // let y = random(height); 
        // let y = noise(xoff)*height;
        vertex(x, y);
        xoff += inc;
    }
    endShape();
    start += inc;
    
    // noLoop(); 
    
    
    
    
    // let x = map(noise(xoff1), 0, 1, 0, width);
    // let y = map(noise(xoff2), 0, 1, 0, height);
    // xoff1 += 0.01;
    // xoff2 += 0.01;
    // ellipse(x, y, 24, 24);
}
