console.log('Hello World!');

function getComputerChoice() {
    let rand = Math.random();
    if(rand >= 0.66) {
        return "rock";
    } else if(rand >= 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, scissors):");
}

function playRound(humanChoice, computerChoice) {
    computerChoice = computerChoice.toLowerCase()
    humanChoice = humanChoice .toLowerCase();

    if(computerChoice == humanChoice) {
        return; // draw
    }
    if(computerChoice == 'scissors' && humanChoice == 'rock') {
        humanScore++;
    }
    if(computerChoice == 'rock' && humanChoice == 'scissors') {
        computerScore++;
    }
    if(computerChoice == 'paper' && humanChoice == 'scissors') {
        humanScore++;
    }
    if(computerChoice == 'scissors' && humanChoice == 'paper') {
        computerScore++;
    }
    if(computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++;
    }
    if(computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++;
    }
}

function playGame() {
    // You play until someone gets 5 points
    while(humanScore < 5 || computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());

        console.log(computerSelection)
        console.log('Human score: ' + humanScore)
        console.log('Computer score: ' + computerScore)
    }
}

let humanScore = 0, computerScore = 0;
