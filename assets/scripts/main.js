//variables
/** x position of the basket */
var basketPosX = 50;
/** y position of the basket */
var basketPosY = 50;
/** x position of the basket */
var pumpkinPosX = 0;
/** y position of the basket */
var pumpkinPosY = 10;
var isRightPressed = 0;
var isLeftPressed = 0;
var score = 0;
var basket;
var scoreElem;
var pumpkin;
var width = 640;
var height = 480;

function preload() {
  basket = loadImage('assets/sprites/basket.png');
  pumpkin = loadImage('assets/sprites/pumpkin.png');
}


function setup() {
  // put setup code here
  scoreElem = createDiv('SCORE: ' + score);
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'purple');
  width = 640;
  height = 480;
  createCanvas(width,height);
  basketPosX = 10;
  basketPosY = height - basket.height - 10;
  controlDroppedFruits();
}

function draw() {
  // clearing canvas before drawing
  clear();
  // change color mode to RGB
  colorMode(RGB);
  // change canvas backgroud color 
  background(223,225,239);
  loadFruitOnCanvas(pumpkin,pumpkinPosX,pumpkinPosY);
  updateBasketPostion();
  updatePumpkinPosition();
}

function updateBasketPostion(){

    if (isRightPressed == 1 && isLeftPressed == 0) 
    {
        if(((pumpkin.width/10) + basketPosX) < (width - (pumpkin.width+(pumpkin.width/2))))
            basketPosX = (pumpkin.width/10) + basketPosX
    }
    if(isLeftPressed == 1 && isRightPressed == 0)
    {
        if(( basketPosX - (pumpkin.width/10) ) > 5)
            basketPosX = basketPosX - (pumpkin.width/10)
    }            
    
    image(basket, basketPosX, basketPosY);
}

function controlDroppedFruits(){
    pumpkinPosX = getRandom(10,width-pumpkin.width);
}

function updatePumpkinPosition() {
  pumpkinPosY=pumpkinPosY+(pumpkin.height/10);
  //reloads pumpkin position when it is out of canvas
  if(pumpkinPosY + pumpkin.height >= height)
  {
    controlDroppedFruits();
    pumpkinPosY = 10;
  }
}

function keyPressed() {
 
 switch (keyCode) {
    case LEFT_ARROW:
        isLeftPressed = 1;
      break;
    case RIGHT_ARROW:
        isRightPressed = 1;
      break;
  }
  return false;
}

function keyReleased() {
  switch (keyCode) {
    case LEFT_ARROW:
      isLeftPressed = 0;
      break;
    case RIGHT_ARROW:
      isRightPressed = 0;
      break;
  }
  return false; // prevent any default behavior
}