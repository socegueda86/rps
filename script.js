function inputValidation (){
    while (true){
        userInput = prompt ("Choose between: Rock, Paper o Scissors","")
        if (typeof userInput != 'string') return;

        userInput = userInput.toLowerCase();

        if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
            return userInput;
        }
    }
}

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

function whoWins ( computerChoice, userInput){
    if (computerChoice === userInput){
        return "Draw";
    }
    else if ((computerChoice == "rock" && userInput == "paper") || (computerChoice == "paper" && userInput == "scissor") || (computerChoice == "scissors" && userInput == "rock")) {
        return "User Wins";
    }
    else {
        return "computer wins";
    }        
}


let userInput;
let computerChoice;
let userCount;
let computerCount;
let drawCount;
