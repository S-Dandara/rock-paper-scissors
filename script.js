//Create function getComputerChoice to play against player.
function getComputerChoice () {
    let computer = (Math.floor(Math.random()*3))+1
    let computerChoice;
    if (computer == 1){
        computerChoice = `rock`
    }
    else if (computer == 2){
        computerChoice = `paper`
    }
    else if (computer == 3){
        computerChoice = `scissor`
    }
    else{
        computerChoice = `Error!`
    }
     
    return computerChoice
}

//
let playerChoice = window.prompt(`Rock, paper or scissor? Make your choice:`);
playerChoice = playerChoice.toLowerCase();

//Create function that plays one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    let result = ``;
    if (playerSelection === `rock` && computerSelection === `scissor` || playerSelection === `scissor` && computerSelection === `paper` || playerSelection === `paper` && computerSelection === `rock`){
        result = `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (computerSelection === `rock` && playerSelection === `scissor` || computerSelection === `scissor` && playerSelection === `paper` || computerSelection === `paper` && playerSelection === `rock`){
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === computerSelection){
        result = `It's a tie!`
    }

    return result;
}

//Storing the play choices in variables that will be used as parameters for the playRound function
let playerSelection = playerChoice;
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
