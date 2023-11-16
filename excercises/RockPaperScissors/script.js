
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function singleGame(playerSelection, computerSelection) {
    if (playerSelection==computerSelection) {
        result.textContent = `Draw!`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
       result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == "paper" && computerSelection=="rock") {
        playerScore += 1;
        result.textContent =  `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        playerScore += 1;
        result.textContent =  `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore += 1;
        result.textContent =  `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    Score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;
    counter();
}

function counter() {
    if (playerScore == 5) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        result.textContent = `You Won the game with ${playerScore} against ${computerScore}.`
    } else if (computerScore == 5) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        result.textContent = `You Lost the game with ${computerScore} against ${playerScore}.`
    }
}

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const page = document.querySelector('section');

btn1.textContent='rock';
btn2.textContent='paper';
btn3.textContent='scissors';

page.appendChild(btn1);
page.appendChild(btn2);
page.appendChild(btn3);


btn1.addEventListener('click', () => {
    singleGame('rock', getComputerChoice());
});

btn2.addEventListener('click', () => {
    singleGame('paper', getComputerChoice());
})

btn3.addEventListener('click', ()=> {
    singleGame('scissors', getComputerChoice());
})

const result = document.createElement('div');
page.appendChild(result)


const Score =document.createElement('p');
Score.textContent = `Player: ${playerScore} Computer: ${computerScore}`
page.appendChild(Score)

