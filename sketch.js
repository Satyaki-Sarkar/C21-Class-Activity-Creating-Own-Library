var fixedRect,movingRect,rectOne,rectTwo,rectThree,rectFour;

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400, 400, 50, 50);
  fixedRect.debug=true;
  fixedRect.shapeColor="Green";
  movingRect=createSprite(200,200,40,40);
  movingRect.debug=true;
  movingRect.shapeColor="Green";
  rectOne=createSprite(20,400,50,50);
  rectOne.velocityX=4;
  rectTwo=createSprite(780,400,50,50);
  rectTwo.velocityX=-4;
  rectThree=createSprite(400,780,50,50);
  rectThree.velocityY=-4;
  rectFour=createSprite(400,20,50,50);
  rectFour.velocityY=4;
}

function draw() {
  background("black"); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="Red";
    fixedRect.shapeColor="Red";
  } else{
    movingRect.shapeColor="Green";
    fixedRect.shapeColor="Green";
  }

  bounceOff(rectOne,rectTwo);
  bounceOff(rectThree,rectFour);

  
  drawSprites();
}

