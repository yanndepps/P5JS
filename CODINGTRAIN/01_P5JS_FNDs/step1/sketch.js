////////////////////////////
// 6.1 what is an array ? //
////////////////////////////


// --- INIT

var nums = [100, 25, 46, 72];
var num = 23;
var myColors = ['#8fbc8f', '#bdb76b', '#e9967a', '#00ced1'];

// --- SETUP

function setup() {
	createCanvas(windowWidth, windowHeight);
}

// --- RUN

function draw() {
    background(33);
    noStroke();
    fill(myColors[3]);
    ellipse(100, 200, num, num);
    fill(myColors[0]);
    ellipse(200, 200, nums[2], nums[2]);
}

// --- FUNKs


// --- END
