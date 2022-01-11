// Coding by CLPLC. Codé par CLPLC
//Click on "ici" button and move inside the button
//What happening if you going out?
//Do you have any pleasure if you go out.
//If you keep the vertical line of this button, you feeling right?
//Oh yeah? I don't care? No ? I love the stroboscopic way?


let color = 255;
let size;
let move;
let button;


function setup() {
  createCanvas(400, 400);
  button = createButton('ici') 
  
}

function draw() {
  background(0);
  size = mouseX;
  moveX = mouseX;
  moveY= mouseY;
  
  
   if (mouseIsPressed){
    
    for (var x =0 ; x<=width ; x = x + 25){
    for (var y =0 ; y<=height ; y = y + 25){
    noStroke();
    fill(random(0,random(10,255)));
    circle (x , y, size);
      }
    }
  }
  else{
  for (var x =0 ; x<=width ; x = x + 25){
    for (var y =0 ; y<=height ; y = y + 25){
    noStroke();
    fill(random(0,random(250,255)));
    circle (x , y, 20);
    }
  }
}
 
}