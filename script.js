/* This function calculates a random number with Math.random and 
use it to returns rock, paper or scissors with if else
conditions */

function getComputerChoice(){

    let option = Math.floor(Math.random() * 100);

    if(option <=33){
        // option = "Rock";
        return option + "-Rock";
    }
    else if(option <= 66){
        // option = "Paper";
        return option + "-Paper";
    }
    else{
        // option = "Scissors";
        return option + "-Scissors";
    }

}

console.log(getComputerChoice());

