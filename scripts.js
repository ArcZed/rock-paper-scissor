let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

const score = document.querySelector('.score');
const compScore = document.querySelector('.computerScore');

const resultScreen = document.querySelector('.resultScreen');

const compRock = document.querySelector('.compRock');
const compPaper = document.querySelector('.compPaper');
const compScissors = document.querySelector('.compScissors');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const icon = document.querySelector('.icon');

// Get player choice
rock.addEventListener('click', (e)=>{
    console.log(e.target.alt);
    resetColor();
    playRound(e.target.alt, getComputerChoice());
    checkScore();
});
paper.addEventListener('click', (e)=>{
    console.log(e.target.alt);
    resetColor();
    playRound(e.target.alt, getComputerChoice());
    checkScore();
});
scissors.addEventListener('click',(e)=>{
    console.log(e.target.alt);
    resetColor();
    playRound(e.target.alt, getComputerChoice())
    checkScore();
    
});

// Generate computer's choice
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;
    if(!isGameOver){
    switch (choice){
        case 1: 
            compRock.style.backgroundColor = 'bisque';
            return 'Rock';
        break;
        case 2: 
            compPaper.style.backgroundColor = 'bisque';
            return 'Paper';
        break;
        case 3: 
            compScissors.style.backgroundColor = 'bisque';
            return 'Scissors';
        break;
        default: 
        break;
    }
}
}



//Play one round of RPS
function playRound(playerOption, computerChoice){


    let playerChoice = playerOption.toLowerCase();
    if(!isGameOver){
    //win
    if((playerChoice == 'rock' && computerChoice == 'Scissors') || 
       (playerChoice == 'paper' && computerChoice == 'Rock') || 
       (playerChoice == 'scissors' && computerChoice == 'Paper')){
        playerScore++;
        resultScreen.textContent = `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`
    }
    //tie
    else if (playerChoice == computerChoice.toLowerCase()){
        resultScreen.textContent = `You Tied! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} ties ${computerChoice}`
    }
    //lose
    else {
        computerScore++
        resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`}
}
    else{
        gameOver();
    }
}
// show the score and update the UI
function checkScore(){
    score.textContent = playerScore;
    compScore.textContent = computerScore;

    if(playerScore == 5 || computerScore == 5){
        isGameOver = true;
        gameOver();
    }
}

function resetColor(){
    compRock.style.backgroundColor = '';
    compPaper.style.backgroundColor = '';
    compScissors.style.backgroundColor = '';
}

function gameOver(){
    if(playerScore == 5){
        resultScreen.textContent = 'CONGRATULATION!!! YOU WON :]'
    }
    else{
        resultScreen.textContent = 'YOU LOST :[ TRY AGAIN?'
    }

    const playAgain = document.createElement('div');
    playAgain.classList.add('playAgain');
    playAgain.textContent = 'Play Again';
    resultScreen.appendChild(playAgain);

    playAgain.addEventListener('click', (e) =>{
        resetGame()
    });
}



function resetGame(){
    resetColor();
    score.textContent = '0';
    compScore.textContent = '0';
    resultScreen.textContent = '';
    playerScore = 0;
    computerScore = 0;
    isGameOver = false;
    console.log('Restart');
}