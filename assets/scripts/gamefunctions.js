function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function loadFruitOnCanvas(fruitImage,posX,posY) {
  image(fruitImage, posX, posY);
}

