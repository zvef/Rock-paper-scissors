
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

number = Math.floor(Math.random()*3);

function getComputerChoice() {
    if(number == 0){
        return rock;
    }
    else if(number == 1){
        return paper;
    }
    else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == rock && computerSelection == paper) {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection == paper && computerSelection == scissors) {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection == scissors && computerSelection == rock) {
        return "You Lose! Rock beats Scissors"
    }
    else {
        return "You Win!"
    }
}

const playerSelection = paper;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

