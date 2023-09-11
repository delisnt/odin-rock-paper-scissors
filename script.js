

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    const computerSelection = getComputerChoice();
    computerChoiceDisplay.innerHTML = computerSelection;
    resultDisplay.innerHTML = playRound(computerSelection, userChoice);
    checkScores(computerScore, userScore)
}))

let computerScore = 0;
let userScore = 0;


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



function playRound(computerSelection, userChoice) {

    if (computerScore == 3){
        return "*explodes*"
    }
    if (userScore == 3){
        computerScore = 0;
        userScore = 0;
        return "YOU WON!!!11!!"
    }

    if (userChoice === computerSelection) {
        userScore;
        computerScore;
        return 'Tie! ' + userScore + '-' + computerScore;
    }
    else if (userChoice === 'rock' && computerSelection === 'scissors'){
        userScore += 1
        return 'You win! ' + userScore + '-' + computerScore;
    }
    else if (userChoice === 'scissors' && computerSelection === 'paper'){
        userScore += 1
        return 'You win! ' + userScore + '-' + computerScore;
    }
    else if (userChoice === 'paper' && computerSelection === 'rock') {
        userScore += 1
        return 'You win! ' + userScore + '-' + computerScore;
    }
        computerScore += 1
        return 'You Lose! ' + userScore + '-' + computerScore;       
}
   








