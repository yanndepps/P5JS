// 6.2 : classes in JS with ES6

// --- INITS ---
// colors [F9EAD5, 606A62, 95A69C, BE7765, D5B8A8]

let bubble1, bubble2;

// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble1 = new Bubble();
  bubble2 = new Bubble();

}

// --- DRAW ---

function draw() {
  background('#606A62');
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}



class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }


  show() {
    stroke('#F9EAD5');
    strokeWeight(4);
    // noFill();
    fill('#BE7765')
    ellipse(this.x, this.y, 24, 24);
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }


}



// --- END ---
