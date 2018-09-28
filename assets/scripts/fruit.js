function Fruit() {
    /** x position of the fruit */
    this.x = 0;
    /** y position of the fruit */
    this.y = 10;
    this.yThreshold = 0;
    this.initialSpeed = 1;
    this.startSplashTime = 0;
    
    this.sprite = null; // Basket sprite
    this.splash_sprite = null;
    
    this.speed = this.initialSpeed ; 
    this.increaseSpeed = 0.2;
    this.canvasMinBoundary = -10; 
    
    
    this.fruitPath = [ "assets/sprites/blueberry.png"
                      ,"assets/sprites/cherry.png"
                      ,"assets/sprites/grape.png"
                      ,"assets/sprites/green_apple.png"
                      ,"assets/sprites/orange.png"
                      ,"assets/sprites/pear.png"
                      ,"assets/sprites/pepper.png"
                      ,"assets/sprites/pumpkin.png"
                      ,"assets/sprites/red_apple.png"
                      ,"assets/sprites/strawberry.png"
                      ,"assets/sprites/tomato.png"
                     ];
    this.fruitSplash = "assets/sprites/splash.png";
    
    this.fruitSprites = [];
    
    this.PreLoadFruits = function(){

        for (count in this.fruitPath) {
            this.fruitSprites.push(loadImage(this.fruitPath[count]));
        }
        this.splash_sprite = loadImage(this.fruitSplash);
    }
    
    
    this.PlaceFruitInRandomPosition = function() {
        this.sprite = this.GetRandomFruit();
        this.x = getRandom(canvasMinLimit,canvasMaxLimit);
        this.y = getRandom(-1000,-10);
        
    }
    
    this.UpdateFruitPosition = function() {
        this.y += this.speed;

        //this.CheckForBasket(basketPosX,basketPosY, basketWidth,basketHeight);
        
        //reloads pumpkin position when it is out of canvas
        if(this.y >= height - (this.sprite.height/2))
        {
            this.startSplashTime = millis();
            fruitLostSound.play();
            this.PlaceFruitInRandomPosition();
            fruitsLost += 1;
            //tint(0, 153, 204);  // Tint blue
        }
        
        if(this.startSplashTime > 0)
            this.DoSplash(this.x,this.y);
            
        image(this.sprite, this.x, this.y);
    }
    
    this.CheckForBasket = function(basketPosX,basketPosY, basketWidth,basketHeight){
                
       /* if (this.y + this.sprite.height > this.yThreshold &&
        (this.x >= basketPosX && this.x <= (basketPosX + basketWidth))){
            score += 1;
            this.speed += this.increaseSpeed;
            this.PlaceFruitInRandomPosition();
        }*/
        
        fruitInBasket = collideRectRect(basketPosX,this.yThreshold, basketWidth,basketHeight,this.x,this.y,this.sprite.width,this.sprite.height);
        
        /*
        LOG - TODO - ADD COMMAND KEY TO DISPLAY LOGS
        fill(255,255,0,50);
        rect(basketPosX,this.yThreshold,basketWidth,basketHeight);
        fill(255,0,255,50);
        rect(this.x,this.y,this.sprite.width,this.sprite.height);
        */
        
        if(fruitInBasket){
            soundCatchFruit.play();
            score += 1;
            this.speed += this.increaseSpeed;
            this.PlaceFruitInRandomPosition();
        }
    }
    
    this.GetRandomFruit = function(){
        return this.fruitSprites[Math.floor(random(0, this.fruitSprites.length))];
    }
    
    this.DoSplash = function(x,y){
        if(millis() < this.startSplashTime+1000){
             tint(0, 153, 204);
             image(this.splash_sprite,x,y);   
             noTint();
        }else {
            this.startSplashTime = 0;
        }
    }
}
    