
/*
* Tone.js and P5.js demo
* Sequencer 
*/



//  the synth
let synth;



//  whether the audio sequence is playing
let playing = false;



//  the current Tone.sequence
let sequence;



//  the currently playing column
let currentColumn = 0;



//  a fixed scale in use
//  const notes = [ 'A3', 'C4', 'D4', 'E4', 'G4' ];



//  Also can try other scales/notes
const notes = ["F#4", "E4", "C#4", "A4"];
//  const notes = ['A3', 'C4', 'D4', 'E4', 'G4', 'A4'];
//  const notes = [ "A4", "D3", "E3", "G4", 'F#4' ];



//  number of rows is the number of different notes
const numRows = notes.length;



//  number of columns is depending on how many notes to play in a measure
const numCols = 16;
const noteInterval = `${numCols}n`;



//  setup audio config
Tone.Transport.bpm.value = 120;



//  create a Row*Col data structure that has nested arrays
//  [ [ 0, 0, 0 ], [ 0, 0, 0 ], ...]
//  the data can be 0 (off) or 1 (on)
const data = [];
for (let y = 0; y < numRows; y++) {
    const row = [];
    for (let x = 0; x < numCols; x++) {
        row.push(0);
    }
    data.push(row);
}



//  create a new canvas to the browser size


function setup(){
  
      // setup canvas as a square
      const dim = max(windowWidth, windowHeight);
      createCanvas(dim, dim);
      pixelDensity(window.devicePixelRatio);
  
      // clear with black on setup
      background(0);
  
      // setup a reverb with ToneJS
      const reverb = new Tone.Reverb({
          decay: 4,
          wet: 0.2,
          preDelay: 0.25
      });
  
      // load the reverb
      await reverb.generate();
  
      // create an effect node that creates a feedback delay
      const effect = new Tone.FeedbackDelay(`${Math.floor(numCols / 2)}n`, 1 / 3);
      effect.wet.value = 0.2;
  
      // setup a synth with ToneJS
      // use a poly synth which can hold up to numRows voices
      // play each note on a different voice
      synth = new Tone.PolySynth(numRows, Tone.DuoSynth);
  
      // setup the synth
      synth.set({
          voice0: {
              oscillator: {
                  type: "triangle4"
              },
              volume: -30,
              envelope: {
                  attack: 0.005,
                  release: 0.05,
                  sustain: 1
              }
          },
          voice1: {
              volume: -10,
              envelope: {
                  attack: 0.005,
                  release: 0.05,
                  sustain: 1
              }
          }
      });
      synth.volume.value = -10;
  
      // write up our nodes
      synth.connect(effect);
      synth.connect(Tone.Master);
      effect.connect(reverb);
      reverb.connect(Tone.Master);
  
      // every tow measure we randomize the notes
      // we use Transport to schedule timer since it has 
      // to be exactly in sync with the audio
      Tone.Transport.scheduleRepeat(() => {
          randomizeSequencer();
      }, "2m");
  
}


//  on window resize, update the canvas size


function windowResized(){
  
      const dim = max(windowWidth, windowHeight);
      resizeCanvas(dim, dim);
  
}


//  p5 render loop


function draw(){
  
      // the synth isn't loaded yet, don't draw anything
      if (!synth) return;
  
      const dim = min(width, height);
  
      // black background
      background(0);
  
      if (playing) {
          // the audio is playing so we can show the Sequencer
          const margin = dim * 0.2;
          const innerSize = dim - margin * 2;
          const cellSize = innerSize / numCols;
  
          // loop through the nested data structure, drawing each note
          for (let y = 0; y < data.length; y++) {
              const row = data[y];
              for (let x = 0; x < row.length; x++) {
                  const u = x / (numCols - 1);
                  const v = y / (numRows - 1);
                  let px = lerp(margin, dim - margin, u);
                  let py = lerp(margin, dim - margin, v);
  
                  noStroke();
                  noFill();
  
                  // note on=fill, note off=stroke 
                  if (row[x] === 1) fill(255);
                  else stroke(255);
  
                  // draw note
                  circle(px, py, cellSize / 2);
  
                  // draw a rectangle around the currently playing column
                  if (x === currentColumn) {
                      rectMode(CENTER);
                      rect(px, py, cellSize, cellSize);
                  }
              }
          }
      } else {
          // draw a 'play' button
          noStroke();
          fill(255);
          polygon(width / 2, height / 2, dim * 0.1, 3);
      }
  
}


//  randomize the sequencer with some data


function randomizeSequencer(){
  
      // choose a % chance that sometimes it is more busy, other times more sparse
      const chance = random(0.5, 1.5);
      for (let y = 0; y < data.length; y++) {
          // loop through and create some random on/off value
          const row = data[y];
          for (let x = 0; x < row.length; x++) {
              row[x] = randomGaussian() > chance ? 1 : 0;
          }
          // loop through again and make sure we don't have two
          // consecutive 'on' values (sounds bad)
          for (let x = 0; x < row.length - 1; x++) {
              if (row[x] === 1 && row[x + 1] === 1) {
                  row[x + 1] = 0;
                  x++;
              }
          }
      }
  
}


//  when the mouse is pressed turn on the sequencer


function mousePressed(){
  
      // no synth loaded yet, skip mouse click
      if (!synth) {
          return;
      }
  
      if (playing) {
          // if we are currently playing, stop the sequencer
          playing = false;
          sequence.stop();
          Tone.Transport.stop();
      } else {
          // if we aren't currently playing, start the sequence
          // we do this by creating an array of indices [ 0, 1, 2, ... 15 ]
          const noteIndices = newArray(numCols);
          // create the sequence passing onSequenceStep function
          sequence = new Tone.Sequence(onSequenceStep, noteIndices, noteInterval);
  
          // start the sequence and transport loop
          playing = true;
          sequence.start();
          Tone.Transport.start();
      }
  
}


//  here is where we actually play the audio


function onSequenceStep(time, column){
  
      // we build up a list of notes, which will equal
      // the numRows. This gets passed into our PolySynth
      let notesToPlay = [];
  
      // go through each row
      data.forEach((row, rowIndex) => {
          // see if the note is 'on'
          const isOn = row[column] == 1;
          // if it is on, add it to the list of notes to play
          if (isOn) {
              const note = notes[rowIndex];
              notesToPlay.push(note);
          }
      });
  
      // trigger a note
      const velocity = random(0.5, 1);
      synth.triggerAttackRelease(notesToPlay, noteInterval, time, velocity);
      Tone.Draw.schedule(function() {
          currentColumn = column;
      }, time);
  
}


//  draw a basic polygon, handles triangles, squares, pentagons, etc


function polygon(x, y, radius, sides = 3, angle = 0){
  
      beginShape();
      for (let i = 0; i < sides; i++) {
          const a = angle + TWO_PI * (i / sides);
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
      }
      endShape(CLOSE);
  
}


//  a utility function to create a new array
//  full of indices [ 0, 1, 2, ... (N - 1) ]


function newArray(n){
  
      const array = [];
      for (let i = 0; i < n; i++) {
          array.push(i);
      }
      return array;
  
}
