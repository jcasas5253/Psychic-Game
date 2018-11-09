//set all to 0
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

//audio
var winner = new Audio("./assets/sounds/Ta Da-SoundBible.com-1884170640.mp3");
var looser = new Audio("./assets/sounds/Sad_Trombone-Joe_Lamb-665429450.mp3");

//Choices for the computer to choice from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function(event) {
//computer randomly picks letter
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
//case sensetive
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//pushing user guesses to the users guesses thus far
guessesSoFar.push(userGuess);
//if the user wins game resets and they get alert
if (userGuess == computerGuess) {
    wins++;
    alert('Good Job Detective! You Win!')
    winner.play();
    guessesLeft = 10;
    guessesSoFar.length = 0;
}
//if user looses game resets and they get alert
else if (guessesLeft == 0) {
    losses++;
    alert('Oh No! Looks like you need more training.')
    looser.play();
    guessesLeft = 10;
    guessesSoFar.length = 0;
}
//subtract users guesses
else if (userGuess !== computerGuess){
    guessesLeft--;
}

// Displaying the numbers in HTML    
var html = "<p>Total Wins: " + 
 wins + 
"</p>" +
 "<p>Total Losses: " + 
losses + 
 "</p>" +
"<p>Guesses Left: " + 
 guessesLeft + 
 "</p>" +
 "<p>Your Guesses so far: " +
 guessesSoFar +
 "</p>"
 ;
 // Placing the HTML into the game
 document.querySelector('#game').innerHTML = html;
}








