// Function to generate a random number between 1 and 100
/*function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to get player input and validate it
function getPlayerInput() {
    let validInput = false;
    let guess;
    
    while (!validInput) {
        guess = parseInt(prompt("Enter a guess between 1 and 100: "), 10);
        
        // Checking if the input is a valid number and within range
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Invalid input. Please enter a valid number between 1 and 100.");
        } else {
            validInput = true;
        }
    }
    
    return guess;
}

// Function to check if the guess is too low, too high, or correct
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "Your guess is too low.";
    } else if (playerGuess > correctNumber) {
        return "Your guess is too high.";
    } else {
        return "Correct! You guessed the number."; 
    }
}

// Function to run the main game logic
function game() {
    const correctNumber = generateRandomNumber();// Generate random number
    
    // Initializing attempt counter
    let attempts = 0;
    const maxAttempts = 6;
    let playerWon = false;
    
    // Game loop for guessing
    while (attempts < maxAttempts) {
        const playerGuess = getPlayerInput();
        attempts++;
        
        const result = checkGuess(playerGuess, correctNumber);
        console.log(result);  // Outputing results to console (in place of alert)
        
        if (result === "Correct! You guessed the number.") {
            playerWon = true;
            break;  // Exiting loop if the player guessed correctly
        }
        
        console.log(`Attempts left: ${maxAttempts - attempts}`);
    }
    
    // Determining outcome
    if (playerWon) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        let score = Math.max(0, 100 - attempts * 10);  // Rewarding with points based on attempts
        console.log(`Your score: ${score} points.`);
    } else {
        console.log("Sorry, you lost! The correct number was: " + correctNumber);
        console.log(`Attempts used: ${attempts}`);
    }
}


game();//calling the game function to start the game









*/

























//  Function to randomly choose rock, paper, or scissors for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//  Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // making both selections to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Comparing choices and determine the result
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    }

    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'scissors') ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
        case 'paper':
            return (computerSelection === 'rock') ? "You win! Paper beats rock." : "You lose! Scissors beats paper.";
        case 'scissors':
            return (computerSelection === 'paper') ? "You win! Scissors beats paper." : "You lose! Rock beats scissors.";
        default:
            return "Invalid selection. Please choose rock, paper, or scissors.";
    }
}


//  Game function to play 5 rounds and keep score
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    for (let i = 0; i < rounds; i++) {
        // Get user input using prompt
        let playerSelection = prompt(`Round ${i + 1}: Choose rock, paper, or scissors`).trim();

        // Ensure input is valid
        if (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
            alert("Invalid input. Please enter rock, paper, or scissors.");
            i--; // Decrease counter to retry this round
            continue;
        }

        // Get computer's random choice
        let computerSelection = computerPlay();
        
        // Play round and get result
        let result = playRound(playerSelection, computerSelection);
        alert(result); // Show the round result

        // Update scores based on the result
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        // Display current score after each round
        alert(`Current score: You - ${playerScore} | Computer - ${computerScore}`);
    }

    // Announce the winner after 5 rounds
    if (playerScore > computerScore) {
        alert(`You win the game! Final score: You - ${playerScore} | Computer - ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lose the game! Final score: You - ${playerScore} | Computer - ${computerScore}`);
    } else {
        alert(`It's a tie game! Final score: You - ${playerScore} | Computer - ${computerScore}`);
    }
}

// Call the game function to start the game
game();