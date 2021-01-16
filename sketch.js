
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(150,300,250);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



