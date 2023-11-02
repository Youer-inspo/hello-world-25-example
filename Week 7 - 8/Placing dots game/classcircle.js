class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(60);
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