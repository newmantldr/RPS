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
        winner = ''
        if (humanChoice === 'Paper'){
            if (computerChoice === 'Rock'){
                winner = 'human';
                document.getElementById('roundMessage').textContent = 'Player chose Paper and Computer chose Rock. Player wins!';
            } else if (computerChoice === 'Paper'){
                winner = 'tie';
                document.getElementById('roundMessage').textContent = 'Both chose Paper. It is a tie!';
            } else if (computerChoice === 'Scissors') {
                winner = 'computer';
                document.getElementById('roundMessage').textContent = 'Player chose Paper and Computer chose Scissors. Computer wins!'
            }
        } else if (humanChoice === 'Rock'){
            if (computerChoice === 'Rock'){
                winner = 'tie';
                document.getElementById('roundMessage').textContent = 'Both chose Rock. It is a tie!';
            } else if (computerChoice === 'Paper'){
                winner = 'computer';
                document.getElementById('roundMessage').textContent = 'Player chose Rock and Computer chose Paper. Computer wins!'
            } else if (computerChoice === 'Scissors') {
                winner = 'human';
                document.getElementById('roundMessage').textContent = 'Player chose Rock and Computer chose Scissors. Player wins!'
            }
        } else if (humanChoice === 'Scissors'){
            if (computerChoice === 'Rock'){
                winner = 'computer';
                document.getElementById('roundMessage').textContent = 'Player chose Scissors and Computer chose Rock. Computer wins!'
            } else if (computerChoice === 'Paper'){
                winner = 'human';
                document.getElementById('roundMessage').textContent = 'Player chose Scissors and Computer chose Paper. Player wins!'
            } else if (computerChoice === 'Scissors') {
                winner = 'tie';
                document.getElementById('roundMessage').textContent = 'Both chose Scissors. It is a tie!';
            }
        }
        return winner;
    }

const buttons = document.querySelector('#buttons');
humanScore = 0
computerScore = 0
buttons.addEventListener('click', (e)=> {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    winner = playRound(humanChoice, computerChoice);
    if ((humanScore & computerScore) < 4){
        switch(winner){
            case 'human': humanScore += 1;
                document.getElementById('score').textContent = `Player: ${humanScore} vs Computer: ${computerScore}`;
                if (humanScore == 5) {
                    document.getElementById('winnerMessage').textContent = 'You win!';
                    const playAgain = document.createElement('button');
                    playAgain.textContent = 'Play Again?';
                    document.getElementById('winnerMessage').appendChild(playAgain);
                    playAgain.addEventListener('click', () => {
                        window.location.reload();
                    })
                }
                break;
            case 'computer': computerScore += 1;
                document.getElementById('score').textContent = `Player: ${humanScore} vs Computer: ${computerScore}`;
                if (computerScore == 5) {
                    document.getElementById('winnerMessage').textContent = 'You lose!';
                    const playAgain = document.createElement('button');
                    playAgain.textContent = 'Play Again?';
                    document.getElementById('winnerMessage').appendChild(playAgain);
                    playAgain.addEventListener('click', () => {
                        window.location.reload();
                    })
                }
                break;
        }

    } else{
        document.getElementById('winnerMessage').textContent = ''
    }
});