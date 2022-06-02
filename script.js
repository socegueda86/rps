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
        console.log("The game it's a Draw");
    }
    else if (userCount > computerCount) {
        console.log("User wins the game");
    }
    else if (userCount < computerCount){
        console.log("Computer wins the game")
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



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      userInput = button.textContent.toLowerCase();
      computerPlay();
      whoWins()
      matchCounter++;
      if (matchCounter == 4){
        whoWinsGame()
        matchCounter = 0; 
      }
    });
  });



/*for (let i = 0; i < 5; i++ ){
    inputValidation();
  //  if (userInput == "exitSignal"){break;}*/
    /*computerPlay();
    whoWins(userCount, computerCount);
    
  //  }
//}



/* The program already works, I need to add the console.log() elements that
 show the scoreboard and the winer each iteration*/




