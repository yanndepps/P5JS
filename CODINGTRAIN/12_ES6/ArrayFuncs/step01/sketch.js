// Arrow Functions 

function setup() {
    createCanvas(800, 650);
    background('#333');
    let button = createButton('press');
    button.position(19, 19);
    button.mousePressed(() => background(random(255)));
}


