var angle = 0;
var slider;
let seeds = [];

function setup() {
  createCanvas(600, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(51);
    angle = slider.value();
    stroke(255);
    translate(200, height);
    branch(100);

}

function mousePressed() {
    seeds.push({
        x: mouseX,
        y: mouseY,
        vy: 2,
        landed: false
    });
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
    //line(0, 0, 0, -len * 0.67);
}
