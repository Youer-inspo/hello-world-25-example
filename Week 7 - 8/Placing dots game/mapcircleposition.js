function isInsideEllipse(px, py, ex, ey, ew, eh) {
  let dx = px - ex;
  let dy = py - ey;
  return (dx * dx) / ((ew / 2) * (ew / 2)) + (dy * dy) / ((eh / 2) * (eh / 2)) <= 1;
}