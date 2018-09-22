function Basket(){
   this.x = 0;
   this.y = 0;
   this.sprite = null; // Basket sprite
   this.direction = 0;
   this.speed = 5; //(this.sprite.width/10)
    
   this.MoveBasket = function()
   {
        if(keyIsDown(LEFT_ARROW))
        {
            this.direction -= 1;
        }
             
        
        if(keyIsDown(RIGHT_ARROW))
        {
          this.direction += 1;
        }
        
        this.x = this.direction * this.speed;
        
        if (this.x < 5)
        {
            this.x = 5;    
        }
        
        if(this.x > width - (this.sprite.width + 10))
        {
            this.x = width - (this.sprite.width + 10);
        }
                

        image(this.sprite, this.x, this.y);
    } 
   
}

/*
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
*/