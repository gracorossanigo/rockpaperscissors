let whobeatswho = {
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
    if (whobeatswho[a] == b) {
        return true
    } else {
        return false
    }

}

function rockPaperScissors() {

}
getComputerChoice();
