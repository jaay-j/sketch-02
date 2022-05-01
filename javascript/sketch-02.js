var width = 1000;
var height = 1000;

function setup() {
    createCanvas(1000, 1000);
    background(18, 87, 20);
    angleMode(DEGREES);

    var i = 0;
    while (i < 1000) {
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(100 * i, 98 * i, 8, 200);
        i = i + 0.3;
    }

    var i = 0;
    while (i < 1000) {
        noFill();
        stroke(0);
        strokeWeight(3);
        rect (0 * i, 110 * i, 200, 8);
        i = i + 0.3;
    }

    var i = 0;
    while (i < 1000) {
        translate (800, 0);
        noFill(0);
        stroke(0);
        strokeWeight(3);
        rect(0 * i, 0 * i, 200, 1000);
        i = i + 0.3;
    }
}


function mousePressed(){
    saveCanvas("sketch-02", "png")
    }
