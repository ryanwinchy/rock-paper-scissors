





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
        result = "You lose! Paper beats Rock!"; 
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
   

playerScore = 0;   //Global so score is kept.
computerScore = 0;


function game(playerChoice) {
    result = "";
    playerSelection = playerChoice;
    

        /*let playerSelection = prompt("Enter Rock, Paper, or Scissors fiend!");           //Remove this probably!
        playerSelection = playerSelection.toLowerCase();*/

       

        const computerSelection = getComputerChoice();

        result = playRound(playerSelection,computerSelection);
        
        const displayResult = document.querySelector('.result');
        displayResult.textContent = `${result}`;                      //Returns result as text content inside .result div!


        if ((result === "You win! Scissors beats Paper!") || (result === "You win! Paper beats Rock!") || (result === "You win! Rock beats Scissors!")) {
            playerScore ++;
        }
        else if ((result === "You lose! Rock beats Scissors!") || (result === "You lose! Scissors beats Paper!") || (result === "You lose! Paper beats Scissors!")) {
            computerScore ++;
        }
        //console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)

        const displayPlayerScore = document.querySelector('.playerScore');
        displayPlayerScore.textContent = `${playerScore}`;                      //Returns scores as text content.

        const displayComputerScore = document.querySelector('.computerScore');
        displayComputerScore.textContent = `${computerScore}`;

    
    

    if ((playerScore >= 5) ||  (computerScore >= 5)) {

        if (playerScore > computerScore) {
            const displayFinalScore = document.querySelector('.finalWinner');
        displayFinalScore.textContent = "YOU WIN!";
        
            const buttons = document.querySelectorAll('button');    //Removes buttons so game ends.
            buttons.forEach(button => {
                button.remove();
              });
        }
        else if (playerScore < computerScore) {
            const displayFinalScore = document.querySelector('.finalWinner');
            displayFinalScore.textContent = "YOU LOSE!";

            const buttons = document.querySelectorAll('button');    //Removes buttons so game ends.
            buttons.forEach(button => {
                button.remove();
        });

    

    }};



return 0;

}


const rockButton = document.querySelector('.rock');         //Selects the rock button
rockButton.addEventListener('click', () => {
    game("rock");  
                });                //When clicked, calls the game passing rock as player input.

const paperButton = document.querySelector('.paper');         //Selects the rock button
paperButton.addEventListener('click', () => {
    game("paper");  
                });                //When clicked, calls the game passing rock as player input.


const scissorsButton = document.querySelector('.scissors');         //Selects the rock button
scissorsButton.addEventListener('click', () => {
    game("scissors");  
                });                //When clicked, calls the game passing rock as player input.
