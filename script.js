const choices = ['rock', 'paper', 'scissors']

// random choice index 0 - 2
const computerChoice = () => Math.floor(Math.random() * (choices.length))
console.log(computerChoice())

let humanScore = 0;
let computerScore = 0;

// condition checks if there's a winner
while (humanScore < 3 && computerScore < 3) {
    const playerChoice = prompt('Enter rock, paper, or scissors: ')
    const playerInput = playerChoice.toLowerCase();

    // if player input doesn't match in choices
    if (!choices.includes(playerInput)) {
        alert('invalid choice');
        continue; // back to the top of the loop
    }

    // return string cuz I encounter error when using function directly to condition if else....
    const cpuChoice = computerChoice();

    // checks if human wins
    if (
        playerInput === 'rock' && cpuChoice === 'scissors' ||
        playerInput === 'paper' && cpuChoice === 'rock' ||
        playerInput === 'scissors' && cpuChoice === 'paper'
    ) {
        alert('you win')
        humanScore++;
        console.log(`You chose: ${playerInput}`)
        console.log(`CPU chose: ${cpuChoice}`)
        console.log(`Your score: ${humanScore}`)
        console.log(`CPU score: ${computerScore}`)
        console.log('-----------------------------')
    } else if (playerInput === cpuChoice) {
        alert('draw')
        console.log('-----------------------------')
    } else {
        alert('you lose')
        computerScore++;
        console.log(`You chose: ${playerInput}`)
        console.log(`CPU chose: ${cpuChoice}`)
        console.log(`Your score: ${humanScore}`)
        console.log(`CPU score: ${computerScore}`)
        console.log('-----------------------------')
    }
}

if (humanScore === 3) {
    alert('HUMAN WINS!')
}

if (computerScore === 3) {
    alert('COMPUTER WINS!')
}