var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, thickness, height/2);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,33);
    bullet = createSprite(50,200,50,5);
    bullet.shapeColor="white";
}

function draw() {
  background(0);
        bullet.collide(wall);
        bullet.velocityX=speed;
      if(wall.x-bullet.x<(bullet.width+wall.width/2)){
        bullet.velocityX=0;
        var deformation=0.5*weight*speed*speed/22509;}
        if(deformation>10){
          wall.shapeColor=color(250,0,0);
        }
        if(deformation<3&&deformation>10){
          wall.shapeColor=color(230,230,0);
        }
        if(deformation<4){
          wall.shapeColor=color(0,255,0);
        }
      
    





  drawSprites();
}