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
        console.log("it's a Draw");
        drawCount++;
        return 
    }
    else if ((computerChoice == "rock" && userInput == "paper") || (computerChoice == "paper" && userInput == "scissor") || (
        computerChoice == "scissors" && userInput == "rock")) {
        console.log("User wins");
        userCount++;
        return
    }
    else {
        console.log("Computer wins")
        computerCount++;
        return
    }        
}

function whoWinsGame(){
    if ( userCount == computerCount){
       // console.log("The game it's a Draw");
       return "Draw"
    }
    else if (userCount > computerCount) {
        //console.log("User wins the game");
        return "User"
    }
    else if (userCount < computerCount){
        // console.log("Computer wins the game")
        return "computer"
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
const comparison = document.querySelector('.choice-compare');
const matchWinner = document.querySelector('.match-winner')
const winner = document.querySelector('.who-wins');



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
      button.addEventListener('click', () => {
      userInput = button.textContent.toLowerCase();
      computerPlay();
      comparison.textContent = "Your play:    " + userInput.toUpperCase() +
       "  Computer play: " + computerChoice.toUpperCase();
      whoWins()
      scoreboard.textContent = "Scoreboard:  User " + userCount + " Computer: " + computerCount + " Matches: " + (matchCounter) ;
  
  
      matchCounter++;
  
  
      if (matchCounter == 5){
        whoWinsGame()
        winner.textContent = "the winner is: ";// + whoWinsGame() //important note aparently you cannot return a string
        matchCounter = 0;
        userCount = 0;
        computerCount = 0;
        drawCount = 0;
      }
    });
  });




