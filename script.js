// UI?
let choices = ['rock', 'paper', 'scissors'];

// states:
let playerScore = 0;
let computerScore = 0;
let isWon = false;
let whoWin = null;

// ALERT COMPONENT 
const alert1 = document.querySelector('#alert1')
const alert2 = document.querySelector('#alert2')

const closeAlert = (id) => {
    console.log(`THE ID ${id} component is removed`)
    document.querySelector(`#${id}`).classList.remove('absolute')
    document.querySelector(`#${id}`).classList.add('hidden')
}

// reset button
// const resetButton = document.querySelector('#reset-button');

// winner component
// const winnerComponent = document.querySelector('.winnerComponent');
// let whoWinText = document.querySelector('#who-win');

// buttons component
const attackButtonsChoices = document.querySelectorAll('.attack');

for(const button of attackButtonsChoices) {
        button.addEventListener('click', (e) => {
            const playerChoice = e.target.textContent;
            console.log(playerChoice)
            if (!isWon) {
                playRound(playerChoice);
            } else {
                console.log(`Reset the game to continue;`)
            }
        })
}

// computerSelect();
const computerSelect = () => {
    const cpuAttack = choices[Math.floor(Math.random() * choices.length)]
    console.log(`CPU choice attack: ${cpuAttack}`)
    return cpuAttack;
}

// playerSelect();
const playerSelect = (attack) => {
    const playerAttack = attack.toLowerCase();
    console.log(`Player choice attack: ${playerAttack}`)
    return playerAttack;
}

// playRound();
// checkWinner(playerAttack):
let round = 0;
const playRound = (playerChoice) => {
    round++;
    const playerAttack = playerSelect(playerChoice)
    checkWinner(playerAttack, computerSelect());
}

const hideButtonChoices = () => {
    for(const button of attackButtonsChoices) {
        button.classList.add('hidden');
    }
}

const unHideButtonChoices = () => {
    for(const button of attackButtonsChoices) {
        button.classList.remove('hidden');
        button.classList.add('inline-block');
    }
}

const checkWinner = (playerAttack, computerAttack) => {
    if (
        playerAttack === 'rock' && computerAttack === 'scissors' ||
        playerAttack === 'paper' && computerAttack === 'rock' ||
        playerAttack === 'scissors' && computerAttack === 'paper'
    ) {
        playerScore++;
        console.log(`Player won in round #${round}`)
        console.log(`Player is ${playerAttack} and CPU is ${computerAttack}`)
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
        console.log(`-----------------------`)
    } else if (playerAttack === computerAttack) {
        console.log(`Tie in round #${round}`)
        console.log(`Player is ${playerAttack} and CPU is ${computerAttack}`)
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
        console.log(`-----------------------`)
    } else {
        computerScore++;
        console.log(`Computer won in round #${round}`)
        console.log(`Player is ${playerAttack} and CPU is ${computerAttack}`)
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
        console.log(`-----------------------`)
    }

    if (playerScore === 2) {
        isWon = true;

        // hides the button
        hideButtonChoices();

        // show UI the reset button
        whoWin = 'YOU WIN!'
        whoWinText.textContent = whoWin;

        winnerComponent.classList.remove('hidden');
        winnerComponent.classList.add('absolute');

        console.log('PLAYER WIN!')
        console.log('------------')
    } 

    if (computerScore === 2) {
        isWon = true;

        // hides the button
        hideButtonChoices();

        // show UI the reset button
        whoWin = 'CPU WIN!'
        whoWinText.textContent = whoWin;

        winnerComponent.classList.remove('hidden');
        winnerComponent.classList.add('absolute');

        console.log('CPU WIN!')
        console.log('------------')
    } 
}

const resetState = () => {
    playerScore = 0;
    computerScore = 0;
    whoWin = null;
    isWon = false;
}

// resetButton.addEventListener('click', () => {
//     unHideButtonChoices();

//     resetState();
    
//     winnerComponent.classList.remove('absolute');
//     winnerComponent.classList.add('hidden');
    
// })

// STATES:
// round
// choices = ['rock', 'paper', 'scissors'];
// playerScore = 0;
// computerScore = 0;
// component of scores for both players
// isPlaying, this state will either stop the game or continue so the game will show a reset button to have a new game.
// isWon, this state will show the component of winner.