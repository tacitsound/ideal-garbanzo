let bgColor;

function setup() {
  createCanvas(400, 400);
  noStroke();
  bgColor = color(0);
}


function draw() {
  beginShape();
    strokeWeight(4);
    stroke(256, 256, 256);
    vertex(20, 80);
    bezierVertex(430, 360, 234, 167, 130, 304);
      beginContour();
        stroke(250, 0, 180);
        vertex(40, 50);
        vertex(100, 200);
        vertex(350, 280);
      endContour();
  endShape();

}

function mousePressed() {
  // Set the background to a new random grayscale value
  bgColor = random(255), random(255), random(255);
  background(bgColor); 
}
