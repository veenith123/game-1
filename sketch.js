const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const {  Mouse, MouseConstraint } = Matter;

let mConstraint;
let bird;
let dotImg;

var engine, world;
var canvas, backgroundImage;
var polygon,ground;
var polygon,polygon1;
var slingShot,slingShot1;
var polygon_img,polygon1_img;

var gameState = 0;
var playerCount = 0;
var score = 0;
var name = "";

var database;
var allPlayers,players;
var player1,player2;
var form, player, game;
var brackgroundImg;
var bg1_img, bg2_img;
var slings;
var sling1,sling2,sling3;
var slinga,slingb,slingc;

var sling1_img,sling2_img,sling3_img;
var slinga_img,slingb_img,slingc_img;
var ground1;
var gamebg1,gamebg1_img;
var grass,grass1,board,board1,wood,wood1;
var grass_img,grass1_img,board_img,board1_img,wood_img,wood1_img;

var tanks;
var tankGroup;
var tank1,tank2,tank3,tank4,tank5,tank6,tank7;
var tank1_img,tank2_img,tank3_img,tank4_img,tank5_img,tank6_img,tank7_img;
var score1 = 0, score2 = 0;
var blank,blank_img;
var mushroom1,mushroom2,mushroom3,mushroom4,mushroom5,mushroom6,mushroom7,mushroom8;
var mushroom1_img,mushroom2_img,mushroom3_img,mushroom4_img,mushroom5_img,mushroom6_img,mushroom7_img,mushroom8_img;
var ground1,ground2;
var smoke,smoke_Image;
var ship,ship_img;
var shooter1,shooter2;
var shooter1_img,shooter2_img;
var player1,player2;
var bomb1,bomb_img;
var bomb2;
var gameend,gameend_img;
let confettiColor = [], confetti = [];
let Americancaptain;
function preload() {
  //images
bg1_img = loadImage("images/Formbg.png");
bg2_img = loadImage("images/Gamebg.png");
gameend_img = loadImage("images/gameend.png");

bomb_img = loadImage("images/bomb.png");

player_img = loadImage("images/shooter.png");

ship_img = loadImage("images/ship.png")

sling1_img = loadImage("images/sling1.png");
sling2_img = loadImage("images/sling2.png");
sling3_img = loadImage("images/sling3.png");
slinga_img = loadImage("images/sling1.png");
slingb_img = loadImage("images/sling2.png");
slingc_img = loadImage("images/sling3.png");

dotImg = loadImage("images/dot.png");
gamebg1_img = loadImage("images/gamebg1.png");
blank_img = loadImage("images/blank.png");

grass_img = loadImage("images/Bush1.png");
grass1_img = loadImage("images/Bush1.png");
board_img = loadImage("images/Sign1.png");
board1_img = loadImage("images/Sign1.png");
wood_img = loadImage("images/wood1.png");
wood1_img = loadImage("images/wood1.png");

tank1_img = loadImage("images/tank1.png");
tank2_img = loadImage("images/tank2.png");
tank3_img = loadImage("images/tank3.png");
tank4_img = loadImage("images/tank4.png");
tank5_img = loadImage("images/tank5.png");
tank6_img = loadImage("images/tank6.png");
tank7_img = loadImage("images/tank7.png");
mushroom1_img = loadImage("images/mushroom1.png");
mushroom2_img = loadImage("images/mushroom2.png");
mushroom3_img = loadImage("images/mushroom3.png");
mushroom4_img = loadImage("images/mushroom4.png");
mushroom5_img = loadImage("images/mushroom5.png");
mushroom6_img = loadImage("images/mushroom6.png");
mushroom7_img = loadImage("images/mushroom7.png");
mushroom8_img = loadImage("images/mushroom8.png");
tankGroup = new Group();

//sounds
button = loadSound("sounds/button.mp3");
flying1 = loadSound("sounds/flying1.mp3");
flying2 = loadSound("sounds/flying2.mp3");
flying3 = loadSound("sounds/flying3.mp3");
flying4 = loadSound("sounds/flying4.mp3");
flying5 = loadSound("sounds/flying5.mp3");
flying6 = loadSound("sounds/flying6.mp3");
maintheme = loadSound("sounds/maintheme.mp3");
destroybird1 = loadSound("sounds/destroybird1.mp3");
destroybird2 = loadSound("sounds/destroybird2.mp3");
gamebgsound1 = loadSound("sounds/gamebgsound1.mp3");
gamebgsound2 = loadSound("sounds/gamebgsound2.mp3");
gamecomplete = loadSound("sounds/gamecomplete.mp3");
}

function setup(){
  canvas = createCanvas(1536,860);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  ground1 = new Ground();
  ground2 = new Ground();
  confettiColor = [color('#00aeef'), color('#ec008c'), color('#72c8b6')];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
  }
  database = firebase.database();
  game = new Game();  
  game.getState();
  game.start();
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}


function draw(){
background(bg1_img);
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
if(gameState === 2){
  game.end();
}
if (player.score === 50){
  for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();
  
    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }
}
  //ground1.display();
  //ground2.display();
}
//function keyPressed() {
 // if (key == ' ') {
 // }
//}
//function keyPressed(){
  //if(keyCode === 32){
    //  slingShot.attach(this.polygon);
      //slinga1.attach(this.polygon1);
  //}
//}