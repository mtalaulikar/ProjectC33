var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var turn = 0;
var count = 0;
var points = [];
var divisionHeight=300;
var score =0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,10);
  ground2 = new Ground(0,height/2,10,height);
  ground3 = new Ground(width,height/2,10,height);
  

   for (var k = 0; k <=width; k = k + 80) {
     divs = new Divisions(k, height-divisionHeight/2, 10, divisionHeight);

     //divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     divisions.push(divs);
     points.push(divs.points);
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  ground1.display();
  ground2.display();
  ground3.display();
  Engine.update(engine);
  textSize(25);
  fill("white");
  text("Score : " + score, 350,20);
  text("You have only 5 chances to create particles and score maximum points", 2,50);
  strokeWeight(4);
  push();
  stroke("Yellow");
  line(0,480,800,480);
  pop();
     
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(particle != null){
     particle.display();
     if(particle.body.position.y > 760 && gameState === "play") {
        partX = particle.body.position.x;
        index = Math.floor(partX / 80);
        score = score + points[index];
        gameState = "temp";

    }
  }
  if (gameState === "end"){    
    textSize(45);
    fill("red");
    text("GAME OVER", 300,250);
    
  }
}

function mousePressed(){
  count ++;
  console.log(count);
  if (count <= 5){
    gameState = "play";
  }
  else {
    gameState = "end";
 }
  if (gameState !== "end"){
    
    particle = new Particle(mouseX,30,10);
  }
  
  
}