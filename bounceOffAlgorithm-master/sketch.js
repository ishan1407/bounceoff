var fixedRect, movingRect;
var go1,go2,go3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //fixedRect.velocityY = +5;

  go1 = createSprite(200,200,30,30);
  go1.shapeColor = "green";
  go1.velocityX = 2;
  go1.velocityY = -2;
  
  go2 = createSprite(400,200,30,30);
  go2.shapeColor = "green";
  go2.velocityX = 2;
  go2.velocityY = -2;
  
  go3 = createSprite(600,200,30,30);
  go3.shapeColor = "green";
  go3.velocityX = -2;
  go3.velocityY = 2;
  
}

function draw() {
  background(0,0,0);  

 movingRect.x = mouseX;
 movingRect.y = mouseY;
  if(bounceoff(go1,go2)){
    go1.velocityX = go1.velocityX * (-1);
    go2.velocityX =  go2.velocityX * (-1);
    go2.velocityY = go2.velocityY * (-1);
    go1.velocityY = go1.velocityY * (-1);
     
  } 
  
  
  drawSprites();
}


function bounceoff(go1,go2){
   if( go1.x - go2Rect.x < go2.width/2 + go2.width/2
    || go2.x - go1.x < go1.width/2 + go2.width/2
    || go1.y - go2.y < go1.height/2 + go2.height/2
    || go1.y - go2.y < go1.height/2 + go2.height/2){
      return true
    } else {
      return false
    }
  

}