// Coding Challenge #127 : Brownian Motion Snowflake

let current;
let snowflake = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  current = new Particle(width/2, 0);
}

function draw() {
  translate(width/2, height/2);
  rotate(PI/6);
  background(0);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  // is a particle doesn't move, we are done. exit function :
  if (count == 0) {
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(width/2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1,-1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}
