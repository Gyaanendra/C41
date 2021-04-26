var canvas;
var gameState = 0;
var playerCount ;
var form , game, player;      //objects of the classes
var database;
var allPlayers;         //store the info of all the 4 players
var car1,car2,car3,car4,cars;
var car1Img, car2Img,  car3Img, car4Img, groundImg, trackImg;

function preload(){
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    groundImg = loadImage("images/ground.png");
    trackImg = loadImage("images/track.jpg");

}

function setup(){
//creating the canvas - 400 x 400 --> createCanvas(400,400)
 canvas = createCanvas(displayWidth,displayHeight);

//create the database inside the variable 'database' --> firebase.database()
database =  firebase.database();
game = new Game();
game.getState();
game.wait();
}

function draw(){
//if the number of players (player count) are 4, then update the gameState to 1
if(playerCount === 4){
game.update(1);
}

//to call the play function when the gameState === 1
if(gameState === 1){
clear()
game.play()

}

//to call the end() function when the gameState === 2
if(gameState === 2 ){
  game.end();
}

}