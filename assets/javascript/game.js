//set all to 0
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

//Choices for the computer to choice from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function(event) {
//computer randomly picks letter
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
//case sensetive
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//pushing user guesses to the users guesses thus far
guessesSoFar.push(userGuess);

if (userGuess == computerGuess) {
    wins++;
    alert('Good Job Detective! You Win!')
    break;
}
}







