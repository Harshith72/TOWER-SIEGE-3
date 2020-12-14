//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine,userWorld;
var ground, ground1, ground2;
var bg;
var polygon, p1; 
var tree1, tree2;
var block1, block2, block3, block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20, block21, block22,block23,block24,block25 ;
;
var slingShot;
var score = 0;

//Create Media library and load to use it during the course of the software 
//executed only once at the start of the program 
function preload() {
  p1 = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200, 800);

  userEngine = Engine.create();
  userWorld = userEngine.world;
  //object name = new Classname(constructor call)
  ground = new Ground(600,800,1200,20);

  ground1 = new Ground(580,600,300,10);
  ground2 = new Ground(1000,400,200,10);


  block1 = new BlockB(490,590,30,40);
  
  block2 = new BlockB(520,590,30,40); 
  block3 = new BlockB(550,580,30,40);
  block4 = new BlockB(580,580,30,40);
  block5 = new BlockB(610,580,30,40);
  block6 = new BlockB(640,580,30,40);  
  block7 = new BlockB(670,580,30,40);  

  block8 = new BlockA(520,570,30,40);
  block9 = new BlockA(550,570,30,40); 
  block10 = new BlockA(580,570,30,40);
  block11 = new BlockA(610,570,30,40);
  block12 = new BlockA(640,570,30,40);

  block13 = new BlockC(550,560,30,40);
  block14 = new BlockC(580,560,30,40);
  block15 = new BlockC(610,560,30,40);

  block16 = new BlockD(580,550,30,40);

  block17 = new BlockD(940,390,30,40);
  block18 = new BlockD(970,390,30,40);
  block19 = new BlockD(1000,390,30,40);
  block20 = new BlockD(1030,390,30,40);
  block21 = new BlockD(1060,390,30,40);

  block22 = new BlockC(970,380,30,40);
  block23 = new BlockC(1000,380,30,40);
  block24 = new BlockC(1030,380,30,40);


  block25 = new BlockA(1000,370,30,40);
 

  polygon = Bodies.circle(50,200,30);
  World.add(userWorld,polygon);

  slingShot = new SlingShot(polygon,{x:180,y:530});
 
}

function draw(){
    background("white");
    Engine.update(userEngine);
    noStroke();
    textSize(20);
    fill("black");
    text("SCORE :" + score, 650, 40);
    
    ground.display();
    ground1.display();
    ground2.display();

    block1.score();                                                                              
    block1.display();
    block2.score();
    block2.display();
    block3.score();
    block3.display();
    block4.score();
    block4.display();
    block5.score();
    block5.display();
    block6.score();
    block6.display();
    block7.score();
    block7.display();
    
    block8.score();
    block8.display();
    block9.score();
    block9.display();
    block10.score();
    block10.display();
    block11.score();
    block11.display();
    block12.score();
    block12.display(); 

    block13.score();
    block13.display();
    block14.score();
    block14.display();
    block15.score();
    block15.display(); 

    block16.score();
    block16.display();

    block17.score();
    block17.display();
    block18.score();
    block18.display();
    block19.score();
    block19.display();
    block20.score();
    block20.display();
    block21.score();
    block21.display();

    block22.score();
    block22.display();
    block23.score();
    block23.display();
    block24.score();
    block24.display();

    block25.score();
    block25.display();

    imageMode(CENTER);
    image(p1,polygon.position.x,polygon.position.y,40,40);
    image.depth = slingShot.depth +1
    slingShot.display();
  

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode = 32){
    Matter.Body.setPosition(this.polygon,{x:180,y:530});
    slingShot.attach(this.polygon);
  }
}
function getBackgroundImg(){
  var response =  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON =  response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "white";
  }
  else{
      bg = "black";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}



