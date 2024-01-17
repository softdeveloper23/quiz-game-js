const prompt = require('prompt-sync')();

console.log("Welcome to the Computer Hardware Quiz!");

let correctAnswers = 0;

const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer1 = "CPU"; // Answer needs to be in all caps

if (answer1.toUpperCase() === correctAnswer1) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect!");
}

const answer2 = prompt("What is the thing you type words on? ");
const correctAnswer2 = "KEYBOARD"; // Answer needs to be in all caps

if (answer2.toUpperCase() === correctAnswer2) {
  console.log("Correct!");
    correctAnswers++;
} else {
  console.log("Incorrect!");
}

const answer3 = prompt("What does PC stand for? ");
const correctAnswer3 = "PERSONAL COMPUTER"; // Answer needs to be in all caps

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect!");
}

console.log("You got " + correctAnswers + " out of 3 questions correct!");