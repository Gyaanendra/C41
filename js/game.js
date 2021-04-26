/*

1. read/ get the gameState of the game --> getState()
2. update the gameState --> update(state)
3. the wait state of the game --> start()

*/


class Game{
    constructor(){
        
    }

    getState(){
    //create a variable called 'gameStateRef' to refer to the database --> database.ref()
    var gameStateRef = database.ref('gameState');

     //create a listener for the varible --> var.on("value", function)
      gameStateRef.on("value", function(data){
          
     //store the listened data inside the gameState
        gameState = data.val();
      });
    }

    update(state){
     //refer to the entire database and update the gameState entry to state
     database.ref('/').update({
      gameState: state
     })
    }

    async wait(){
    if(gameState === 0){
      //create a new player object for the Player class --> objectName = new className();
     player = new Player();

     //update the playerCount once for each player when they are logging in
      var playerCountRef =  await database.ref('playerCount').once("value");

      //if the reference has been done 'once' for each player, update the listened values inside the playerCount variable
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();

      //read the no of players
      player.getCount();

      }

      

      //create a new form object for the Form class
      form = new Form(); 
      
      //display the form
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage(car1Img);
    car2 = createSprite(300,200);
    car2.addImage(car2Img);
    car3 = createSprite(500,200);
    car3.addImage(car3Img);
    car4 = createSprite(700,200); 
    car4.addImage(car4Img);
    cars = [car1,car2,car3,car4]
    }

    play(){   //after all the 4 players have logged in
      //hide the form
      form.hide();

      //get the information of the all the players
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){     //to consider the values from the database (database - defined values == not undefined)   correct = not wrong
      //set the background as the ground's image
       background(groundImg);

       //image(imageVariable,x,y,widht,height)
       image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
        //create an index for [index0,index1,index2,index3]
        var index = 0;      //index = every single item inside the array

        //create variables called 'x' and 'y' to store the position of the cars
        var x = 300;
        var y; 

        for(var i in allPlayers){     //every single player in allPlayers variable
        index = index+1;

        //calculating the x and y positions of the players 
        x = x+250;  
        y = displayHeight-allPlayers[i].distance;

        //assign the x position of the car to x and y position of the car to y
        //car.x = x
        //car --> cars[index-1].x
        cars[index-1].x = x ;
        cars[index-1].y = y ;


        //if car1(index) belongs to player1(player.index) (active player of the screen) that car should be red in color//
        if(index === player.index){
          //car.shapeColor = "red"
          ellipse(x, y, 60 ,60)
          cars[index-1].shapeColor = "green" ;
  
          //fix the camera angle in such a way that the camera's y position moves the car's y position and camera's x position should be in the center of the screen
          camera.position.x = displayWidth/2 ;
          camera.position.y = cars[index-1].y;
          }
        }

    }
  
    if(keyIsDown(UP_ARROW)&& player.index !== null){
    player.distance+=10;
    player.update();
    
    }
    
    //change the gameState to end(2) when the distance of the player is greater than 3900
    if(player.distance > 5200 ){
      gameState = 2 ;
      player.rank+=1 ;
      Player.updatecarsAtEnd(player.rank);
    }

  drawSprites() 

    }

end(){

 console.log("game ended");
console.log(player.rank);
}
  
}

//box1 = new Box()-->