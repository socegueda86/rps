function inputValidation (){
    while (true){
        userInput = prompt ("Choose between: Rock, Paper o Scissors","")
        if (typeof userInput != 'string') {
            userInput = "exitSignal";
            return;}

        userInput = userInput.toLowerCase();

        if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
            return userInput;
        }
    }
}

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
function whoWins ( computerChoice, userInput){
    if (computerChoice === userInput){
        drawCount++;
        return 
    }
    else if ((computerChoice == "rock" && userInput == "paper") || (computerChoice == "paper" && userInput == "scissor") || (computerChoice == "scissors" && userInput == "rock")) {
        userCount++;
        return
    }
    else {
        computerCount++;
        return
    }        
}

function whoWinsMatch(){
    if ( userCount == computerCount){
        console.log("it's a Draw");
    }
    else if (userCount > computerCount) {
        console.log("User wins");
    }
    else if (userCount > computerCount){
        console.log("Computer wins")
    }
    else{console.log("something went wrong")}

}


let userInput;
let computerChoice;
let userCount = 0;
let computerCount = 0;
let drawCount = 0;
let playsCounter = 0;

for (let i=0; i < 5; i++ ){
    inputValidation();
    if (userInput == "exitSignal"){break;}
    computerPlay();
    whoWins();
    if (i < 4){
        whoWinsMatch() 
    }
}







