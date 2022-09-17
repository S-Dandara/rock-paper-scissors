# Rock, paper, scissors project

```
### **Project view:**

https://s-dandara.github.io/rock-paper-scissors/

```

In this project I was able to practice with functional programing to make a simple implementation of grade-school classic “rock paper scissors” to be played from the browser console against the machine.
<br>
<br>
1. Write a function that will randomly return either `Rock`, `Paper` or `Scissors` as computer play.<br>
2. Write a function that plays a single round of `Rock, Paper, Scissors`, that take two parameters - the `playerSelection` and `computerSelection` - and return the result of the round.
    >The function's playerSElection parameter should be case-insensitive (so users can input paper, PAPER, PapEr or any other variation).
3. Write a function that will play 5 rounds of the game, keeps score and return the results at the end.
<br><br>

We have four functions:<br>
    - `getComputerChoice`: randomly return computer's choice<br>
    - `getPlayerChoice`: opens a prompt to get the player choice<br>
    - `playRound`: call's the two previous functions and returns the round result<br>
    - `game`: call's the `playRound` function 5 times and returns the game result<br>