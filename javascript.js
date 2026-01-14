function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else if (num === 2) {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Choose one: Rock, Paper, or Scissors?', 'Rock');
    humanChoice = String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1).toLowerCase();
    return humanChoice;
}
function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'Paper'){
            if (computerChoice === 'Rock'){
                humanScore += 1
                console.log('You win! Paper beats Rock.')
            } else if (computerChoice === 'Paper'){
                console.log('Tie! Paper and Paper chosen.')
            } else if (computerChoice === 'Scissors') {
                computerScore += 1
                console.log('You lose! Scissors beats Paper.')
            }
        } else if (humanChoice === 'Rock'){
            if (computerChoice === 'Rock'){
                console.log('Tie! Rock and Rock chosen.')
            } else if (computerChoice === 'Paper'){
                computerScore += 1
                console.log('You lose! Paper beats Rock.')
            } else if (computerChoice === 'Scissors') {
                humanScore += 1
                console.log('You win! Rock beats Scissors.')
            }
        } else if (humanChoice === 'Scissors'){
            if (computerChoice === 'Rock'){
                computerScore += 1
                console.log('You lose! Rock beats Scissors.')
            } else if (computerChoice === 'Paper'){
                humanScore += 1
                console.log('You win! Scissors beats Paper.')
            } else if (computerChoice === 'Scissors') {
                console.log('Tie! Scissors and Scissors chosen.')
            }
        }
    }

    for (i=0; i < 5; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log('Player1 Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    }
}

playGame()