const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var ground;
var obj;
var squar;

function setup()
 {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,160,50,100);

  ground = new Ground(600,370,1200,60);

}


function draw() {
  background("lightblue");  
  Engine.update(engine);
  box1.display();
  box2.display();
  
  ground.display();
}