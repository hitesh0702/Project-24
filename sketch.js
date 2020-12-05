
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, side,side1,side2,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,600,10);


side = new Dustbin(550, 620, 20, 100);
side1 = new Dustbin(635, 660, 150, 20);
side2 = new Dustbin(720, 620, 20, 100);
ground = new Ground(400, 680, 800, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper. display();
ground.display();

side.display();
side1.display();
side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}
}

