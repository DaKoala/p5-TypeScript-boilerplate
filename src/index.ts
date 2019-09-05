import 'p5';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  ellipse(50, 50, 80, 80);
}

// p5.js requires `setup` and `draw` to be methods of global object
window.setup = setup;
window.draw = draw;
