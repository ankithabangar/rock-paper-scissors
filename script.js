function getComputerChoice() {
  //Randomly return either Rock, Paper or scissors
  //Use random function to return the words rock, paper or scissors
  //No input from the user
  //Desired output is getting rock, paper or scissors
  //1=rock, 2=paper, 3=scissors
  //generate random number between 1-3
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) return "rock";
  else if (random == 2) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  //It should play single round of the game and then return a string like "You Lose! Paper beats Rock".
  //Make playerSelection caseSensitive
  //Rock beats scissors
  //Paper beats Rock
  //Scissors beat Paper
  //if player = rock
  //if computer = scissors then player wins
  function consoling() {
    console.log("Player", playerScore);
    console.log("Computer", computerScore);
  }

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") return "It's a tie!";
    else if (computerSelection == "paper") {
      computerScore++;
      consoling();
      return "You lose! Paper beats Rock!";
    } else {
      playerScore++;
      console.log("Player", playerScore);
      console.log("Computer", computerScore);
      return "You win! Rock beats Scissors!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      consoling();
      return "You win! Paper beats Rock!";
    } else if (computerSelection == "paper") return "It's a tie!";
    else {
      computerScore++;
      consoling();
      return "You lose! Scissors beat Paper!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore++;
      consoling();
      return "You lose! Rock beats Scissors!";
    } else if (computerSelection == "paper") {
      playerScore++;
      consoling();
      return "You win! Scissors beat paper!";
    } else return "It's a tie!";
  }
}

function game() {
  //Use previous function inside of this to play 5 times
  //keeps score and reports a winner or loser at the end
  //for let i=0;i<5;i++
  //playRound();
  //let computerScore
  //let playerScore
  //if computerScore > playerScore return Computer wins else ....
  //increment everytime someone wins

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors!");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) return "You won!";
  else if (playerScore == computerScore) return "It's a tie!";
  else return "You lost!";
}

//console.log(playRound(playerSelection, computerSelection));
let computerScore = 0;
let playerScore = 0;
console.log(game());
