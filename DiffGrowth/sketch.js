var centerX, centerY;
var nodes = [];
var divisions = 10;
var r = 50;                // 100
var scalar = 0.7;           // 1 // 0.8
var rForce = -0.91;            // -1 // -4
var rThresh = 100;           // 100
var dThresh = 53;           // 20
var aForce = 0.1;           // 0.2
var aThresh = 50;           // 10

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(61);
    centerX = width/2;
    centerY = height/2;
    angleMode(DEGREES);
    frameRate(10);
    // make a pretty ring around point (0,0)
    for (var i = 0; i <  divisions; i++) {
      var vec = createVector(r, 0);
      var angle = 360/divisions*i+random(-10, 10);
      vec.rotate(angle);
      var node = new Node(vec);
      nodes.push(node);
    }
}



function draw() {
  translate(centerX, centerY);
  scale(scalar);
  // background(61);

  // draw vertices
  // noFill();
  fill(178, 206, 220, 4);
  strokeWeight(1);
  stroke(255, 247, 153);
  beginShape();
  for(var i = 0; i < nodes.length; i++) {
    vertex(nodes[i].pos.x, nodes[i].pos.y);
  }
  endShape(CLOSE);
  fill(0);
  noStroke();
  for(var i = 0; i < nodes.length; i++) {
    nodes[i].display();
  }
  //
  rejectAll();
  edgeSplit();
  attractNeighbors();
}


// --- functions --- //

var Node = function(vector) {
  this.pos = vector;
  this.display = function() {
    // draw a circle at the node's position with diameter of 10
    ellipse(this.pos.x, this.pos.y, 2, 2);
  };
};
// ---
function rejectAll() {
  for (var i = 0; i < nodes.length; i++) {
    for (var j = 0; j < nodes.length; j++) {
      if (i !== j) {
        if (nodes[j].pos.dist(nodes[i].pos)<rThresh) {
          var newPos = p5.Vector.lerp(nodes[i].pos, nodes[j].pos, rForce/nodes.length);
          nodes[i].pos = newPos;
        }
      }
    }
  }
}
// ---
function keyPressed() {
  if (key == ' ') {
    noLoop();
  }
}
// --- measure the distance between every pair of connected nodes
function growMidpoint(vec1, vec2) {
  var d = p5.Vector.lerp(vec1, vec2, 0.5);
  var bulb = new Node(d);
  return bulb;
}
// ---
function edgeSplit() {
  for(var i = 0; i < nodes.length; i++) {
    var neighbor = i + 1;
    if (neighbor > nodes.length-1) (neighbor = 0);
    if (nodes[i].pos.dist(nodes[neighbor].pos) > dThresh) {
      var bulb = growMidpoint(nodes[i].pos, nodes[neighbor].pos);
      nodes.splice(neighbor, 0, bulb);
    }
  }
}
// ---
function attractNeighbors() {
  for ( var i = 0; i < nodes.length; i++) {
    var right = i + 1;
    var left = i - 1;
    if (right > nodes.length-1) (right = 0);
    if (left < 0) (left = nodes.length-1);
    if (nodes[i].pos.dist(nodes[right].pos)>aThresh) {
      var d = p5.Vector.lerp(nodes[i].pos, nodes[right].pos, aForce);
      nodes[i].pos = d;
    }
    if (nodes[i].pos.dist(nodes[left].pos)>aThresh) {
      var d = p5.Vector.lerp(nodes[i].pos, nodes[left].pos, aForce);
      nodes[i].pos = d;
    }
  }
}
