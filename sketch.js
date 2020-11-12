var bullet,wall,thickness

var speed,weight

function setup() {
  createCanvas(1600,1000);
  bullet=createSprite(50, 200, 50, 50);
  speed = random(223,321)
  wright = random(30,52)
  thickness=random(22,83)
  wall = createSprite(1400,200,thickness,height/2)
  bullet.velocityX=speed;
  
}

function draw() {
  background(255,255,255);  
   if(hasCollided(bullet,wall)){
   bullet.velocityX=0
   var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
   if (damage>10){
     wall.shapeColor=color(255,0,0)
   }
   if (damage<10){
     wall.shapColor=color(0,255,0)
   }}
   


  drawSprites();
}
function hasCollided(object1,object2){
  RightEdge=object1.x +object1.width
  wallLeftEdge=object2.x;
  if (RightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
