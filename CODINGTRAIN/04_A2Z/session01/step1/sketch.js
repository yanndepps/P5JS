var textfield;
var output;
var submit;


function setup() {
  noCanvas();
  // textfield = createInput();
  textfield = select('#blueberry');
  // textfield.changed(newText);
  textfield.input(newTyping);
  output = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText);
}

function newTyping() {
  // createP(textfield.value());
  output.html(textfield.value());
}

function newText() {
  // console.log(input.value());
  createP(textfield.value());
}
