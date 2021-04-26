const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;

function preload() 
{
   b=loadAnimation("b1.png","b2.png","b3.png");
   bu=loadAnimation("bu1.png","bu2.png","bu3.png");
  
   getBackgroundImg();
  // defaultBackground=loadAnimation("default.png","default1.png","default2.png","default3.png","default4.png","default5.png");
  defaultBackground=loadImage("default.png");
}
function setup()
{
    var canvas = createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;
    butterfly=createSprite(394,545,20,20);
    butterfly.addAnimation("flying",b);
    butterfly.scale=0.1;
    butterfly.velocityX=8;
    butterfly.velocityY=-8;
    bird=createSprite(336,432,20,20);
    bird.addAnimation("flying",b);
    bird.scale=0.20;
    bird.velocityX=5;
    bird.velocityY=-5;
    bird2=createSprite(360,265,20,20);
    bird2.addAnimation("flying",b);
    bird2.scale=0.15;
    bird2.velocityX=5;
    bird2.velocityY=-5;
    bird3=createSprite(160,457,20,20);
    bird3.addAnimation("flying",b);
    bird3.scale=0.15;
    bird3.velocityX=5;
    bird3.velocityY=-5;
    bird4=createSprite(104,108,20,20);
    bird4.addAnimation("flying",b);
    bird4.scale=0.15;
    bird4.velocityX=5;
    bird4.velocityY=-5;
    bird8=createSprite(56,145,20,20);
    bird8.addAnimation("flying",b);
    bird8.scale=0.15;
    bird8.velocityX=5;
    bird8.velocityY=-5; 
    bird9=createSprite(336-500,1432,20,20);
    bird9.addAnimation("flying",b);
    bird9.scale=0.10;
    bird9.velocityX=5;
    bird9.velocityY=-5;
    bird12=createSprite(360-500,1265,20,20);
    bird12.addAnimation("flying",b);
    bird12.scale=0.10;
    bird12.velocityX=5;
    bird12.velocityY=-5;
    bird13=createSprite(160-500,1457,20,20);
    bird13.addAnimation("flying",b);
    bird13.scale=0.10;
    bird13.velocityX=5;
    bird13.velocityY=-5;
    bird14=createSprite(104-500,1108,20,20);
    bird14.addAnimation("flying",b);
    bird14.scale=0.10;
    bird14.velocityX=5;
    bird14.velocityY=-5;
    bird18=createSprite(56-500,1145,20,20);
    bird18.addAnimation("flying",b);
    bird18.scale=0.10;
    bird18.velocityX=5;
    bird18.velocityY=-5; 
    bird21=createSprite(336+200,1832,20,20);
    bird21.addAnimation("flying2",bu);
    bird21.scale=0.10;
    bird21.velocityX=-5;
    bird21.velocityY=-5;
    bird22=createSprite(360+200,465,20,20);
    bird22.addAnimation("flying2",bu);
    bird22.scale=0.10;
    bird22.velocityX=-5;
    bird22.velocityY=-5;
    bird32=createSprite(160+200,657,20,20);
    bird32.addAnimation("flying2",bu);
    bird32.scale=0.10;
    bird32.velocityX=-5;
    bird32.velocityY=-5;
    bird42=createSprite(104+200,308,20,20);
    bird42.addAnimation("flying2",bu);
    bird42.scale=0.10;
    bird42.velocityX=-5;
    bird42.velocityY=-5;
    bird82=createSprite(56+200,345,20,20);
    bird82.addAnimation("flying2",bu);
    bird82.scale=0.10;
    bird82.velocityX=-5;
    bird82.velocityY=-5; 
}
function draw()
{   
 if(backgroundImg)
 {
  background(backgroundImg); 



}
else
{
background(defaultBackground);
}
//default
  Engine.update(engine);
  //text("X"+mouseX+","+"Y"+mouseY,700,100);
  drawSprites();
}
async function getBackgroundImg()
{
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var datetime = responseJSON.datetime
var hour = datetime.slice(11,13);
//through this command we can see the hour in the console window and datetime through which we can find the timming of the sunrise and the sunset and with the help of it we can find the current time of the placeaccording to the link
console.log(hour);
if (hour>=05 && hour<=06)
{
    bg="sunrise1.png";
}
if (hour>=06 && hour<=07)
{
    bg="sunrise2.png";
}
if (hour>=07 && hour<=09)
{
    bg="sunrise3.png";
}
if (hour>=09 && hour<=12)
{
    bg="sunrise4.png";
}
if (hour>=12 && hour<=14)
{
    bg="sunrise5.png";
}
if (hour>=14 && hour<=17)
{
    bg="sunrise6.png";
}
if (hour>=17 && hour<=18)
{
    bg="sunset7.png";
}
if (hour>=18 && hour<=19)
{
    bg="sunset8.png";
}
if (hour>=19 && hour<=20)
{
    bg="sunset9.png";
}
if (hour>=20 && hour<=22)
{
    bg="sunset10.png";
}
if (hour>=22 && hour<=24)
{
    bg="sunset11.png";
}
if (hour>=24 && hour<=00)
{
    bg="sunset12.png";
}
backgroundImg=loadImage(bg);

}