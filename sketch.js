const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygon;
var stand1,stand2;
var block1,block2,bock3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24,block25,block26,block27;
var block28,block29,block30,block31,block32;
var slingShot;
var polygon_img,backgroundImg;
var score = 0;

function preload(){
  getBackgroundImg();
  polygon_img = loadImage("polygon.png");
  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  block1 = new Block(280,290,30,30);
  block2 = new Block(310,290,30,30);
  block3 = new Block(340,290,30,30);
  block4 = new Block(370,290,30,30);
  block5 = new Block(400,290,30,30);
  block6 = new Block(430,290,30,30);
  block7 = new Block(470,290,30,30);

  block8 = new Block(310,260,30,30);
  block9 = new Block(340,260,30,30);
  block10 = new Block(370,260,30,30);
  block11 = new Block(400,260,30,30);
  block12 = new Block(430,260,30,30);
 
  block13 = new Block(340,230,30,30);
  block14 = new Block(370,230,30,30);
  block15 = new Block(400,230,30,30); 
  
  block16 = new Block(370,200,30,30);
 
  block17 = new Block(600,190,30,30);
  block18 = new Block(630,190,30,30);
  block19 = new Block(660,190,30,30);
  block20 = new Block(690,190,30,30);
  block21 = new Block(720,190,30,30);
  block22 = new Block(750,190,30,30);
  block23 = new Block(780,190,30,30);

  block24 = new Block(630,160,30,30);
  block25 = new Block(660,160,30,30);
  block26 = new Block(690,160,30,30);
  block27 = new Block(720,160,30,30);
  block28 = new Block(750,160,30,30);
  
  block29 = new Block(660,130,30,30);
  block30 = new Block(690,130,30,30);
  block31 = new Block(720,130,30,30);

  block32 = new Block(690,100,30,30);

  polygon = Bodies.circle(100,150,20);
  World.add(world,polygon);
  

  slingShot = new Slingshot(this.polygon,{x:100,y:150});

}
function draw() {

  if(backgroundImg)
  {
    background(backgroundImg);
  }  
  textSize(15);
  fill("red");
  text("Drag the Polygon and Release it to launch it towards the blocks",40,340);
  text("SCORE : "+score,350,50);
  text("And Press The SpaceBar To Try Again",50,365);
  rectMode(CENTER);
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score(); 
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
   var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);

   if (hour >= 0600 && hour <= 1900) 
   {
     bg = "light.jpg";
   } 
   else 
   {
     bg = "dark.jpg";
   }

   backgroundImg = loadImage(bg);
   console.log(hour);
}