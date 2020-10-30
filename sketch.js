var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  movingRect = createSprite(500,100,100,50);
  fixedRect = createSprite(500,300,100,50);

 movingRect.debug = true;
 fixedRect.debug = true;
}

function draw() {
  background(255,255,255);  
  

  movingRect.shapeColor = "Blue";
  fixedRect.shapeColor = "Blue";

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  movingRect.velocityY = 3;
  fixedRect.velocityY = -3;

   if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) { 
    movingRect.velocityX = movingRect.velocityX * (-1); fixedRect.velocityX = fixedRect.velocityX * (-1); }
   
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
      fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){ movingRect.velocityY = movingRect.velocityY * (-1); fixedRect.velocityY = fixedRect.velocityY * (-1); }
   
   
    drawSprites();
  }