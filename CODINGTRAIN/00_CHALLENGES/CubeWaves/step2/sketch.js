// coding challenge 86 : cube waves by bees and bombs
// step 2 --> move to 3D

let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(840, 690, WEBGL);
  setAttributes('antialias', true);
  createEasyCam({
    distance: 400
  });
  ma = Math.atan(1/Math.sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background('#313437');
  ortho(-840, 840, 690, -690, -500, 1000);
  directionalLight(255, 255, 255, 0, -1, 0);
  ambientLight(200, 0, 200);
  noStroke();
  translate(0, 50, -50);
  rotateY(-QUARTER_PI);
  rotateX(ma);
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width/2, height/2);
      let offset = map(d, 0, maxD, -1, 1);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, 400);
      translate(x - width / 2, 0, z - height / 2);
      // ambientMaterial(255);
      normalMaterial();
      box(w - 12, h, w -2);
      pop();
    }
  }

  angle += 0.1;
}

document.oncontextmenu = function() {
  return false;
}
document.onmousedown = function() {
  return false;
}
