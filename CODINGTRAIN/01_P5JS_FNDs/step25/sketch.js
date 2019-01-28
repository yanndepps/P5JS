// 6.3 : constructor arguments with classes

// --- INITS ---
// colors [F9EAD5, 606A62, 95A69C, BE7765, D5B8A8]

let bubble1, bubble2;

// -- SETUP ---

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble1 = new Bubble(200, 200, 12);
  bubble2 = new Bubble(400, 200, 40);

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
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }


  show() {
    stroke('#F9EAD5');
    strokeWeight(4);
    // noFill();
    fill('#BE7765')
    ellipse(this.x, this.y, this.r*2);
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }


}



// --- END ---
