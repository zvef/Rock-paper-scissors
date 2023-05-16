
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerWins;
let playerWins;
let number = Math.floor(Math.random()*3);

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
        return 1
    }
    else if (playerSelection == paper && computerSelection == scissors) {
        return 1
    }
    else if (playerSelection == scissors && computerSelection == rock) {
        return 1
    }
    else {
        return 0
    }
}

function game() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter rock, paper, or scissors");
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) == 1) {
        alert("Computer wins");
    }
    else {
        alert("Player wins");
    }
}

game();