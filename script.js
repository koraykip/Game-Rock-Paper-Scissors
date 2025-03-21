
let leaver; computerScore = 0, humanScore = 0;
const totalRounds = 3; 

console.clear();
console.log("%cRock Paper Scissor Game", "color:white; font-size: 2rem; font-weight: bolder; text-shadow: 2px 2px 2px black;background: grey;");
console.log("Reload page to restart the game.");

// randomly returns one of the following string values: “rock”, “paper” or “scissor”
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// returns the human choice "rock", "paper" or "scissor"
function getHumanChoice(round) {
    while (true) {
        humanChoice = prompt(`🕹️ Round ${round} of ${totalRounds}\nPlease enter your choice: rock, paper or scissor \n(or cancel to leave the game)`);
        if (humanChoice === null) return null;

        humanChoice = humanChoice.toLowerCase().trim();
        if (["rock", "paper", "scissor"].includes(humanChoice)) return humanChoice;

        console.log("❌ Invalid input. Please enter rock, paper or scissor.");
    }
}

function playRound(round) {
    // Get choices
    let humanChoice = getHumanChoice(round);
    if (humanChoice === null) {leaver=true; return false;} // Stop game if user cancels

    let computerChoice = getComputerChoice();
    console.log(`🖥️ Computer chose: ${computerChoice}  🆚  🧑 Human chose: ${humanChoice}`);

    //  tie         
    if (computerChoice === humanChoice) {
        console.log("⚖️ It's a tie!");
    }
    // computer wins
    else if (   computerChoice === "rock" && humanChoice === "scissor" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissor" && humanChoice === "paper") { 
                    computerScore++; 
                    // console.log("%c💻 Computer wins this round!", "color:red; font-weight:bold;");
                    console.log(`%cYou lose! 💻 ${computerChoice} beats 🧑 ${humanChoice}`, "color:red; font-weight:bold;");
                } 
    // human wins
    else { 
                    humanScore++; 
                    // console.log("%c🧑 Human wins this round!", "color:green; font-weight:bold;");
                    console.log(`%cYou win! 🧑 ${humanChoice} beats 💻 ${computerChoice}`, "color:green; font-weight:bold;");

                } 
    // Print scores
    console.log(`🏆 Score - Computer: ${computerScore}  🆚  Human: ${humanScore}`);
}


// Play 5 rounds
for (let i = 1; i <= totalRounds; i++) {
    if (playRound(i) === false) break; // Stop game if user cancels
}

// Final result
const gameOver = () => console.log(`\n%cGame Over! Final Score - Computer: ${computerScore}  🆚  Human: ${humanScore}`, "color:orange; font-size: 1.4rem; font-weight: bold;");

// Final print
if (leaver == true) {
    console.log(`%c💡 Give it a shot – you might love it!`, "font-size:1rem; font-weight:bold;");
} else if (computerScore > humanScore) {
    gameOver();
    console.log("%c💻 Computer wins the game!", "color:red; font-size:1.5rem; font-weight:bold;");
} else if (humanScore > computerScore) {
    gameOver();
    console.log("%c🎉 Human wins the game!", "color:green; font-size:1.5rem; font-weight:bold;");
} else {
    gameOver();
    console.log("%c⚖️ It's a tie!", "color:blue; font-size:1.5rem; font-weight:bold;");
} 