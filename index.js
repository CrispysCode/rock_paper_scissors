let humanScore = 0;
let computerScore = 0;

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
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats rock!')
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper!');
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors!')
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lost! Scissors beats Paper!')
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lost! Rock beats Scissors!');
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lost! Paper beats Rock!')
        computerScore++;
    } else {
        console.log('Tie!')
    }

}

function playGame() {
    let endGame = 5;
    for (let i = 0; i < endGame; i++) {
        playRound();

    }

    if (humanScore > computerScore) {
         console.log('You won the game!')
    } else {
        console.log('You lost the game!')
    }
}

playGame();