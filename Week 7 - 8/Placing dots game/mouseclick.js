function mouseClicked() {
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
  alwaysMoving = false;
  
  // Place the circle at a random position on the canvas
  const newCircle = new Circle(random(width), random(height)); 
  circles.push(newCircle);

   // Updated ellipse dimensions
  let isOnEyesOrMouth = (
    isInsideEllipse(newCircle.x, newCircle.y, eye1X, eyeY, 80, 40) ||
    isInsideEllipse(newCircle.x, newCircle.y, eye2X, eyeY, 80, 40) ||
    (isInsideEllipse(newCircle.x, newCircle.y, pupil1X + mouseX / 20, pupilY + mouseY / 45, 30) &&
     !isInsideEllipse(newCircle.x, newCircle.y, eye1X, eyeY, 80, 40)) ||
    (isInsideEllipse(newCircle.x, newCircle.y, pupil2X + mouseX / 20, pupilY + mouseY / 45, 30) &&
     !isInsideEllipse(newCircle.x, newCircle.y, eye2X, eyeY, 80, 40)) ||
    isInsideEllipse(newCircle.x, newCircle.y, mouthX, mouthY + mouseY / 45, 60, 30)
  );

  // On the eyes or mouth, circle false
  if (isOnEyesOrMouth) {
    falseCircles.push(newCircle);
    
    
    // Store its position in the circlesOnEyesOrMouth array
    circlesOnEyesOrMouth.push({ x: newCircle.x, y: newCircle.y });
  }
  
  console.log("Mouse clicked");
  console.log("isOnEyesOrMouth:", isOnEyesOrMouth);
  console.log("falseCircles length:", falseCircles.length);
  
}