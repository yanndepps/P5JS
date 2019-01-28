/*
loading text from a file.
you need to run a server in order for javascript
to allow one to load file on the client side.
also, a lot of refresh in the browser while making changes
*/
// var txt;

// function preload() {
//   txt = loadStrings('./assets/textus.txt');
// }

function loadFile() {
  txt = loadStrings('./assets/textus.txt', fileLoaded);
}

// callback function called when the text file is loaded
function fileLoaded(data) {
  createP(join(data, '<br/>'));
}

function fileSelected(file) {
  // console.log(file);
  createP(file.name + " " + file.size + " " + file.type);
  if (file.type == 'text') {
    createP(file.data);
  } else {
    createP('i need a text file !');
  }
}

function setup() {
  noCanvas();
  createFileInput(fileSelected);
  var button = select('#loadfile');
  button.mousePressed(loadFile);
  // console.log(txt);

}
