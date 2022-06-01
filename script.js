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

let userInput;

