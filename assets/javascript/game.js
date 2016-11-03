
// computer guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Create an array that lists out all of the options

var wins = 0
var losses = 0
var guessesleft = 0
var guessessofar = 0



// user presses letter key

document.onkeyup = function(event) {


  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

// Sets the computer guess variable to select random characters
  var computerGuess = guessesLeft[Math.floor(Math.random()*guessesLeft.length)];
  console.log(computerGuess);

// // if letter is the same as comp letter, user wins / win counter increases
document.querySelector("#wins").innerHTML= "wins:" + wins;
// // if letter is different than comp leter, user loses / // loss counter increases
document.querySelector("#loses").innerHTML= "loses" + loses;
// guess is recorded in "your guesses so far"
document.querySelector("#guessesleft").innerHtml= "guessesleft" + computerChoices;
// "guesses left" is populated
document.querySelector("#guessessofar").innerHTML= "guessessofar:" + guessessofar;


var computerGuess = computerChoices [Math.floor(Math.random( * computerChoices.length)];


};

// after all guesses are gone, restart game
