// Dictionary that specifies who beats who
let whoBeatsWho = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}
// Function that uses random numbers to get either rock, paper or scissors
function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 100);

    if (randomValue < 100 / 3) {
        return "rock"

    } else if (randomValue < (100 / 3) * 2) {
        return "paper"

    } else {
        return "scissors"

    }
}

function getPlayerChoice(){
    let choice = prompt("Whats your move?")
    return choice;
}
//Function that checks the whoBeatsWho to see if a beats b
function beats(a, b) {
    if (whoBeatsWho[a] == b) {
        return true
    } else if (a == b) {
        return "tie"
    } else return false

}
// Function that plays one round of rock paper scissors
function rockPaperScissors(computerChoice, playerChoice) {
   
    if (beats(playerChoice.toLowerCase(), computerChoice.toLowerCase()) == true) {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        return true;
    } else if (beats(computerChoice, playerChoice) == true){
         console.log("You lose! " + computerChoice + " beats " + playerChoice);
        return false;
     } else {
         console.log( "It's a tie!");
         return "tie";
     }

}
// function that plays five rounds of rock paper scissors and tells you who won at the end
function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i<5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        switch (rockPaperScissors(computerChoice, playerChoice)) {
            case true:
                playerWins++;
                break;
            case false:
                computerWins++;
                break;
            case "tie":
                break;
            default: 
                console.log("Did not recognize entry, defaulted to tie.");
                break;
        }
    }
    if (computerWins == playerWins){
        console.log("You tied the computer!");
        return "You tied";
    } else if (playerWins > computerWins) {
        console.log("You won");
        return "You won";
    } else if (playerWins < computerWins) {console.log("You lost"); return "You lost"}
}

game();
