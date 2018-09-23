//variables
var score = 0;
var fruitsLost = 0;
var maxNumberMisses = 5;
var fruits = [new Fruit(),new Fruit(),new Fruit()];
var basket;
var numberOfFruits = 5;

function preload() {
    basket = new Basket();
    
    basket.sprite = loadImage('assets/sprites/basket.png');
    
    for (count in fruits) {
        fruits[count].PreLoadFruits();
    }
}


function setup() {
    // put setup code here
    createCanvas(640,480);
    //scoreElem = createDiv('SCORE: ' + score);
    //scoreElem.position(20, 20);
    //scoreElem.id = 'score';
    //scoreElem.style('color', 'purple');

    basket.x = width/2;
    basket.y = height - basket.sprite.height - 5;
    for (count in fruits)
    {
        fruits[count].PlaceFruitInRandomPosition();
        fruits[count].yThreshold = height - (basket.sprite.height/2);    
    }
}

function draw() {
    // clearing canvas before drawing
    clear();

    // change color mode to RGB
    colorMode(RGB);
    // change canvas backgroud color 
    background(223,225,239);
    
    for (count in fruits)
    {
        fruits[count].UpdateFruitPosition(basket.x,basket.sprite.width);
    }
    
    basket.MoveBasket();
    
    //interface 
    fill(81, 43, 102)
        .textSize(15)
        .text("SCORE: " + score,10,20)
        .text("MISSES: " + fruitsLost + " of " + maxNumberMisses,10,40);
}