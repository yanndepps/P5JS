var attractors = [];
var particles = [];

function setup() {
    createCanvas(400, 400);

    // --- particles
    for (var i = 0; i < 100; i++) {
      // particles.push(new Particle(random(width), random(height)));
      particles.push(new Particle(200, 200));
    }

    // --- attractors
    for (var i = 0; i < 10; i++) {
      attractors.push( createVector( random(width), random(height) ) );
    }
    //
    background(51);
}



function draw() {
  stroke(255);
  strokeWeight(4);

  //
  for (var i = 0; i < attractors.length; i++) {
    // point(attractors[i].x, attractors[i].y);
  }

  //
  for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      for (var j = 0; j < attractors.length; j++) {
        particle.attracted(attractors[j]);
      }
    particle.show();
    particle.update();
  }
}
