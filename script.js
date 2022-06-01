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
function whoWins (){
    if (userInput === computerChoice){
        drawCount++;
        console.log("whowhins FX if, computer", computerChoice, userInput)
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
    if ( computerChoice == computerCount){
        console.log("it's a Draw");
    }
    else if (userCount > computerCount) {
        console.log("User wins");
    }
    else if (userCount > computerCount){
        console.log("Computer wins")
    }
    else{console.log("something went wrong")}

    pruebaMod = "This only to see if the function can affect a Global variable"

}


let userInput;
let computerChoice;
let userCount = 0;
let computerCount = 0;
let drawCount = 0;
let playsCounter = 0;

let pruebaMod; // ("This only to see if the function can affect a Global variable")

for (let i=0; i < 5; i++ ){
    inputValidation();
    if (userInput == "exitSignal"){break;}
    computerPlay();
    whoWins(userCount, computerCount);
    if (i = 4){
        whoWinsMatch() 
    }
}








