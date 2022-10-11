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

function getPlayerChoice(){
    let choice = prompt("Whats your move?")
    return choice;
}

function beats(a, b) {
    if (whoBeatsWho[a] == b) {
        return true
    } else if (a == b) {
        return "tie"
    } else return false

}

function rockPaperScissors(a, b) {
    let computerSelectionLowercase = a.toLowerCase();
    let playerSelectionLowercase = b.toLowerCase();
     if (beats(playerSelectionLowercase, computerSelectionLowercase) == true) {
        return "You win! " + playerSelectionLowercase + " beats " + computerSelectionLowercase;
    } else if(beats(computerSelectionLowercase, playerSelectionLowercase) == true){
         return "You lose! " + computerSelectionLowercase + " beats " + playerSelectionLowercase
     } else {
         return "It's a tie!"
     }

}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i<5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        switch (rockPaperScissors(String(computerChoice), String(playerChoice)).charAt(4)) {
            case "w":
                console.log("You win this round");
                playerWins++;
                break;
            case "l":
                console.log("You lose this round");
                computerWins++;
                break;
            default:
                console.log("You tie this round");
                break;
        }
    }
    if (computerWins>playerWins){
        console.log("You lost");
        return "You lost";
    } else if (playerWins>computerWins) {
        console.log("You won");
        return "You won";
    } else {console.log("You won"); return "It's a tie!"}
}

game();
