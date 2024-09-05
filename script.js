const body = document.body;

const header = document.createElement("div");
header.textContent = "Let's play some rock, paper, scissors game. The winner will be the one who gets the highest score after playing 5 rounds.";

body.appendChild(header);

const container = document.createElement("div");
container.textContent = "Please select one of the following options:";

body.appendChild(container);

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

const showOption = document.createElement("p");

container.appendChild(showOption);

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click", playGame);
});

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

// function getHumanChoice(){

//     const userChoice = this.textContent;
//     showOption.textContent = userChoice;
//     // if(userChoice.tagName == "button")
//     // {
//     //     screen.textContent = userChoice;
//     // }
//     console.log(userChoice); 
//     return userChoice;

// }

/* Declaration of two variables that will be receiving the return values from getComputerChoice and getHumanChoice functions */ 

// const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

/* This function allows to play the game by 5 rounds, keeps track of the scores(human and computer) and declares a winner at the end or a draw if apply */

function playGame(humanChoice, computerChoice){

    let humanScore = 0;
    let computerScore = 0;

    const userChoice = this.textContent;
    showOption.textContent = userChoice;

    console.log(userChoice);

    humanChoice = userChoice;

    computerChoice = getComputerChoice();

    console.log("Please select your option");

    // let round = 1;

    // while(round<=5){

        //console.log("%cThis is round number #" + round, "color: blue");
        //const showRound = document.createElement("p");
        const showWinner = document.createElement("p");
        const showUser = document.createElement("p");
        const showPC = document.createElement("p");
        const showUserScore = document.createElement("p");
        const showPcScore = document.createElement("p");
        const showFinalWinner = document.createElement("p");
        //showRound.textContent = "This is round number: " + round;
        //container.appendChild(showRound);  
        container.appendChild(showWinner);
        container.appendChild(showUser);  
        container.appendChild(showPC);
        container.appendChild(showUserScore);  
        container.appendChild(showPcScore);
        container.appendChild(showFinalWinner);             

        if(humanChoice==="Rock" && computerChoice==="Scissors"){
        console.log("%cYou win! Rock beats Scissors", "color: lime");
        console.log("");
        showWinner.textContent = "You win! Rock beats Scissors";
        humanScore++;
        }

        else if(humanChoice==="Rock" && computerChoice==="Paper"){
        console.log("%cYou lose! Paper beats Rock", "color: red");
        console.log("");
        showWinner.textContent = "You lose! Paper beats Rock";
        computerScore++;
        }

        else if(humanChoice==="Paper" && computerChoice==="Rock"){
        console.log("%cYou Win! Paper beats Rock", "color: lime");
        console.log("");
        showWinner.textContent = "You Win! Paper beats Rock";
        humanScore++;
        }

        else if(humanChoice==="Paper" && computerChoice==="Scissors"){
        console.log("%cYou lose! Scissors beats Paper", "color: red");
        console.log("");
        showWinner.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        }

        else if(humanChoice==="Scissors" && computerChoice==="Paper"){
        console.log("%cYou Win! Scissors beats Paper", "color: lime");
        console.log("");
        showWinner.textContent = "You Win! Scissors beats Paper";
        humanScore++;
        }

        else if(humanChoice==="Scissors" && computerChoice==="Rock"){
        console.log("%cYou lose! Rock beats Scissors", "color: red");
        console.log("");
        showWinner.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        }

        else{
        console.log("This is a draw! Nobody wins")
        console.log("");
        showWinner.textContent = "This is a draw! Nobody wins";
        }

        console.log("Your choice was: " + humanChoice);
        showUser.textContent = "Your choice was: " + humanChoice;

        console.log("The choice from computer was: " + computerChoice);
        showPC.textContent = "The choice from computer was: " + computerChoice;

        console.log("");
    
        console.log("Your score is: " + humanScore);
        showUserScore.textContent = "Your score is: " + humanScore;
    
        console.log("Score for computer is: " + computerScore);
        showPcScore.textContent = "Score for computer is: " + computerScore;

        console.log("");

    //     round++;

    //     if(round===6){

    //         if(humanScore>computerScore){
    //             console.log("%cCongratulations. You are the winner!", "color: lime");
    //             showFinalWinner.textContent = "Congratulations. You are the winner!";
    //         } else if(humanScore<computerScore){
    //             console.log("%cYou lost. Please try again.", "color: red")
    //             showFinalWinner.textContent = "You lost. Please try again.";
    //         } else {
    //             console.log("This is a draw. Try again.")
    //             showFinalWinner.textContent = "This is a draw. Try again.";
    //         }

    //     } else {
    //         humanChoice = getHumanChoice();
    //         computerChoice = getComputerChoice();
    //     }

    // }

}

//playGame(humanSelection, computerSelection);













