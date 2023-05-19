//STRING VARIABLES
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

//WIN MESSAGES
const playerWmsg = "You Win!";
const computerWmsg = "You Lose!";
let number = Math.floor(Math.random()*3);

//BUTTON VARIABLES
const rockButton = document.querySelector('#butt1');
const paperButton = document.querySelector('#butt2');
const scissorsButton = document.querySelector('#butt3');

//COMPUTER SELECTION VARIABLE
const computerSelection = getComputerChoice();

//SCORE DISPLAY VARIABLES
let playerScoreDisplay = document.querySelector('.result');
let computerScoreDisplay = document.querySelector('.result2');

//TEST SCORE VARIABLES
let playerScore = 0;
let computerScore = 0;

//BUTTON CLICKS
rockButton.onclick = () => {
    playRound(rock, computerSelection);
}
paperButton.onclick = () => {
    playRound(paper, computerSelection);
}
scissorsButton.onclick = () => {
    playRound(scissors, computerSelection);
}


//GAME FUNCTIONS
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
        // return 1
        updateComputerScore();
    }
    else if (playerSelection == paper && computerSelection == scissors) {
        // return 1
        updateComputerScore();
    }
    else if (playerSelection == scissors && computerSelection == rock) {
        // return 1
        updateComputerScore();
    }
    else {
        // return 0
        updatePlayerScore();
    }
}
function game() {
    let computerWins = 0;
    let playerWins = 0;
    const computerSelection = getComputerChoice();
    for(let i = 0; i < turns; i ++) {
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) == 1) {
            computerWins ++;
        }
        else {
            playerWins ++;
        }
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

//game(); //runs game

//DISPLAY COUNTER FUNCTION
function updateComputerScore(){
    computerScoreDisplay.innerHTML = computerScore++;
};

function updatePlayerScore() {
    playerScoreDisplay.innerHTML = playerScore++;
}