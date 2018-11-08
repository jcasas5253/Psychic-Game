//Choises for the computer to make
var robotChoises = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//setting all to zero
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 10;
let guessedLetters = [];
var letterToGuess = null;

//Lets the computer choose a random letter from the robotChoises
var robotGuess = robotChoices[Math.floor(Math.random() * robotChoices.length)];