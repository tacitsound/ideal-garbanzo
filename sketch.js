function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  beginShape();
    strokeWeight(2)
    stroke(256, 256, 256);
    vertex(20, 80);
    bezierVertex(430, 360, 234, 167, 130, 304);
      beginContour();
        stroke(210, 0, 180);
        vertex(40, 50);
        vertex(100, 200);
        vertex(350, 280);
      endContour();
  endShape();

}
