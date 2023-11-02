let x = 1;
let y = 1;
let easing = 0.05;

let bgColor1;
let bgColor2;


let circles = [];
let falseCircles = [];
let circlesOnEyesOrMouth = [];

let alwaysMoving = true;

let falseimg;
let winimg;


// Positions of eyes, pupils, and mouth
let eye1X = 240;
let eye2X = 480;
let eyeY = 180;
let pupil1X = 227;
let pupil2X = 467;
let pupilY = 175;
let mouthX = 360;
let mouthY = 300;


function preload() {
  falseimg = loadImage('gameover.png');
  winimg = loadImage('win.png');
}

function setup() {
  
  //frame
  createCanvas(720, 400);

  // BK, Clock colors
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  
    // enter to clean
  keyTyped = function() {
    if (key === 'Enter' || key === '\r') {
      circles = [];
      resetSketch();
    }
  };
  
  
}

function draw() {
  
  //BK
  background(lerpColor(bgColor1, bgColor2, frameCount / 1200.0));
  
    //Added circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    circle.display();
    if (circle.isOffscreen()) {
      circles.splice(i, 1);
    }
  }
  
  // eyes
    if (alwaysMoving) {
    fill(0); // black in first
  } else {
    fill(255,150); //white after click
  }
  ellipse(eye1X, eyeY, 80, 40);
  ellipse(eye2X, eyeY, 80, 40);

  // pupils
  let r2 = map(mouseY, 0, 400, 200, 100);
  let g2 = map(mouseX, 0, 400, 100, 150);
  let b2 = map(mouseY, 0, 400, 0, 255);
  fill(r2, g2, b2);
  ellipse(pupil1X + mouseX / 20, pupilY + mouseY / 45, 30);
  ellipse(pupil2X + mouseX / 20, pupilY + mouseY / 45, 30);

  //mouth
  ellipse(mouthX, mouthY, 30, 15);
  noStroke();
  fill(0);

  // false image when circle false
  if (falseCircles.length > 0) {
    image(falseimg, 0, 0, width, height);
  }
  // win image 
  else if (circles.length >= 20) {
    image(winimg, 0, 0, width, height);
  }
  
  // Always moving circle
  if (alwaysMoving) {
    // circle position tracking
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    fill(255, 150);
    noStroke();
    ellipse(x, y, 66, 66);
  }
  
}