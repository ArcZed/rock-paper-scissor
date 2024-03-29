let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let isEndRound = false

const score = document.querySelector('.score');
const compScore = document.querySelector('.computerScore');

const resultScreen = document.querySelector('.resultScreen');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const icon = document.querySelector('.icon');

// Get player choice
rock.addEventListener('click', (e)=>{
    console.log(e);
    clearScreen();
    playRound(e.target.alt, getComputerChoice());
    checkScore();
    isEndRound = true;
});
paper.addEventListener('click', (e)=>{
    console.log(e);
    clearScreen();
    playRound(e.target.alt, getComputerChoice());
    checkScore();
    isEndRound = true;
});
scissors.addEventListener('click',(e)=>{
    console.log(e);
    clearScreen();
    playRound(e.target.alt, getComputerChoice())
    checkScore();
    isEndRound = true;
});

// Generate computer's choice
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;
    if(!isGameOver){
    switch (choice){
        case 1: 
            return 'Rock';
        break;
        case 2: 
            return 'Paper';
        break;
        case 3: 
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
            resultScreen.textContent = `You Win! ${playerChoice} beats ${computerChoice}`
        }
        //tie
        else if (playerChoice == computerChoice.toLowerCase()){
            resultScreen.textContent = `You Tied! ${playerChoice} ties ${computerChoice}`
        }
        //lose
        else {
            computerScore++;
            resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        }
        
    }
    else{
        gameOver();
    }

    createResult(playerChoice, computerChoice);
   
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

// Create game over screen
function gameOver(){

    resultScreen.style.flexDirection = 'column';
    if(playerScore == 5){
        resultScreen.textContent = 'CONGRATULATION!!! YOU WON :]'
    }
    else{
        resultScreen.textContent = 'YOU LOST :[ TRY AGAIN?'
    }

    //create restart button
    const playAgain = document.createElement('div');
    playAgain.classList.add('playAgain');
    playAgain.textContent = 'Play Again';
    resultScreen.appendChild(playAgain);

    playAgain.addEventListener('click', (e) =>{
        resetGame()
    });
}

// Reset game
function resetGame(){
    score.textContent = '0';
    compScore.textContent = '0';
    resultScreen.innerHTML = '';
    playerScore = 0;
    computerScore = 0;
    isGameOver = false;
    console.log('Restart');
}

function createResult(playerChoice, computerChoice){

    let resultContainer = document.createElement('div');
    resultContainer.classList.add('resultContainer');
    resultScreen.appendChild(resultContainer)

    let playerResult = document.createElement('div');
    playerResult.classList.add('icon');
    resultContainer.appendChild(playerResult);

    let playerImage = document.createElement('img');
    playerImage.classList.add('img');
    playerResult.appendChild(playerImage);
    console.log(playerChoice)

    switch (playerChoice) {
        case 'rock':
            playerImage.src = 'images/rocks.png';
            break;
        case 'paper':
            playerImage.src = 'images/paper.png';
            break;
        case 'scissors':
            playerImage.src = 'images/scissors.png';
            break;
        default:
            break;
    }

    let computerResult = document.createElement('div');
    computerResult.classList.add('icon');
    resultContainer.appendChild(computerResult);

    let computerImage = document.createElement('img');
    computerImage.classList.add('img');
    computerResult.appendChild(computerImage);
    console.log(computerChoice);

    switch (computerChoice) {
        case 'Rock':
            computerImage.src = 'images/rocks.png';
            break;
        case 'Paper':
            computerImage.src = 'images/paper.png';
            break;
        case 'Scissors':
            computerImage.src = 'images/scissors.png';
            break;
        default:
            break;
    }
}

function clearScreen(){
    resultScreen.innerHTML = ''
}