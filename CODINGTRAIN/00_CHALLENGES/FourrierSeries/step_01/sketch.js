// Fourrier Series : Step_01
// angle or time : time is moving forward
let time = 0;
let wave = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    // a circle
    translate(200, 200);
    let radius = 100;
    stroke(255);
    noFill();
    ellipse(0, 0, radius*2);

    // polar coordinates
    let x = radius * cos(time);
    let y = radius * sin(time);
    // every time we calculate a new y value, store it at the start of the array
    wave.unshift(y);
    fill(255);
    line(0, 0, x, y);
    ellipse(x, y, 8);

    // use the array and draw the value of y
    beginShape();
    translate(200, 0);
    // connect a line from circle to wave
    line(x-200, y, 0, wave[0]);
    noFill();
    for (let i = 0; i < wave.length; i++) {
       vertex(i, wave[i]); 
    }
    endShape();
    // time is moving forward
    time += 0.05;

    // do not draw too much points
    if (wave.length > 150) {
        wave.pop();
    }
}
