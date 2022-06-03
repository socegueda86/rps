//computerPlay function was copied from past exercise
function computerPlay () { 

        switch (Math.floor(Math.random()*3+1)) {
        case 1 :
            computerChoice = "rock";
            break;
        case 2 :
            computerChoice = "paper";
            break;
        case 3 :
            computerChoice = "scissors";
            break;
    }
}

//whoWins Fx was copied from other exercise
function whoWins (){
    
    if (userInput == computerChoice){
        drawCount++;
        return "it's a Draw";
    }
    else if ((computerChoice == "rock" && userInput == "paper") || (computerChoice == "paper" && userInput == "scissor") || (
        computerChoice == "scissors" && userInput == "rock")) {
        userCount++;
        return "User wins";
    }
    else {
        computerCount++;
        return "Computer wins"
    }        
}

function whoWinsGame(){
    if ( userCount == computerCount){
       // console.log("The game it's a Draw");
       return "It's a Draw"
    }
    else if (userCount > computerCount) {
        //console.log("User wins the game");
        return "User wins"
    }
    else if (userCount < computerCount){
        // console.log("Computer wins the game")
        return "Computer wins"
    }
    else{
        console.log("something went wrong")
        
    }
}





let userInput;
let computerChoice;
let userCount = 0;
let computerCount = 0;
let drawCount = 0;
let matchCounter = 0;

const scoreboard = document.querySelector('.scoreboard');
const comparisonUser = document.querySelector('.choice-compare #user');
const comparisonComp = document.querySelector('.choice-compare #computer');
const matchWinner = document.querySelector('.match-winner')
const winner = document.querySelector('.who-wins');



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
      button.addEventListener('click', () => {
      if (drawCount == 0) {winner.textContent = "";} // This will make the counter back to blank after the 5th game
      userInput = button.textContent.toLowerCase();
      computerPlay();
      matchWinner.textContent = whoWins();
      comparisonUser.textContent = "Your play: " + userInput.toUpperCase() 
      comparisonComp.textContent = "Computers play: " + computerChoice.toUpperCase();
      
      scoreboard.textContent = "Scoreboard:  User " + userCount + " Computer: " + 
      computerCount + " Draws: "+ drawCount + " Matches: " + (matchCounter + 1) ;
  
  
      matchCounter++;
  
  
      if (matchCounter == 5){
        whoWinsGame()
        console.log(whoWinsGame() + "test")
        winner.textContent = whoWinsGame();// + whoWinsGame() //important note aparently you cannot return a string
        matchCounter = 0;
        userCount = 0;
        computerCount = 0;
        drawCount = 0;
                
      }
    });
  });




