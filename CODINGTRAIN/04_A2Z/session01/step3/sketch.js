/*
javascript strings
*/

var textfield;
var output;
var submit;


function setup() {
    noCanvas();
    textfield = select('#txt');
    output = select('#output');
    submit = select('#submit');
    submit.mousePressed(newText);
}

function newText() {
    // createP(textfield.value());
    var s = textfield.value();
    var words = splitTokens(s, ', ');
    for (var i = 0; i < words.length; i++) {
        createP(words[i]);
    }

    words = words.sort();
    s = join(words, ' ');
    createP(s);

    // var index = s.indexOf("world");
    // var newText = s.substring(5, 9);
    // createP("eat your "+newText+"ms");
    // createP(s.length);
}