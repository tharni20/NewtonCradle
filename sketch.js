
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob3,rope3;
var bob2,rope2;
var bob1,rope1;
var bob4,rope4;
var bob5,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1= new Roof (400,200,300,50);
	bob3= new Bob (400,400,20);
	bob2= new Bob (360,400,20);
	bob1= new Bob (320,400,20);
	bob4= new Bob (440,400,20);
	bob5= new Bob (480,400,20);
	rope3= new Rope (bob3.body,{x:400,y:200});
	rope2= new Rope (bob2.body,{x:360,y:200});
	rope1= new Rope (bob1.body,{x:320,y:200});
	rope4= new Rope (bob4.body,{x:440,y:200});
	rope5= new Rope (bob5.body,{x:480,y:200});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof1.display()
  bob3.display()
  bob2.display()
  bob1.display()
  bob4.display()
  bob5.display()
  rope3.display()
  rope2.display()
  rope1.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}
