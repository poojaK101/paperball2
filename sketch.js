
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, dustbinR;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,35);
	ground = new Ground(800,670,1600,20)
	dustbinR = new Dustbin(1200,650,160,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  paper.display();
  ground.display();
  dustbinR.display();
  drawSprites();

}


function keyPressed() {
	 if (keyCode === UP_ARROW)
	 {
		 Matter.Body.applyForce(paper.body,paper.body.position,{ x:85,y:-105});
		 } 
		}
