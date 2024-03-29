let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

const resultScreen = document.querySelector('.resultScreen');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const icon = document.querySelector('.icon');

// Get player choice

rock.addEventListener('click', (e)=>{
    console.log(e.target.alt);
    playRound(e.target.alt, getComputerChoice())
    checkScore();
});
paper.addEventListener('click', (e)=>{
    console.log(e.target.alt);
    playRound(e.target.alt, getComputerChoice())
    checkScore();
});
scissors.addEventListener('click',(e)=>{
    console.log(e.target.alt);
    playRound(e.target.alt, getComputerChoice())
    checkScore();
});

// Generate computer's choice
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;
    switch (choice){
        case 1: return 'Rock';
        break;
        case 2: return 'Paper';
        break;
        case 3: return 'Scissor';
        break;
        default: 
        break;
    }
}

//Play one round of RPS
function playRound(playerOption, computerChoice){

    let playerChoice = playerOption.toLowerCase();
    if(!isGameOver){
    //win
    if((playerChoice == 'rock' && computerChoice == 'Scissor') || 
       (playerChoice == 'paper' && computerChoice == 'Rock') || 
       (playerChoice == 'scissor' && computerChoice == 'Paper')){
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
// Check the score
function checkScore(){
    if(!gameOver && playerScore < 5 && computerScore < 5){
        
    }
}

function gameOver(){

}