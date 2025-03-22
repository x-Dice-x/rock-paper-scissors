function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerHand =
        computerChoice === 1 ? "Rock" : computerChoice === 2 ? "Paper" : "Scissors";
    return computerHand;
}

function getHumanChoice() {
    let humanChoice = prompt("What's ur play  (Rock , Paper , Scissors ) : ");
    let firstChar = humanChoice.at(0).toUpperCase();
    firstChar = firstChar.toUpperCase();
    let restOfString = humanChoice.slice(1);
    restOfString = restOfString.toLowerCase();
    let humanHand = firstChar + restOfString;
    return humanHand;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let Message = "";
        if (humanChoice === computerChoice) {
            Message = `It's a tie ${humanChoice} and ${computerChoice}`;
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            Message = `You Lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            Message = `You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            Message = `You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            Message = `You Lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            Message = `You Lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            Message = `You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        }
        console.log(Message);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }

        if(humanScore > computerScore){
            console.log(`Congragulations! You got ${humanScore} points You won the game!`);
        }else if(humanScore < computerScore){
            console.log(`Yoink You lost! the computer got ${computerScore} points better luck next time`);
        }else{
            console.log(`lol it's a tie let's see who will win next time !`);
        }
}


playGame();






























