//variables
/** x position of the basket */
var pumpkinPosX = 0;
/** y position of the basket */
var pumpkinPosY = 10;

var score = 0;
var scoreElem;
var pumpkin;
var basket;


function preload() {
  basket = new Basket();
  basket.sprite = loadImage('assets/sprites/basket.png');
  pumpkin = loadImage('assets/sprites/pumpkin.png');
}


function setup() {
  // put setup code here
  fill(81, 43, 102);
  text("SCORE: " + score);

  //scoreElem = createDiv('SCORE: ' + score);
  //scoreElem.position(20, 20);
  //scoreElem.id = 'score';
  //scoreElem.style('color', 'purple');
  basket.x = width/2;
  basket.y = height - basket.sprite.height;
  createCanvas(640,480);
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
  updatePumpkinPosition();
  basket.MoveBasket();
  
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