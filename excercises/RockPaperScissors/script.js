function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function singleGame(playerSelection, computerSelection) {
    if (playerSelection==computerSelection) {
        return `Draw!`
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == "paper" && computerSelection=="rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let games = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors. Choose: ").toLowerCase()
        const computerSelection = getComputerChoice()
        if (singleGame(playerSelection,computerSelection)== `You Win! ${playerSelection} beats ${computerSelection}`){
            console.log(singleGame(playerSelection,computerSelection))
            games += 1;
        } else {
                console.log(singleGame(playerSelection,computerSelection))
    }
    }
    if (games > 3) {
        return `You win! With a score of ${games} out of 5 games won.`
    }
    else {
        return `You lose! With a score of ${games} out of 5 games won.`
    }

}


console.log(game())
