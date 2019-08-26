// P5.FFT example
function preload() {
  sound = loadSound('assets/01_kyoka.flac');
}

function setup() {
  var cnv = createCanvas(512, 256);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw() {
  background(33);

  var spectrum = fft.analyze();
  noStroke();
  fill(0, 255, 0);   // spectrum is green

  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }


  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255, 0, 0);   // waveform is red
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();

  // text('click to play/pause', 4, 10);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
