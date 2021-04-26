/*

1. read/ get the no. of players in the game --> getCount()
2. update the playerCount in the database --> updateCount(count)
3. update the name and distance of the player in the database --> update()
4. to store the information (name & distance) of all the players inside a variable called 'allPlayers'
*/

class Player{
    constructor(){
        //propoerties --> name, distance, index (p1,p2,p3,p4)
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    };

    getCount(){
    //create a variable called 'playerCountRef' to refer to the database --> database.ref()
    var playerCountRef = database.ref('playerCount')

    //create a listener for the varible --> var.on("value", function)
    playerCountRef.on("value",(data)=>{

    //store the listened data inside the playerCount
    playerCount = data.val();
    })
    }

    updateCount(count){
    //refer to the entire database and update the playerCount entry to count
    database.ref('/').update({
        playerCount: count
    })
    }

    update(){
    var playerIndex = "players/player"+this.index;

    //refer to the database and update the name and distance for each player
    database.ref(playerIndex).set({
        name:this.name,
        distance: this.distance
    })
    }

   static getPlayerInfo(){
    //create a variable called 'playerInfoRef' to refer to the database --> database.ref()
    var playerInfoRef = database.ref('players')

    //create a listener for the varible --> var.on("value", function)
    playerInfoRef.on("value",(data)=>{

    //store the listened data inside the allPlayers
    allPlayers = data.val();
    })
    }

    //to get the number of players at the end --> getCarsAtEnd()
    getCarsAtEnd(){
        // to refer to the database and create a listener--> database.ref()
         database.ref('carsAtEnd').on("value", (data)=>{
         this.rank = data.val()
         });
    

        }
    
        static updatecarsAtEnd(rank){
        //refer to the entire database and update the carsAtEnd entry to rank
        database.ref('/').update({
            carsAtEnd: rank 
        })
        }
}


//sprites - bird.png --> "sprites/bird.png"
//in the db --> playerCount , gameState , players (holding more than one object is called static)
/*
players --> 
player1 --> name: & distance:
player2--> 
*/

