let computerScore = 0, humanScore = 0;
const totalRounds = 5; // Anzahl der Runden

console.log("%cRock Paper Scissor Game", "color:white; font-size: 2rem; font-weight: bolder; text-shadow: 2px 2px 2px black;background: grey;");

// Randomly returns "rock", "paper" or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Returns the human choice: "rock", "paper" or "scissors"
function getHumanChoice(round) {
    while (true) {
        let input = prompt(`🕹️ Round ${round} of ${totalRounds}\nPlease enter your choice: rock, paper or scissors (or cancel to leave the game)`);
        if (input === null) return null;

        let choice = input.toLowerCase().trim();
        if (["rock", "paper", "scissors"].includes(choice)) return choice;

        console.log("❌ Invalid input. Please enter rock, paper or scissors.");
    }
}

function playRound(round) {
    let humanChoice = getHumanChoice(round);
    if (humanChoice === null) return false; // Stop game if user cancels

    let computerChoice = getComputerChoice();
    console.log(`🖥️ Computer chose: ${computerChoice}  🆚  🧑 Human chose: ${humanChoice}`);

    // Determine round winner
    if (computerChoice === humanChoice) {
        console.log("⚖️ It's a tie!");
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) { 
        computerScore++; 
        console.log("%c💻 Computer wins this round!", "color:red; font-weight:bold;");
    } else { 
        humanScore++; 
        console.log("%c🧑 Human wins this round!", "color:green; font-weight:bold;");
    } 

    // Print scores
    console.log(`🏆 Score - Computer: ${computerScore}  🆚  Human: ${humanScore}`);
}

// Play rounds
for (let i = 1; i <= totalRounds; i++) {
    if (playRound(i) === false) break; // Stop game if user cancels
}

// Final result
console.log(`\n%cGame Over! Final Score - Computer: ${computerScore}  🆚  Human: ${humanScore}`, "color:orange; font-size: 1.4rem; font-weight: bold;");
if (computerScore > humanScore) {
    console.log("%c💻 Computer wins the game!", "color:red; font-size:1.5rem; font-weight:bold;");
} else if (humanScore > computerScore) {
    console.log("%c🎉 Human wins the game!", "color:green; font-size:1.5rem; font-weight:bold;");
} else {
    console.log("%c⚖️ It's a tie!", "color:blue; font-size:1.5rem; font-weight:bold;");
}
