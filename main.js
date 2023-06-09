
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const playerWmsg = "You Win!";
const computerWmsg = "You Lose!";
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

function game(number) {
    let computerWins = 0;
    let playerWins = 0;
    let turnCount = number;
    const computerSelection = getComputerChoice();
    for(let i = 0; i < number; i ++) {
        const playerSelection = prompt("Enter rock, paper, or scissors (times: " + turnCount + ")");
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) == 1) {
            computerWins ++;
        }
        else {
            playerWins ++;
        }
        turnCount --;
    }

    if (computerWins > playerWins) {
        alert("You Lose!");
    }
    else if (computerWins == playerWins){
        alert("It's a Tie!");
    }
    else if (computerWins < playerWins) {
        alert("You Win!");
    }
}

game(3);