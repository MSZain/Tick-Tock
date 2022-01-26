var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(1536,700);
  angleMode(DEGREES);
}

function draw() {
  background("white");  
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle); 
  stroke(180,241,211);
  strokeWeight(3);
  line(0,0,100,0);
  pop()
  
  push();
  rotate(mnAngle);
  stroke(158,231,250);
  strokeWeight(5);
  line(0,0,75,0);
  pop()
  
  push();
  rotate(hrAngle);
  stroke(202,285,241);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  
  strokeWeight(10);
  noFill();
  
  stroke(180,241,211);
  arc(0,0,300,300,0,scAngle);
  
  stroke(158,231,250);
  arc(0,0,280,280,0,mnAngle);
    
  stroke(202,285,241);
  arc(0,0,260,260,0,hrAngle);
  

}


