const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, ball1, ball2, ball3, ball4, ball5, string1,string2,string3,string4,string5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800,height/4,width/7,20);
	ball1 = new Ball(width/2,height/4+500,20);
	ball2 = new Ball(width/2-40,height/4+500,20);
	ball3 = new Ball(width/2-80,height/4+500,20);
	ball4 = new Ball(width/2+40,height/4+500,20);
	ball5 = new Ball(width/2+80,height/4+500,20);

	string1 = new String(ball1.body,roof.body,0,0);
	string2 = new String(ball2.body,roof.body,-40,0);
	string3 = new String(ball3.body,roof.body,-80,0)
	string4 = new String(ball4.body,roof.body,40,0)
	string5 = new String(ball5.body,roof.body,80,0)
	
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-50,y:-50});
	}
}





