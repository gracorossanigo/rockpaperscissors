let whoBeatsWho = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

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

function beats(a, b) {
    if (whoBeatsWho[a] == b) {
        return true
    } else if (a == b) {
        return "tie"
    } else return false

}

function rockPaperScissors(computerSelection, playerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
     if (beats(playerSelection, computerSelection) === true) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if(beats(computerSelection, playerSelection) === true){
         return "You lose! " + computerSelection + " beats " + playerSelection
     } else {
         return "It's a tie!"
     }

}

function game(){
    for (let i = 0; i<5; i++){
        rockPaperScissors();
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

console.log(rockPaperScissors(playerSelection, computerSelection))
