const MAXROUNDS = 5;
let computerChoice;
let playerChoice;
let gameWinner;

let hand = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerChoice = hand[Math.floor(Math.random() * hand.length)];
}

// returns round winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "draw";
    } else {
        if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        ){
            console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`);
            return "player";
        } else  if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
        ){
            console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`);
            return "computer";
        } else
            console.log("Invalid hand");
            return "invalid";
    }
}

function playGame(rounds){
    
    let roundWinner;
    let playerScore = 0;
    let computerScore = 0;

    for( let i = 1; i <= rounds ; i++){

        console.log(`\nRound ${i}`);
        playerChoice = prompt("Input your choice of hand (Rock, paper or scissors).");
        console.log(playerChoice);
        
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        
        roundWinner = playRound(playerChoice,computerChoice);
        
        if(roundWinner == "draw")
            console.log("It's a draw!");
        else if(roundWinner == "player"){
            playerScore++;
        } else if(roundWinner == "computer"){
            computerScore++;
        } else
            console.log("Cannot determine round winner");
        
        console.log(`Current Score: ${playerScore} - ${computerScore}.`);
    }

    //determine game winner
    if(playerScore > computerScore){
        gameWinner = 'player';
        console.log(`Player wins game. ${playerScore} - ${computerScore}.`);
    }else if(computerScore > playerScore){
        gameWinner = 'computer';
        console.log(`Computer wins game. ${playerScore} - ${computerScore}.`);
    } else {
        gameWinner = 'draw';
        console.log(`Game is a draw. ${computerScore} - ${playerScore}.`);
    }
    return gameWinner;
}


// playGame(MAXROUNDS);


const RACETOSCORE = 5;
const gContainer = document.querySelector('#gameHdr');
gContainer.textContent = `Rock, Paper Scissors Game: Race to ${RACETOSCORE}`;

let rndWinner;
let pChoice;
let cChoice;
let pScore = 0;
let cScore = 0;
let isGameOver = false;

const resDiv = document.querySelector('#resultsFld');

function restartGame(){
    resDiv.textContent = 'Game Restarted';
    pScore = 0;
    cScore = 0;
    isGameOver = false;
}

function updateStatus(){

    if(rndWinner == "draw"){
        const entryDiv = document.createElement('div');
        entryDiv.textContent = "It's a draw!";
        resDiv.appendChild(entryDiv);
    } else if(rndWinner == "player"){
        const entryDiv = document.createElement('div');
        entryDiv.textContent = "Player wins!";
        resDiv.appendChild(entryDiv);
        pScore++;
    } else if(rndWinner == "computer"){
        const entryDiv = document.createElement('div');
        entryDiv.textContent = "Computer wins!";
        resDiv.appendChild(entryDiv);
        cScore++;
    } else {
        const entryDiv = document.createElement('div');
        entryDiv.textContent = "Cannot determine round winner!";
        resDiv.appendChild(entryDiv);
    }

    const entryDiv = document.createElement('div');
    entryDiv.textContent = `Player: ${pScore}   Computer: ${cScore}.`;
    resDiv.appendChild(entryDiv);
    console.log(`Player: ${pScore}   Computer: ${cScore}.`);
    
    
    if(pScore >= RACETOSCORE | cScore>= RACETOSCORE ){
        isGameOver = true;
        if(pScore > cScore){
            gameWinner = 'Player';
        }
        if(cScore > pScore){
            gameWinner = 'Computer';
        }
        
        const entryDiv = document.createElement('div');
        entryDiv.textContent = `Game over: ${gameWinner} wins!`;
        resDiv.appendChild(entryDiv);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart';
        resDiv.appendChild(restartBtn);
        restartBtn.addEventListener('click', restartGame);
    }


}

const rBtn = document.querySelector('#rockBtn');
rBtn.addEventListener('click', () => {
    cChoice = getComputerChoice();
    rndWinner = playRound("Rock", cChoice);    
    isGameOver ? restartGame() : updateStatus();
});

const pBtn = document.querySelector('#paperBtn');
pBtn.addEventListener('click', () => {
    cChoice = getComputerChoice();
    rndWinner = playRound("Paper", cChoice);    
    isGameOver ? restartGame() : updateStatus();
});

const sBtn = document.querySelector('#sciBtn');
sBtn.addEventListener('click', () => {
    cChoice = getComputerChoice();
    rndWinner = playRound("Paper", cChoice);    
    isGameOver ? restartGame() : updateStatus();
});