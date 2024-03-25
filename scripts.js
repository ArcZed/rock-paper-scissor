let playerScore = 0;
let computerScore = 0;
// create function generating the computer's choice
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
//create function that play one round of RPS
// 3 case: win; lose; tie
function playRound(playerOption, computerChoice){
    //invalid choice
    const playerChoice = playerOption.toLowerCase();
    if(playerChoice != 'rock' && 
        playerChoice != 'paper' && 
        playerChoice != 'scissor'){
        return `${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} is not a valid choice!`
    }
    //win
    if((playerChoice == 'rock' && computerChoice == 'Scissor') || 
        (playerChoice == 'paper' && computerChoice == 'Rock') || 
        (playerChoice == 'scissor' && computerChoice == 'Paper')){
        playerScore++
        return `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`
    }
    //tie
    else if (playerChoice == computerChoice.toLowerCase()){
        return `You Tied! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} ties ${computerChoice}`
    }
    //lose
    else {
        computerScore++
        return `You Lose! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`}
}
//create playGame() function to play 5 round of RPS to keep score and alert winner
function playGame(){
    let gameOver = false;

    for(let round = 1; round <= 5; round++){
        if(!gameOver){
            let playerSelection = prompt('Rocks Papers Scissors');
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
    }
            if(round == 5){
                console.log(round);
                gameOver = true;
                if(playerScore > computerScore){
                    console.log('You Win The Game!')
                }
                else if(playerScore == computerScore){console.log('You tied!')}
                else {console.log('You Lost! :(')}
            }
}
}
document.addEventListener('DOMContentLoaded', playGame())