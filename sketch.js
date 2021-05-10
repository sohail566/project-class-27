
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin,ground	
var world;
var paper;

function preload(){
	//paperImage = loadImage("sprites/paper.png");
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(400,680,800,20);
	dustbin=new Dustbin(670,500,150,100);
	paper = new Paper(150,420,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ground.display();
  dustbin.display();
paper.display();  
 drawSprites();
}







function keyPressed(){
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:40})	
	}
}









