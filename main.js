

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    circle(50, 50, 80);

    fill(0,255, 0);
    rect(100, 40, 55, 20);

    fill(255, 0, 0);
    circle(205, 50, 80);

    fill(0,255, 0);
    rect(255, 40, 55, 20);

    fill(255, 0, 0);
    circle(360, 50, 80);

    fill(0,255, 0);
    rect(410, 40, 55, 20);

    fill(255, 0, 0);
    circle(515, 50, 80);

    fill(0,255, 0);
    rect(565, 40, 55, 20);

    fill(255, 0, 0);
    circle(50, 430, 80);

    fill(0,255, 0);
    rect(100, 420, 55, 20);

    fill(255, 0, 0);
    circle(205, 430, 80);

    fill(0,255, 0);
    rect(255, 420, 55, 20);

    fill(255, 0, 0);
    circle(360, 430, 80);

    fill(0,255, 0);
    rect(410, 420, 55, 20);

    fill(255, 0, 0);
    circle(515, 430, 80);

    fill(0,255, 0);
    rect(565, 420, 55, 20);
}

function take_snapshot() {
    save('photo_frame.png');
}