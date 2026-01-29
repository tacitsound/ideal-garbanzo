

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  background(360, 0 ,0);
  

}


function draw() {
  beginShape();
    strokeWeight(5);
    vertex(20, 80);
    bezierVertex(430, 360, 234, 167, 130, 334);
      beginContour();
        stroke(85, 100, 100);
        vertex(40, 50);
        vertex(100, 200);
        vertex(350, 280);
      endContour();
  endShape();

}

