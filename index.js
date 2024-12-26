let humanScore = 0;
let computerScore = 0;

//UI Logic
const resultOutput = document.querySelector(".results");
const scoreOutput = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(scoreOutput);
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
        default:
            return 'Error'
            break;
    }
    
}

function getHumanChoice() {
    const userInput = prompt('Rock, Paper, or Scissors?')

    if (userInput == 'rock') {
        return 'rock';
    } else if (userInput == 'paper') {
        return 'paper';
    } else if (userInput == 'scissors') {
        return 'scissors';
    } else {
        return 'Please enter a valid option'
    }
}

function playRound(humanChoice, computerChoice) {
    // humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        resultOutput.textContent = 'You win! Paper beats rock!';
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        resultOutput.textContent = 'You win! Scissors beats Paper!';
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
       resultOutput.textContent = 'You win! Rock beats Scissors!';
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        resultOutput.textContent = 'You lost! Scissors beats Paper!';
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        resultOutput.textContent = 'You lost! Rock beats Scissors!';
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        resultOutput.textContent = 'You lost! Paper beats Rock!';
        computerScore++;
    } else {
        resultOutput.textContent = 'Tie!';
    }
    
    scoreOutput.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
}



// Check out this function logic please!
function playGame() {
   const rockBtn = document.querySelector("#rock");
   const paperBtn = document.querySelector("#paper");
   const scissorsBtn = document.querySelector("#scissors");
   
     function checkEndGame() {
        if (humanScore >= 5 || computerScore >= 5) {
          if (humanScore > computerScore) {
            scoreOutput.textContent = "WINNER (refresh to play again)";

          } else {
            scoreOutput.textContent = "LOSER (refresh to play again)";
          }
        }
     }
     rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        checkEndGame();
       });
       paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        checkEndGame();
       });
       scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        checkEndGame();

       });
    
}



playGame();
