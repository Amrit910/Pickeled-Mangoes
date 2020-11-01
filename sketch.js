var tree, ground;
var boy, stone;
var mango1, mango2;
var mango3, mango4, mango5;
var mango6;

boy = createSprite(73, 363, 10, 20);
stone = createSprite(87, 349, 10, 10);

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

detectcollision(stoneobj,mango1);
detectcollision(stoneobj,mango2);
detectcollision(stoneobj,mango3);
detectcollision(stoneobj,mango4);
detectcollision(stoneobj,mango5);
detectcollision(stoneonj,mango6);

function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneobj.Body, {x:235, y:420})
		lancherObject.attach(stoneobj.Body);
	}
}

function detectcollision(Lstone, Lmango){
	mango5.body.position-mango.body.position;
	stone.body.position-stone.body.position;

	var distance-dist(stonebodyposition.x, stonebodyposition.y, mangobodyposition.x, mangobodypositiony);
	if(distance<-mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}

boy.display();
mango1.display();
stone.display();
tree.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();