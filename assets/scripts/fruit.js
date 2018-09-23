function Fruit() {
    /** x position of the fruit */
    this.x = 0;
    /** y position of the fruit */
    this.y = 10;
    this.yThreshold = 0;
    
    this.sprite = null; // Basket sprite
    this.speed = 1; 
    this.increaseSpeed = 0.2;
    this.canvasMinBoundary = 10; 

    this.PlaceFruitInRandomPosition = function() {
        this.x = getRandom(this.canvasMinBoundary,width - this.sprite.width);
        this.y = 10;
    }
    
    this.UpdateFruitPosition = function(basketPosX, basketWidth) {
        this.y += this.speed;

        this.CheckForBasket(basketPosX, basketWidth);
        
        //reloads pumpkin position when it is out of canvas
        if(this.y >= height - (this.sprite.height/2))
        {
            this.PlaceFruitInRandomPosition();
            fruitsLost += 1;
        }

        image(this.sprite, this.x, this.y);
    }
    
    this.CheckForBasket = function(basketPosX, basketWidth){
                
        if (this.y + this.sprite.height > this.yThreshold &&
        (this.x >= basketPosX && this.x <= (basketPosX + basketWidth))){
            score += 1;
            this.speed += this.increaseSpeed;
            this.PlaceFruitInRandomPosition();
        }
    }
    
    
   
}