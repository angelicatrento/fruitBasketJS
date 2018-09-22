//variables
/** x position of the circle */
var posX = 50;
/** y position of the circle */
var posY = 50;

var basket;
function preload() {
  basket = loadImage('assets/sprites/basket.png');
}


function setup() {
  // put setup code here
  createCanvas(640, 480);
  background(255,255,255);
  
}

function draw() {
  // clearing canvas before drawing
  clear();
  
  image(basket, posX, posY);
  // put drawing code here
  //ellipse(posX, posY, 80, 80); 
  if(posY < 480 && posX < 600)
  {
    posY++;
  }
  else if(posY >= 480)
  {
      if(posX < 600)
      {
        posX++;        
      }
      else{
          posY--;
      }
  }
}