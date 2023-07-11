function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)
    let computerResult = ''
    if (computerChoice === 0) {
     computerResult = 'rock'
    }
    else if (computerChoice === 1){
     computerResult = 'paper'
    } 
    else {  
     computerResult = 'scissors'
    }
    return computerResult;
}

function getPlayerChoice () {
return prompt('Your choice!').toLowerCase();
} 

playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    userScore = 0
    computerScore = 0;
    if (playerSelection === computerSelection) {
        userScore += 1
        computerScore += 1
        return  'Tie!' + userScore + '-' + computerScore;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        userScore += 1
        return 'You win! ' + userScore + '-' + computerScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        userScore += 1
        return 'You win! ' + userScore + '-' + computerScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore += 1
        return 'You win! ' + userScore + '-' + computerScore;
    }
        computerScore += 1
        return 'You Lose! ' + userScore + '-' + computerScore;

}

const roundResult = playRound(playerSelection, computerSelection)

function game(playRound) {
    playRound(playerSelection, computerSelection)
    console.log(roundResult)
    playRound(playerSelection, computerSelection)
    console.log(roundResult)
}


game(playRound);





