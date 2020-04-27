let pointSize;

 

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointSize = windowWidth / 600.0;
}

 

function draw() {
  background(255);
  translate(windowWidth / 2, windowHeight / 2);
  fill(255, 0, 0);
  noStroke();
  ellipse(0, 0, 160 * pointSize, 160 * pointSize);
}

 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pointSize = windowWidth / 600.0;
}