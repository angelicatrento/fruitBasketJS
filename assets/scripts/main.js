//variables
/** x position of the basket */
var basketPosX = 50;
/** y position of the basket */
var basketPosY = 50;
/** x position of the basket */
var pumpkinPosX = 0;
/** y position of the basket */
var pumpkinPosY = 10;

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
    image(basket, basketPosX, basketPosY);
}

function controlDroppedFruits(){
    pumpkinPosX = getRandom(10,width-pumpkin.width);
}

function loadFruitOnCanvas(fruitImage,posX,posY) {
  image(fruitImage, posX, posY);
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