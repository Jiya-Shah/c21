var fixedrect, movingrect, box

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 20, 100, 50);
  box=createSprite(140, 120, 70, 50);

  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
  box.shapeColor="green"
}

function draw() {
  background(255,255,255); 
movingrect.x=mouseX
movingrect.y=mouseY
if(isTouching(box,movingrect)){
  movingrect.shapeColor="yellow"
  box.shapeColor="yellow"
}
else{
  movingrect.shapeColor="green"
  box.shapeColor="green"
}




  drawSprites();
}

