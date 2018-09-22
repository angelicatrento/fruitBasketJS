function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function loadFruitOnCanvas(fruitImage,posX,posY) {
  image(fruitImage, posX, posY);
}

function keyPressed() {
 var direction = '';
 switch (keyCode) {
    case LEFT_ARROW:
      if (direction != 'right') {
        direction = 'left';
      }
      break;
    case RIGHT_ARROW:
      if (direction != 'left') {
        direction = 'right';
      }
      break;
    case UP_ARROW:
      if (direction != 'down') {
        direction = 'up';
      }
      break;
    case DOWN_ARROW:
      if (direction != 'up') {
        direction = 'down';
      }
      break;
  }
  console.log("direction " + direction);
  return direction;
}