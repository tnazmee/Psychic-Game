//Arrays of letters
var computerChoices = [
    "a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", 
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];

// Number of wins, loses, and guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = 9;
var printGSF = [];

// Variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");

// To start a new game
var newGame = function() {
    guessesLeft = 9;
    guesses = 9;
    printGSF = [];   
}


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  debugger;
  // Determines which key was pressed.
  var userGuess = event.key;
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  // Display the amount of wins, loses, guesses left, and guesses so far
  if (userGuess === computerGuess) {
    wins++;
    guessesLeft--;
    printGSF.push(userGuess);
  } 
  else {
    losses++
    guessesLeft--;
    printGSF.push(userGuess);
  }

  if (guessesLeft === 0) {
    newGame();
  }
  
  // Display the arrays
  document.getElementById("guesses").innerHTML = "Your guesses so far: " + printGSF.join(", ");
  
  // Hide the directions
  directionsText.textContent = "";
  // Display the user/computer guesses and wins/losses.
  userChoiceText.textContent = "You chose: " + userGuess;
  computerChoiceText.textContent = "The computer chose: " + computerGuess;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Loses:" + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  guesses.Text = "Your guesses so far: " + guessesSoFar;
    
};