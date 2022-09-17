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
        computerChoice = `scissors`
    }
    else{
        computerChoice = `Error!`

    }
     
    return computerChoice
}

//Create prompt to receive playerSelection
function getPlayerChoice(){
    let playerChoice = window.prompt(`Rock, paper or scissors? Make your choice:`);
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

//Create function that plays one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    let result = ``;
    let winner = ``
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === `rock` && computerSelection === `scissors` || playerSelection === `scissors` && computerSelection === `paper` || playerSelection === `paper` && computerSelection === `rock`){
        result = `You Win! You chose ${playerSelection} and ${playerSelection} beats ${computerSelection}`;
        winner = `Player`
    }
    else if (computerSelection === `rock` && playerSelection === `scissors` || computerSelection === `scissors` && playerSelection === `paper` || computerSelection === `paper` && playerSelection === `rock`){
        result = `You Lose! You chose ${playerSelection} and ${computerSelection} beats ${playerSelection}`;
        winner = `Computer`
    }
    else if (playerSelection === computerSelection){
        result = `It's a tie! You both chose ${playerSelection}`;
        winner = `Nobody wins this round.`
    }

    return [result, winner]
}

//Implement function game() to play 5 rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let round;
    let gameResult;
    for (let i=0; i<5; i++){
        round = playRound()
        console.log(`Round ${i+1}: ${round[0]}`);
        switch (`${round[1]}`) {
            case `Player`:
                playerScore ++;
                break;
            case `Computer`:
                computerScore ++;
                break;
        }
    }
    if (playerScore > computerScore){
        gameResult = `Yay! You are the winner!
        Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if (playerScore < computerScore){
        gameResult = `Oh no, it was so close! You lose. Better luck in the next time.
        Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if (playerScore === computerScore){
        gameResult = `What are the odds? It's a tie!
        You both scored ${playerScore}`;
    }
    
    return gameResult
}
console.log(game())