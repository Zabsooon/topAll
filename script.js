console.log('Hello World!');

function getComputerChoice() {
    let rand = Math.random();
    if(rand >= 0.66) {
        return "rock";
    } else if(rand >= 0.33) {
        return "paper";
    } else {
        return "scisors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, scisors):");
}

console.log(getComputerChoice());
console.log(getHumanChoice());