function setup(){
  createCanvas(windowWidth, windowHeight, 'webgl');
}

function draw(){
  background(0);
  translate(-width/2, 0, -800);
  ambientLight(150);
  directionalLight(250, 250, 250, 0.25, 0.25, 0.25);
  ambientMaterial(250);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(250, 250, 10);
  plane(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(250, 100, 250);
  box(80, 80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(100, 50, 250);
  cylinder(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(100, 250, 250);
  cone(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(20, 200, 10);
  torus(80, 20);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(frameCount % 250, 250 - frameCount % 250, 250 - frameCount % 250);
  sphere(80, 80);
  pop();
}