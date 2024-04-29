const attacks = ['rock', 'paper', 'scissors']
let humanScore = 0;
let cpuScore = 0;

const getComputerChoice = () => {
    let index = Math.floor(Math.random() * attacks.length);
    let cpuAttack = attacks[index];

    return cpuAttack;
}

const getHumanChoice = () => {
    let humanAttack = prompt("Choose your attack ['rock', 'paper', 'scissors']: ").toLowerCase();

    switch (humanAttack) {
        case 'rock'.toLowerCase():
        break;
        case 'paper'.toLowerCase():
        break;
        case 'scissors'.toLowerCase():
        break;
        default:
            humanAttack = prompt("please try again ['rock', 'paper', 'scissors']: ").toLowerCase();
    }


    return humanAttack
}

const checkWinner = (humanChoice, cpuChoice) => {
    if (humanChoice === 'rock' && cpuChoice === 'scissors' ||
    humanChoice === 'paper' && cpuChoice === 'rock'||
    humanChoice === 'scissors' && cpuChoice === 'paper'
    ) {
        humanScore++;
        console.log('HUMAN score: ', humanScore)
        console.log('CPU score: ', cpuScore)
        console.log('human wins')
    } else if (humanChoice === 'rock' && cpuChoice === 'rock' ||
    humanChoice === 'paper' && cpuChoice === 'paper'||
    humanChoice === 'scissors' && cpuChoice === 'scissors'
    ) {
        console.log('HUMAN score: ', humanScore)
        console.log('CPU score: ', cpuScore)
        console.log('DRAW')
    } else {
        cpuScore++;
        console.log('HUMAN score: ', humanScore)
        console.log('CPU score: ', cpuScore)
        console.log('cpu wins')
    }

    if (humanScore === 5) {
        console.log('HUMAN WINS THE GAME')
    }

    if (cpuScore === 5) {
        console.log('CPU WINS THE GAME')
    }
}

const playRound = (humanChoice, cpuChoice) => {
    console.log(humanChoice, cpuChoice)

    checkWinner(humanChoice, cpuChoice);
}

const playForFive = (humanChoice, cpuChoice) => {
    let counter = 5;

    while (counter === 5) {
        checkWinner(humanChoice, cpuChoice)
        if (humanScore === 5 || cpuScore === 5) {
            break;
        } 
        
        playForFive(getHumanChoice(), getComputerChoice())
    
        counter++;

    }
}
playForFive(getHumanChoice(), getComputerChoice())

// playRound(getHumanChoice(), getComputerChoice());

