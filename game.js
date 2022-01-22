const buttons = document.querySelectorAll("button"); 
const results = document.getElementById("results");
const score = document.getElementById("score");
let you  = 0;
let cmp = 0;


function computerPlay() {
    
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)]; 
}

function playRound(playerSelection,computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
    {
        return [0,"Draw!!"];
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

buttons.forEach(button => {
    button.addEventListener("click",game)});


function game (e)
{
    result = playRound(e.target.value,computerPlay());
    
    results.innerHTML = `<p>${result[1]}</p>`;
    
    if (result[0]) { result[0]+1 ? you= you+1 : cmp = cmp+1; }
    
    score.innerHTML = `<p> you ${you} - computer ${cmp} </p>`;
    

    if ((you == 5) || (cmp == 5))
    {
            results.innerHTML += `${you == 5 ? 'YOU WIN' : 'Computer WIN'}`
            buttons.forEach (b => b.removeEventListener("click",game)); 
    }    
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0;i < 5;i++) {
//         let input = prompt("enter your choice: ");
//         let call = playRound(input,computerPlay());  
//         if (call[0] > 0)
//         {
//             playerScore++;
//         }
//         else if (call[0] < 0)
//         {
//             computerScore++;
//         }
//         console.log(call[1]);
//         console.log(`You ${playerScore} - ${computerScore} Computer`);
//     }

//     if (playerScore > computerScore)
//     {
//         console.log("You Won the game")
//     }
//     else if (playerScore < computerScore)
//     {
//         console.log("You Lose the game")
//     }
//     else 
//     {
//         console.log("Draw")
//     }
// }