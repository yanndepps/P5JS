// Perlin Noise : step03 : 2D Noise

// let xoff1 = 0;
// let xoff2 = 10000;

let inc = 0.01;

function setup() {
    createCanvas(800, 800);
    // turn off high density of the display : 1 pixel per pixel
    pixelDensity(1);
}

function draw() {
    // background(51);
    let yoff = 0;
    loadPixels();
    for (let y = 0; y < height; y++) {
        // for every single row, reset xoff back at zero
        let xoff = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4; 
            // random greyscale values between 0 and 255 
            // r = random(255);
            // same using a noise value at xoff
            let r = noise(xoff, yoff)*255;
            // grap rgba values
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            // for every pixel change xoff by some amount
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
    // noLoop();
}