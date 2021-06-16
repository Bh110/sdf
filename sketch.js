var spacecraft,iss,hasDocked;

function preload(){
  backgroundImage=loadImage( "spacebg.jpg");
  s1=loadImage( "spacecraft1.png")
  s2=loadImage ("spacecraft2.png")
  s3=loadImage ("spacecraft3.png")
  s4=loadImage ("spacecraft4.png");
  issImg=loadImage( "iss.png");
}
function setup() {
  createCanvas(800,800);
  background=createSprite( 400,200);
  background.x = background.width/2;
background.addImage("spacebg.jpg", backgroundImage);

hasDocked="false";

 spacecraft=createSprite(400, 350, 50, 50);
spacecraft.addImage(s1);
 spacecraft.scale=0.2;

 iss=createSprite(300, 100, 50, 50);
iss.addImage(issImg);
iss.scale=0.4;
 

}
function draw() {
  
background.velocityX = -4;
if (background.x < 0) { background.x=background.width/2;
}  
  if( !hasDocked){
    spacecraft.x=Math.round(random( 100,200));
  }
  
  if (keyDown("LEFT_ARROW")){
    
    spacecraft.velocityX= -1;
    spacecraft.velocityY=0;
    spacecraft.addImage(s3);
  
  }
  spacecraft.velocityX+=1;
  if (keyDown("RIGHT_ARROW")){
    spacecraft.velocityX= 12;
    spacecraft.velocityY=0;
    spacecraft.addImage(s4);
  }
  spacecraft.velocityX+= -1;
  if (keyDown("DOWN_ARROW")){
    spacecraft.addImage(s2);
  }
  if (keyDown("UP_ARROW")){
  spacecraft.velocityX=0;
    spacecraft.velocityY= -1;
    spacecraft.addImage(s2);
  }

  if(spacecraft.isTouching(iss)){
hasDocked=true;
textSize(20);
text("DOCKING SUCCESSFUL!!",200,300 )
  }
  drawSprites();
}