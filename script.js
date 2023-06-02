





function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


function getComputerChoice() {
    let num = getRandomIntInclusive(1,3);

    let choice = "";

    if (num === 1) {
         choice = "rock";
    }

    else if (num === 2) {
         choice = "paper";
    }

    else if (num === 3) {
         choice = "scissors";
    }

    return choice;

}

function playRound(playerSelection, computerSelection) {
    let result = "";
    let playerScore = 0;
    let computerScore =0;

    if ((playerSelection === "rock") & (computerSelection === "scissors")) {
        result = "You win! Rock beats Scissors!";
        playerScore = 1;
        computerScore = 0;
    }

    else if ((playerSelection === "rock") & (computerSelection === "paper")) {
        result = "You lose! Paper beats Scissors!"; 
        playerScore = 0;
        computerScore = 1;
    }

    else if ((playerSelection === "rock") & (computerSelection === "rock")) {
        result = "It's a tie! You both picked Rock!"; 
        playerScore = 0;
        computerScore = 0;
    }

    else if ((playerSelection === "paper") & (computerSelection === "rock")) {
        result = "You win! Paper beats Rock!"; 
        playerScore = 1;
        computerScore = 0;
    }

    else if ((playerSelection === "paper") & (computerSelection === "scissors")) {
        result = "You lose! Scissors beats Paper!"; 
        playerScore = 0;
        computerScore = 1;
    }

    else if ((playerSelection === "paper") & (computerSelection === "paper")) {
        result = "It's a tie! You both picked Paper!"; 
        playerScore = 0;
        computerScore = 0;
    }

    else if ((playerSelection === "scissors") & (computerSelection === "paper")) {
        result = "You win! Scissors beats Paper!"; 
        playerScore = 1;
        computerScore = 0;
    }

    else if ((playerSelection === "scissors") & (computerSelection === "rock")) {
        result = "You lose! Rock beats Scissors!"; 
        playerScore = 0;
        computerScore = 1;
    }

    else if ((playerSelection === "scissors") & (computerSelection === "scissors")) {
        result = "It's a tie! You both picked scissors!"; 
        playerScore = 0;
        computerScore = 0;
    }

    return result;

  }
   


game();

function game() {
    result = "";
    playerScore = 0;
    computerScore = 0;
    
    for (let i =1; i <= 5; i++) {

        let playerSelection = prompt("Enter Rock, Paper, or Scissors fiend!");
        playerSelection = playerSelection.toLowerCase();

        const computerSelection = getComputerChoice();

        result = playRound(playerSelection,computerSelection);
        console.log(result);

        if ((result === "You win! Scissors beats Paper!") || (result === "You win! Paper beats Rock!") || (result === "You win! Rock beats Scissors!")) {
            playerScore ++;
        }
        else if ((result === "You lose! Rock beats Scissors!") || (result === "You lose! Scissors beats Paper!") || (result === "You lose! Paper beats Scissors!")) {
            computerScore ++;
        }
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
    }

    if (playerScore > computerScore) {
        console.log("Final result, YOU WIN!");
    }
    else if (playerScore < computerScore) {
        console.log("Final result, YOU LOSE LOL!");
    } 

    else {
        console.log("Final result, TIE!");
    }


return 0;

}


  