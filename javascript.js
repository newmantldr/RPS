function getComputerChoice() {
    choice = "";
    switch(Math.floor(Math.random() * 3)){
        case 0: choice = 'Rock';
                break;
        case 1: choice = 'Paper';
                break;
        case 2: choice = 'Scissors';
                break;
    }
    return choice;
}

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


const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (e)=> {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    console.log(humanChoice)
    console.log(computerChoice)
    playRound(humanChoice, computerChoice);
});