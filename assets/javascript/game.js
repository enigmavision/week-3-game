// Variables

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesleft = 0;
var guessessofar = 0;
var wrongGuessArray = [];
var answerArray = [];

var random = Math.random();
var indexRandom = random * computerChoices.length;
var flooredNumber = Math.floor(indexRandom);
var randomLetters = computerChoices[flooredNumber];

//Push data into wrong array, use the array to push data into html create function for user guess to push into wrong array.

// Functions

document.onkeyup = function(event) {

  if (userGuess == computerGuess){
    wins++;
    guessessofar++;
    guessessleft++;
  }
  else {
        losses++;
        guessesleft++;
        guessessofar++;
    }

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  for (var i = 0; i <randomLetters.length; i++){
    if (userGuess === randomLetters){
      wins++
      guessesLeft--;
    } else{
      losses++
      guessesLeft--;
    }

  }

  var wrongGuessArray;
  computerChoices.push("userGuess");
  console.log ("userGuess = " + userGuess);


 if (wrongGuessArray.indexOf(userGuess) === -1) {
      if (answerArray.indexOf(userGuess) === -1) {
          (wrongGuessArray.push(guessessofar) === -1)
            guessessofar++;
            console.log("guessessofar = " + guessessofar);
          }
        }
  // Setsthe computer guess variable to select random characters

// // if letter is the same as comp letter, user wins / win counter increases


function updateStuff(){
  document.getElementById("wins").innerHTML= "wins " + wins;
  // // if letter is different than comp leter, user loses / // loss counter increases
  document.getElementById("losses").innerHTML= "losses " + losses;
  // guess is recorded in "your guesses so far"
  document.getElementById("guessesleft").innerHTML= "computerChoices";
  // "guesses left" is populated
  document.getElementById("guessessofar").innerHTML= "userGuess " + computerGuess;
  document.getElementById("guessesRemaining").innerHTML= answerArray;
};






};//end keypress


// after all guesses are gone, restart game
