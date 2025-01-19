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

function playRound(humanChoice, computerChoice) {
    // Reset the game
    if(humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }
    computerChoice = computerChoice.toLowerCase()
    humanChoice = humanChoice .toLowerCase();

    if(computerChoice == humanChoice) {
        winningTitle.innerText = 'Draw!';
    }
    if(computerChoice == 'scissors' && humanChoice == 'rock') {
        humanScore++;
        winningTitle.innerText = 'Player wins this round!';
    }
    if(computerChoice == 'rock' && humanChoice == 'scissors') {
        computerScore++;
        winningTitle.innerText = 'Computer wins this round!';
    }
    if(computerChoice == 'paper' && humanChoice == 'scissors') {
        humanScore++;
        winningTitle.innerText = 'Player wins this round!';
    }
    if(computerChoice == 'scissors' && humanChoice == 'paper') {
        computerScore++;
        winningTitle.innerText = 'Computer wins this round!';
    }
    if(computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++;
        winningTitle.innerText = 'Player wins this round!';
    }
    if(computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++;
        winningTitle.innerText = 'Computer wins this round!';
    }

    console.log(`Human: ${humanChoice} Computer: ${computerChoice}`);
    if(humanScore >= 5) {
        winningTitle.innerText = 'Player wins the game!';
    } else if(computerScore >= 5) {
        winningTitle.innerText = 'Computer wins the game!';
    }
    humanScoreDiv.innerText = humanScore;
    computerScoreDiv.innerText = computerScore;
}

const buttons = document.querySelectorAll("button");

let humanScore = 0, computerScore = 0;
for(const button of buttons) {
    button.addEventListener("click", (e) => {
        console.log(e.target.id);
        playRound(e.target.id, getComputerChoice());
    });
}

const scoreDiv = document.querySelector("#score")

const winningTitle = document.createElement("p");
const humanScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");
humanScoreDiv.classList.add("score_div");
computerScoreDiv.classList.add("score_div");

scoreDiv.appendChild(winningTitle);
scoreDiv.appendChild(humanScoreDiv);
scoreDiv.appendChild(computerScoreDiv);
