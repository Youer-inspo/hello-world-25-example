let x = 1;
let y = 1;
let easing = 0.01;

let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

let bgColor1;
let bgColor2;
let secondsColor;
let minutesColor;
let hoursColor;

function setup() {
  createCanvas(720, 400);
  
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  secondsColor = color(255, 0, 0);
  minutesColor = color(0, 255, 0);
  hoursColor = color(0, 0, 255);
  
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
  cx = width / 2;
  cy = height / 2;
  
}

function draw() {
  
  background(lerpColor(bgColor1, bgColor2, frameCount / 1200.0));
  
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  fill(255, 150);
  noStroke();
  ellipse(x, y, 66, 66);
  
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = lerp(0, TWO_PI, second() / 60) - HALF_PI;
  let m = lerp(0, TWO_PI, (minute() + second() / 60) / 60) - HALF_PI;
  let h = lerp(0, TWO_PI * 2, (hour() + minute() / 60) / 24) - HALF_PI;
  
  
    // Draw the hands of the clock 
  stroke(secondsColor);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  
  stroke(minutesColor);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  
  stroke(hoursColor);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
}


function mouseClicked() {
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  secondsColor = color(random(255), random(255), random(255));
  minutesColor = color(random(255), random(255), random(255));
  hoursColor = color(random(255), random(255), random(255));
}