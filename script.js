let humanScore = 0;
let computerScore = 0;

/* This function calculates a random number with Math.random and 
use it to return rock, paper or scissors with if else conditions */

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

    let userChoice;

    userChoice = prompt("Please choice your option.\nRock? Paper? Scissors?\nYou can type UPPERCASE, lowercase or Capitalized Case");
    
    // console.log(userChoice);

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

// console.log(getHumanChoice());

// console.log(humanScore);

// console.log(computerScore);

/* This function gets the human's choice and the computer's choice and
declares a winner from both and finally increments the winner's score. If
this is a draw, nobody wins and consequently, the score still remain the same */


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

console.log("Your choice was: " + humanSelection);

console.log("The choice from computer was: " + computerSelection);

console.log("Your score is: " + humanScore);

console.log("Score for computer is: " + computerScore);



