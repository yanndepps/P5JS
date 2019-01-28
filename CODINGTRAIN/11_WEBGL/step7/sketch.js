// step7 : load video

var playing = false;
var fingers;
var button;


function setup() {

	fingers = createVideo('data/output.webm');
	button = createButton('play');
	button.mousePressed(toggleVid);
}

function toggleVid() {
	if (playing) {
		fingers.pause();
		button.html('play');
	} else {
		fingers.loop();
		button.html('pause');
	}
	playing = !playing;
}
