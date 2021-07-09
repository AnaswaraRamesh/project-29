const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  slingShot= new Slingshot(polygon,{x:100,y:200})

  
 

 
  //level one
  block1 = new Block(300,275,30,40);
  // console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
   // level one in 2nd stage
   block20 = new Block(650,175,30,40);
   block21 = new Block(680,175,30,40);
   block22 = new Block(710,175,30,40);
   block23 = new Block(740,175,30,40);
   block24 = new Block(740,175,30,40);

   
   //level2 in 2nd stage
   block25 = new Block(680,135,30,40);
   block26 = new Block(710,135,30,40);
  block27 = new Block(740,135,30,40);
  
   // 3rd
     block28 = new Block(710,95,30,40);
    
   
  
   
   




  

}
function draw() {
  background(56,44,44); 
  Engine.update(engine)

  textSize(20);
  fill("lightyellow");
  
  
  imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  
  
slingShot.display();
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  //1st stage
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 // 2nd stage 
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  
  block28.display();
  

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //2nd
  block25.display();
  block26.display();
  block27.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  block16.display();
  block28.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}