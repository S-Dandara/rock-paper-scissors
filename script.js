console.log(`Rock Paper Scissors`)

function getComputerChoice () {
    let choice = (Math.floor(Math.random()*3))+1
    let computerChoice;
    if (choice == 1){
        computerChoice = `rock`
    }
    else if (choice == 2){
        computerChoice = `paper`
    }
    else if (choice == 3){
        computerChoice = `scissor`
    }
    else{
        computerChoice = `Error!`
    }
    
    return computerChoice
}
console.log(getComputerChoice());