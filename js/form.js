//class className{}
//create the form(input,button,element) 
//display the form --> display()
class Form{
    constructor(){
        //properties --> input/ button/ greeting/ title
        this.title = createElement('h1');
        this.greeting = createElement("h2");
        this.button = createButton("play");
        this.input = createInput("name");
        this.reset = createButton("reset");
    };

    //function to hide the input, button, greeting and title
        hide(){
            this.input.hide();
            this.greeting.hide();
            this.button.hide();
            this.title.hide();
        }


    display(){

        //create the element (title/greeting) var title, var greeting
        this.title.html("Car Racing Game")
        
        this.title.position(displayWidth/2-50,0);

        this.button.position(displayWidth/2+30,displayHeight/2);

        this.input.position(displayWidth/2-40, displayHeight/2-80);
        
        this.reset.position(displayWidth/2,20);

        //arrow--> remove 'function' and add => after the ()
        //to press the button and something to happen --> variable.mousePressed()
        this.button.mousePressed(()=>{
        
            //hide the input and button --> variable.hide()
            this.input.hide();
            this.button.hide();
      
            
            //create a variable called 'name' to store the input given by the user --> input.value()
            player.name = this.input.value();

            //playerCount is increased
            playerCount +=1           // playerCount = playerCount + 1

            player.index = playerCount;         //if you are player 2 to login, there are 2 players in the game

            //update the playerCount in the database
            player.updateCount(playerCount);

            //update the name and distance of the player in the database
            player.update();

            //greet the player with "Hello " + player's name
            this.greeting.html("hello "+ player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
                
        });
        this.reset.mousePressed(()=>{
        player. updateCount(0);
        game. update(0);
        Player.updatecarsAtEnd(0);
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();

        });
    }
}

