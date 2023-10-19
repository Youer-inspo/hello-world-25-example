let x = 1;
let y = 1;
let easing = 0.05;

let bgColor1;
let bgColor2;
let secondsColor;
let minutesColor;
let hoursColor;

let button, butval;
let circles = [];

function setup() {
  
  //frame
  createCanvas(720, 400);

  // BK, Clock colors
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  secondsColor = color(255, 0, 0);
  minutesColor = color(0, 255, 0);
  hoursColor = color(0, 0, 255);
  
  //button setting
  button = createButton('dots');
  button.mousePressed(addCircle);
  butval = false;
  
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
  
  // button position
  button.position(mouseX, mouseY);
  
  //clock position,rotation
  let s = lerp(0, TWO_PI, second() / 60) - HALF_PI;
  let m = lerp(0, TWO_PI, (minute() + second() / 60) / 60) - HALF_PI;
  let h = lerp(0, TWO_PI * 2, (hour() + minute() / 60) / 24) - HALF_PI;

  stroke(secondsColor);
  strokeWeight(1);
  line(width / 2, height / 2, width / 2 + cos(s) * 180, height / 2 + sin(s) * 180);
  stroke(minutesColor);
  strokeWeight(2);
  line(width / 2, height / 2, width / 2 + cos(m) * 150, height / 2 + sin(m) * 150);
  stroke(hoursColor);
  strokeWeight(4);
  line(width / 2, height / 2, width / 2 + cos(h) * 125, height / 2 + sin(h) * 125);
  
  //eyes
  ellipse(240, 180, 60, 30);
  ellipse(480, 180, 60, 30);
  
  // always moving circle
  
  // always moving circle
  if (!butval) {
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
  
  //pupils
  let r2 = map(mouseY, 0, 400, 200, 100);
  let g2 = map(mouseX, 0, 400, 100, 150);
  let b2 = map(mouseY, 0, 400, 0, 255);
  fill(r2, g2, b2);
  ellipse(227 + mouseX / 20, 175 + mouseY / 45, 18);
  ellipse(467 + mouseX / 20, 175 + mouseY / 45, 18);
  
  //mouse
  ellipse(360, 300, 30, 15);
  noStroke();
  fill(0);
  
}

function addCircle() {
  butval = true;
  circles.push(new Circle(mouseX, mouseY)); // Create a new circle with the current mouse position
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
  }

  display() {
    noStroke();
    fill(255, 150);
    ellipse(this.x, this.y, this.r, this.r);
  }

  isOffscreen() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
}

function mouseClicked() {
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  secondsColor = color(random(255), random(255), random(255));
  minutesColor = color(random(255), random(255), random(255));
  hoursColor = color(random(255), random(255), random(255));
}


function resetSketch() {
  
  // Remove the button
  button.remove();

  // Reset all other variables and objects to their initial state
  circles = [];
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  secondsColor = color(random(255), random(255), random(255));
  minutesColor = color(random(255), random(255), random(255));
  hoursColor = color(random(255), random(255), random(255));
  x = 1;
  y = 1;
  butval = false;

  // Create a new button after removing the old one
  button = createButton('dots');
  button.mousePressed(addCircle);
}

