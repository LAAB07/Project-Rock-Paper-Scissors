/* This function calculates a random number with Math.random and use it to return rock, paper or scissors with if-else conditions */

function getComputerChoice(){

    let option = Math.floor(Math.random() * 100);

    if(option <=33){
        return "Rock";
    }
    else if(option <= 66){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}

/* This function gets the option from the user using the prompt method and apply some validations for the input in order to get a correct option */

function getHumanChoice(){

    let userChoice;

    userChoice = prompt("Please choice your option.\nRock? Paper? Scissors?\nYou can type UPPERCASE, lowercase or Capitalized Case");

    if (userChoice === null || userChoice === "" || userChoice === undefined){
            alert("You must enter a valid option into the prompt box!\nCannot be empty");
            return getHumanChoice();
    } else if (!/^[a-zA-Z]+$/.test(userChoice)){
            alert("Please only use letters!\nYour input was: " + userChoice);
            return getHumanChoice();
    } else {
            let userChoiceFix = userChoice.at(0).toUpperCase() + userChoice.slice(1).toLowerCase();
            if (userChoiceFix === "Rock" || userChoiceFix === "Paper" || userChoiceFix === "Scissors"){
                return userChoiceFix;
            } else {
                alert("You must enter a valid option into the prompt box!\nYour input was: " + userChoiceFix);
                return getHumanChoice();    
            }

    }

}

/* Declaration of two variables that will be receiving the return values from getComputerChoice and getHumanChoice functions */ 

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

/* This function allows to play the game by 5 rounds, keeps track of the scores(human and computer) and declares a winner at the end or a draw if apply */

function playGame(humanChoice, computerChoice){

    let humanScore = 0;
    let computerScore = 0;

    let round = 1;

    while(round<=5){

        console.log("This is round number #" + round);

        if(humanChoice==="Rock" && computerChoice==="Scissors"){
        console.log("You win! Rock beats Scissors");
        console.log("");
        humanScore++;
        }

        else if(humanChoice==="Rock" && computerChoice==="Paper"){
        console.log("You lose! Paper beats Rock");
        console.log("");
        computerScore++;
        }

        else if(humanChoice==="Paper" && computerChoice==="Rock"){
        console.log("You Win! Paper beats Rock");
        console.log("");
        humanScore++;
        }

        else if(humanChoice==="Paper" && computerChoice==="Scissors"){
        console.log("You lose! Scissors beats Paper");
        console.log("");
        computerScore++;
        }

        else if(humanChoice==="Scissors" && computerChoice==="Paper"){
        console.log("You Win! Scissors beats Paper");
        console.log("");
        humanScore++;
        }

        else if(humanChoice==="Scissors" && computerChoice==="Rock"){
        console.log("You lose! Rock beats Scissors");
        console.log("");
        computerScore++;
        }

        else{
        console.log("This is a draw! Nobody wins")
        console.log("");
        }

        console.log("Your choice was: " + humanChoice);

        console.log("The choice from computer was: " + computerChoice);

        console.log("");
    
        console.log("Your score is: " + humanScore);
    
        console.log("Score for computer is: " + computerScore);

        console.log("");

        round++;

        if(round===6){

            if(humanScore>computerScore){
                console.log("Congratulations. You are the winner!")
            } else if(humanScore<computerScore){
                console.log("You lost. Plase try again.")
            } else {
                console.log("This is a draw. Try again.")
            }

        } else {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
        }

    }

}

console.log("Lets play some rock, paper, scissors game. The winner will be the one who gets the highest score after playing 5 rounds");

console.log("");

playGame(humanSelection, computerSelection);






