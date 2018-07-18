/*
  paulbourke.net/geometry/supershape
*/
var slidern;
var slidera;
var sliderb;

function setup() {
  createCanvas(400, 400);
  slidern = createSlider(0, 10, 2, 0.01);
  slidera = createSlider(0, 100, 20, 0.01);
  sliderb = createSlider(0, 100, 20, 0.01);
}


function draw() {
  background(51);
  translate(width / 2, height / 2);

  var a = slidera.value();
  var b = sliderb.value();
  var n = slidern.value();

  stroke(255);
  fill(125, 100);

  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += 0.1) {
    // var x = r * cos(a);
    // var y = r * sin(a);
    var na = 2 / n;
    var x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    var y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));
    vertex(x, y);
  }
  endShape(CLOSE);
}

function sgn(val) {
  if (val > 0) {
    return 1;
  } else if (val < 0) {
    return -1;
  } else {
    return 0;
  }
}


//--- END
