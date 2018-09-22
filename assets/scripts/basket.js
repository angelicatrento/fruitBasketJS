function Basket() {
   this.x = 0;
   this.y = 0;
   this.sprite = null; // Basket sprite
   this.speed = 0; 
    
   this.MoveBasket = function() {
       
        if(!keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW)) {
            if(this.speed > -7){
                this.speed-=0.5;
            }
            this.x += this.speed;
        }
        
        if(!keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
            if(this.speed < 7){
                this.speed+=0.5;
            }
            this.x += this.speed;
        }

        if(!keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW))
        {
            this.speed = 0;
        }
        
        
        if (this.x < 5) {
            this.x = 5;    
        }
        
        if(this.x > width - (this.sprite.width + 10)) {
            this.x = width - (this.sprite.width + 10);
        }
                

        image(this.sprite, this.x, this.y);
    } 
   
}