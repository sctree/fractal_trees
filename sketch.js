function setup() {
  createCanvas(600, 400);
  //background(100);
}

function draw() {
    background(51);
    stroke(255);
    translate(200, height);
    branch(100);

}

function branch(len) {
    line(0, 0, 0, -len);
    rotate(PI / 4);
    line(0, 0, 0, -len);
}
