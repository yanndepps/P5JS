// place any global variables
var canvas,
    bgColor,
    fft,
    soundFile,
    soundSpectrum;


function setup() {
  colorMode(HSB, 360, 100, 100); // set colour mode of sketch to HSB
  frameRate(60);
  bgColor = color(330, 0, 5);
  background(bgColor);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.drop(gotFile); // listen for file drop onto canvas
  textAlign(CENTER);
  fill(0, 0, 90);
  text("drop audio here, then click.", width / 2, height / 2);
}

function gotFile(file) {
  if ((!soundFile) && (file.type == 'audio')) { // if no sound && is audio
    background(bgColor);
    soundFile = new p5.SoundFile(file.data); // create soundFile from dropped audio
    initSound(); // init sound & FFT
    canvas.mouseClicked(togglePlay); // listen for mouse click to play sound
  }
}

function draw() {
  if (soundFile) {
    // set the BG color, and so clear the canvas
    // background(bgColor); // comment out to paint
    // analyse the current sound
    analyseSound();

    // get the latest "amplitude" or "energy" value from the audio analysis, returned in range 0 to 1
    var myDataVal = getNewSoundDataValue("bass"); // request the amplitude data for the "bass" frequency

    // get a colour from our custom "getDataHSBColor" function.
    // that function takes our data value, and returns an HSB colour created by mapping the data value
    // independently to Hue, Saturation and Brightness
    var myDataColor = getDataHSBColor(myDataVal);
    
    // draw a simple ellipse, at the current position of your mouse, scaled and coloured according to the value of the latest data
    noStroke();
    fill(myDataColor);
    var myEllipseSize = 200 * myDataVal;
    ellipse(mouseX, mouseY, myEllipseSize, myEllipseSize);
  }
}

function getDataHSBColor(d) {
  this.dataHue = map(d, 0, 1, 0, 360); // value moves across full 360 degrees of hue range
  this.dataSaturation = map(d, 0, 1, 0, 100); // higher data value = more saturated colour
  this.dataBrightness = map(d, 0, 1, 0, 100); // higher data value = brighter colour
  return color(this.dataHue, this.dataSaturation, this.dataBrightness);
}

// ------------------------ Sound Stuff ---------------------------------
// a custom function for requesting the data from the audio analysis.
// this function converts the response from the API from a range of 0 to 255, to a range of 0 to 1
function getNewSoundDataValue(freqType) {
  return map(fft.getEnergy(freqType), 0, 255, 0, 1); // get energy from frequency, scaled from 0 to 1
}

// setup a new FFT instance (to analyse the sound) and set the sound's amplification
function initSound() {
  fft = new p5.FFT(0.4, 1024); // smoothing, bins
  soundFile.amp(0.7);
}

function togglePlay() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
  } else {
    soundFile.loop();
  }
}

function analyseSound() {
  soundSpectrum = fft.analyze(); 
}
