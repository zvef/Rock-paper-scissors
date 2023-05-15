
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

number = Math.floor(Math.random()*3);

function getComputerChoice() {
    if(number == 0){
        console.log(rock);
    }
    else if(number == 1){
        console.log(paper);
    }
    else {
        console.log(scissors);
    }
}
   

console.log(getComputerChoice());

