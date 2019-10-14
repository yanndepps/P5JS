/*
* Tone.js and P5.js demo
* Using filters, reverbs and feedback delays
*/

// the setup function is async, might take a while to load
let ready = false;

// the synth
let synth;

// can be 'sine', 'sawtooth', 'triangle', 'square'
// can also add suffixes like sine8, square4
const type = 'square';

// global volume in decibels
const volume = -15;

// the filter and effect nodes which we will modulate
let filter, effect;

// min and max frequency (Hz) cutoof range for the filter
const filterMin = 100;
const filterMax = 8000;

// 0..1 values for our FX
let fxU = 0.5;
let fxV = 0.5;

// the notes we will use
const notes = [ 'C5', 'A3', 'D4', 'G4', 'A4', 'F4' ];

// create a new canvas to the browser size
async function setup () {
    createCanvas(windowWidth, windowHeight);
    // clear with black on setup
    background(0);

    // make the volume quieter
    Tone.Master.volume.value = volume;

    // setup a reverb with ToneJS
    const reverb = new Tone.Reverb({
        decay: 5,
        wet: 0.5,
        preDelay: 0.2
    });

    // load the reverb
    await reverb.generate();

    // create an effect node that creates a feedback delay
    effect = new Tone.FeedbackDelay(0.4, 0.85);

    // create a new filter for the X slider
    filter = new Tone.Filter();
    filter.type = 'lowpass';

    // setup a synth with ToneJS
    synth = new Tone.Synth({
        oscillator: {
            // prefix 'fat' to spread over multiple frequencies
            type: `fat${type}`,
            count: 8,
            spread: 30
        },
        envelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0.5,
            release: 0.1,
            attackCurve: "exponential"
        }
    });

    // wire up our stack :
    // synth->filter->effect->reverb->master
    synth.connect(filter);
    filter.connect(effect);
    effect.connect(reverb);
    reverb.connect(Tone.Master);

    // now we're ready to draw !
    ready = true;
}

// on window resize, update the canvas size
function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
    
    // clear to black on resize
    background(0);
}

// render loop
function draw () {
    // make sure async setup() is done
    if (!ready) return;

    filter.frequency.value = lerp(filterMin, filterMax, fxU);
    effect.wet.value = fxV;

    // consistent sizing regardless of portrait/landscape
    const dim = min(width, height);

    // black
    background(0);

    // draw the two FX knobs
    if (mouseIsPressed) {
        noFill();
        strokeWeight(dim * 0.0175);
        stroke(255);
        drawEffectKnob(dim * 0.4, fxU);
        drawEffectKnob(dim * 0.6, fxV);
    }

    // draw a 'play' button
    noStroke();
    fill(255);
    polygon(width / 2, height / 2, dim * 0.1, 3);
}

// draws an arc with the given amount of 'strength'
function drawEffectKnob (radius, t) {
    if (t <= 0) return;
    arc(width / 2, height / 2, radius, radius, 0, PI * 2 * t);
}

// update FX values based on mouse pos
function updateEffects () {
    fxU = max(0, min(1, mouseX / width));
    fxV = max(0, min(1, mouseY / height));
}

// update the FX and trigger synth ON
function mousePressed () {
    updateEffects();
    if (synth) synth.triggerAttack(random(notes));
}

// update the FX values
function mouseDragged () {
    updateEffects();
}

// trigger synth OFF
function mouseReleased () {
    if (synth) synth.triggerRelease();
}

// draw a basic polygon, handles triangles, squares, pentagons, etc
function polygon (x, y, radius, sides = 3, angle = 0) {
    beginShape();
    for (let i = 0; i < sides; i++) {
        const a = angle + TWO_PI * (i / sides);
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}