function computerPlay() {
    
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)]; 
}

function playRound(playerSelection,computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
    {
        return [0,"Draw!!"]
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "paper" && computerSelection === "rock")
            || (playerSelection === "scissors" && computerSelection === "rock")){
                
                return [1,`You Won, ${playerSelection} beats ${computerSelection}`];
    }
    else
    {
        return [-1,`You Lose, ${computerSelection} beats ${playerSelection}`];
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0;i < 5;i++) {
        let input = prompt("enter your choice: ");
        let call = playRound(input,computerPlay());  
        if (call[0] > 0)
        {
            playerScore++;
        }
        else if (call[0] < 0)
        {
            computerScore++;
        }
        console.log(call[1]);
        console.log(`You ${playerScore} - ${computerScore} Computer`);
    }

    if (playerScore > computerScore)
    {
        console.log("You Won the game")
    }
    else if (playerScore < computerScore)
    {
        console.log("You Lose the game")
    }
    else 
    {
        console.log("Draw")
    }
}