// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 0;

// While loop to keep asking until the user guesses the correct number
while (userGuess !== correctNumber) {
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

    if (userGuess < 1 || userGuess > 10) {
        console.log("Please enter a number between 1 and 10.");
    } else if (userGuess < correctNumber) {
        console.log("Your guess is too low.");
    } else if (userGuess > correctNumber) {
        console.log("Your guess is too high.");
    } else {
        console.log("Congratulations! You guessed the correct number: " + correctNumber);
    }
}
