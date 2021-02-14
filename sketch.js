var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Constraint = Matter.Constraint


var bgImg;
var ball;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10;
var ground;
var band;
var score = 0;
var gameState = "start";
var lives = 3;
//var plag;
//var plagi;
var yahoo;
var boing;
var lost;
  function preload(){
bgImg = loadImage("bowling alley.png");
yay = loadSound("bowling music.wav");
//plagi = loadImage("play again bowling.png");
yahoo = loadSound("score!!.wav");
boing = loadSound("boing.wav");
lost = loadSound("you lose.mp3");
  }

function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;

  yay.loop();
ground = new Ground(350, 680, 700, 10);
//base1 = new Ground(350, 200, 200, 10);
//base2 = new Ground(350, 300, 200, 10);
base3 = new base(350-200, 400+50, 200, 10);
pin1 = new Pin(275-200, 325+50, 50, 75);
pin2 = new Pin(325-200, 325+50, 50, 75);
pin3 = new Pin(375-200, 325+50, 50, 75);
pin4 = new Pin(425-200, 325+50, 50, 75);
pin5 = new Pin(300-200, 225+50, 50, 75);
pin6 = new Pin(360-200, 225+50, 50, 75);
pin7 = new Pin(410-200, 225+50, 50, 75);
pin8 = new Pin(340-200, 125+50, 50, 75);
pin9 = new Pin(390-200, 125+50, 50, 75);
ball = new Ball(600, 350, 50, 50);
band = new SlingShot(ball.body, {x: 600, y: 350})

ledge = new Edge(0, 350, 40, 700);
bedge = new Edge(350, 700, 700, 40);
redge = new Edge(700, 350, 40, 700);
tedge = new Edge(350, 0, 700, 40);




 
}
 


function draw() {
  //background(bgImg);
  Engine.update(engine);
console.log(score);

if(gameState == "start"){
  background("pink");
  textSize(25);
 /* text("Knock as many pins as hard ", 10, 370);
text("as you can down, to increase", 10, 410);
text("your score. Once it's 500, you", 10, 450);
text("win! Press r to get the ball ", 10, 490);
text("back. Press space to start.", 10, 530);
*/


text("Pull on the ball with your mouse to aim, then let go to launch.", 10, 40);
text("Try to knock over as many pins as you can, as hard as you ", 10, 80);
text("can. This will increase your score. After your score reaches ", 10, 120);
text("500, you will win. But, you can only launch the ball 3 times.", 10, 160);
text("To get the ball back after launching, press r. Press space to", 10, 200);
text("start playing!", 10, 240);
//pull on the ball with your mouse to aim, then let go to launch. 
//Try to knock over as many pins as you can, as hard as you can.
//This will increase your score. After your score reaches 500,
//you will win. You can only launch the ball 3 times.
//To get the ball back after launching, press r. Press
//space to start playing!

}
 if(score == 500){
   gameState = "end";
 }
 if(score==499){
   yahoo.play();
 }
 if(gameState == "end"){
 
background("yellow");
fill(0)
textSize(100)
text("YOU WIN!!", 50, 350);
textSize(20);
text("Press P to play again.", 250, 390)

 }

console.log(gameState);
console.log(lives);
 
  if(lives <=0){
    gameState ="lose";
  
  }
  if(gameState == "lose"){
    background("green")
    textSize(100);
    text("YOU LOSE!", 40, 350);
    textSize(20);
    text("Press P to play again.", 250, 390)

  }

  if(gameState == "play"||gameState=="launched"){
  background(bgImg);
  
  ledge.display();
  bedge.display();
  redge.display();
  tedge.display();

 ground.display();
 //base1.display();
 //base2.display();
 base3.display();

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();

  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();

  pin1.score();
  pin2.score();
  pin3.score();
  pin4.score();

  pin5.score();
  pin6.score();
  pin7.score();
  pin8.score();
  pin9.score();
  band.display();
ball.display();
  }


}
function mouseDragged(){
if(gameState=="play"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  if(gameState=="play"){
  band.fly();
  boing.play();
gameState="launched";
  }
}
 
function keyPressed(){
if(keyCode===82&&gameState=="launched"){
    band.attach(ball.body);
gameState="play";
lost.play();

lives = lives-1}

if(keyCode===32&&gameState == "start"){
  gameState = "play";
}




if(keyCode===80&&gameState=="end"){
  gameState="play";
  score=0;
  lives=3;
  band.attach(ball.body);
  pos();
}

if(keyCode===80&&gameState=="lose"){
  gameState="play";
  score=0;
  lives=3;
  band.attach(ball.body);
  pos();
}
}

function pos(){
  /*



pin5 = new Pin(300-200, 225+50, 50, 75);
pin6 = new Pin(360-200, 225+50, 50, 75);
pin7 = new Pin(410-200, 225+50, 50, 75);
pin8 = new Pin(340-200, 125+50, 50, 75);
pin9 = new Pin(390-200, 125+50, 50, 75);
ball = new Ball(600, 350, 50, 50);*/
  Matter.Body.setPosition(pin1.body, {x:275-200, y: 325+50})
  Matter.Body.setPosition(pin2.body, {x:325-200, y: 325+50})
  Matter.Body.setPosition(pin3.body, {x:375-200, y: 325+50})
  Matter.Body.setPosition(pin4.body, {x:475-200, y: 325+50})
  Matter.Body.setPosition(pin5.body, {x:300-200, y: 225+50})
  Matter.Body.setPosition(pin6.body, {x:360-200, y: 225+50})
  Matter.Body.setPosition(pin7.body, {x:410-200, y: 225+50})
  Matter.Body.setPosition(pin8.body, {x:340-200, y: 125+50})
  Matter.Body.setPosition(pin9.body, {x:390-200, y: 125+50})


  Matter.Body.setSize(pin1.body, {x:275-200, y: 325+50})
  Matter.Body.setPosition(pin2.body, {x:325-200, y: 325+50})
  Matter.Body.setPosition(pin3.body, {x:375-200, y: 325+50})
  Matter.Body.setPosition(pin4.body, {x:475-200, y: 325+50})
  Matter.Body.setPosition(pin5.body, {x:300-200, y: 225+50})
  Matter.Body.setPosition(pin6.body, {x:360-200, y: 225+50})
  Matter.Body.setPosition(pin7.body, {x:410-200, y: 225+50})
  Matter.Body.setPosition(pin8.body, {x:340-200, y: 125+50})
  Matter.Body.setPosition(pin9.body, {x:390-200, y: 125+50})
}


