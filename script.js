let humanScore = 0;
let computerScore = 0;

/* This function calculates a random number with Math.random and 
use it to returns rock, paper or scissors with if else
conditions */

function getComputerChoice(){

    let option = Math.floor(Math.random() * 100);

    if(option <=33){
        // option = "Rock";
        return "Rock";
    }
    else if(option <= 66){
        // option = "Paper";
        return "Paper";
    }
    else{
        // option = "Scissors";
        return "Scissors";
    }

}

// console.log(getComputerChoice());

/* This function gets the option from the user using the prompt method */

function getHumanChoice(){

    let userChoice = prompt("Please choice your option: rock? paper? scissors?");
    return userChoice;

}

// console.log(getHumanChoice());

console.log(humanScore);

console.log(computerScore);


function playRound(humanChoice, computerChoice){

    if(humanChoice==="Rock" && computerChoice==="Scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }

    else if(humanChoice==="Rock" && computerChoice==="Paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }

    else if(humanChoice==="Paper" && computerChoice==="Rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }

    else if(humanChoice==="Paper" && computerChoice==="Scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }

    else if(humanChoice==="Scissors" && computerChoice==="Paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }

    else if(humanChoice==="Scissors" && computerChoice==="Rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }

    else{
        console.log("This is a draw! Nobody wins")
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("The choice from user was: " + humanSelection);

console.log("The choice from computer was: " + computerSelection);

console.log("Score for user is: " + humanScore);

console.log("Score for computer is: " + computerScore);



