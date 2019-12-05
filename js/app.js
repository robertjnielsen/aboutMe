/* eslint-disable eol-last */
'use strict';
var firstName = '';
var score = 0;

function greeting() {
  alert('Welcome to my About Me page!');
  firstName = prompt('First, please let me know your first name.');
  console.log('The user\'s first name is ' + firstName + '.');
  alert('Thanks for visiting my page ' + firstName + '.');
}

function question1() {
  alert('How about we play a guessing game! I\'ll ask you five yes or no questions. Simply type a "Y" or a "N" to answer. After we finish, I\'ll let you know how you did, and you can review my page!');
  var questionOne = prompt('Question One: Was I ever in the military? \n (Remember, answer with Y for Yes or N for No.)');
  console.log(questionOne);
  var oneUpper = questionOne.toUpperCase();
  if (oneUpper === 'Y' || oneUpper === 'YES') {
  // console.log('Correct! I served in the US Army.');
    alert('Correct! I served in the US Army.');
    score++;
  } else {
  // console.log('Incorrect. I served in the US Army.');
    alert('Incorrect. I served in the US Army.');
  }
}

function question2() {
  var questionTwo = prompt('Question Two: Do I have any children? \n (Remember, answer with Y for Yes or N for No.)');
  console.log(questionTwo);
  var twoUpper = questionTwo.toUpperCase();
  if (twoUpper === 'Y' || twoUpper === 'YES') {
  // console.log('Correct! I have one son.');
    alert('Correct! I have one son.');
    score++;
  } else {
  // console.log('Incorrect. I have one son.');
    alert('Incorrect. I have one son.');
  }
}

function question3() {
  var questionThree = prompt('Question Three: Do I have a degree? \n (Remember, answer with Y for Yes or N for No.)');
  console.log(questionThree);
  var threeUpper = questionThree.toUpperCase();
  if (threeUpper === 'N' || threeUpper === 'NO') {
  // console.log('Correct! I am still currently working towards my bachelors.');
    alert('Correct! I am still currently working towards my bachelors.');
    score++;
  } else {
  // console.log('Incorrect. I am still currently working towards my bachelors.');
    alert('Incorrect. I am still currently working towards my bachelors.');
  }
}

function question4() {
  var questionFour = prompt('Question Four: Can I cook? \n (Remember, answer with Y for Yes or N for No.)');
  console.log(questionFour);
  var fourUpper = questionFour.toUpperCase();
  if (fourUpper === 'Y' || fourUpper === 'YES') {
  // console.log('Correct! I was a short-order cook for several years.');
    alert('Correct! I was a short-order cook for several years.');
    score++;
  } else {
  // console.log
    alert('Incorrect. I was actually a short-order cook for several years.');
  }
}

function question5() {
  var questionFive = prompt('Question Five: Do I enjoy the cold? \n (Remember, answer with Y for Yes or N for No.)');
  console.log(questionFive);
  var fiveUpper = questionFive.toUpperCase();
  if (fiveUpper === 'N' || fiveUpper === 'NO') {
  // console.log('Correct! I absolutely cannot stand being cold.');
    alert('Correct! I absolutely cannot stand being cold.');
    score++;
  } else {
  // console.log('Incorrect. I absolutely cannot stand being cold.');
    alert('Incorrect. I absolutely cannot stand being cold.');
  }
}

function question6() {
// Random Number Guessing Game.

  // Generates a random number between 0 - 10.
  var randomNum = Math.ceil(Math.random() * 10);
  var correctGuess = false;

  // Gives the user 4 attempts to guess, while informing them if the # is higher or lower.
  for (var attemptsRemaining = 4; attemptsRemaining > 0; attemptsRemaining--) {
    var numAnswer = prompt('Guess a number between 1 - 10');
    if (numAnswer > randomNum) {
      alert('The correct answer is lower. ' + (attemptsRemaining - 1) + ' attempts remaining.');
    } else if (numAnswer < randomNum) {
      alert('The correct number is higher. ' + (attemptsRemaining - 1) + ' attempts remaining.');
    } else {
      alert('Correct!');
      attemptsRemaining = 0;
      score++;
    }
  }

  // Inform the user of the correct number if all guesses were incorrect.
  if (attemptsRemaining === 0 && correctGuess === false) {
    alert('The correct answer was ' + randomNum + '.');
  }
}

function question7() {
// Create an array of correct responses.
  var favColors = ['BLUE', 'GREEN', 'BROWN'];

  // Gives the user 6 attempts to guess one of the correct colors.
  for (var colorsRemaining = 6; colorsRemaining > 0; colorsRemaining--) {
    var colorGuess = prompt('Guess one of my favorite colors.');
    var colorGuessUp = colorGuess.toUpperCase();
    if (colorGuessUp === favColors[0] || colorGuessUp === favColors[1] || colorGuessUp === favColors[2]) {
      alert('Correct! ' + colorGuessUp + ' is one of my favorite colors.');
      colorsRemaining = 0;
      score++;
    } else {
      alert('That\'s not one of my favorite colors. ' + (colorsRemaining - 1) + ' guesses remaining.');
    }
  }

  // Informs the user of all the correct favorite colors.
  alert('My favorite colors are ' + favColors[0] + ', ' + favColors[1] + ', and ' + favColors[2] + '.');
}

function goodbye() {
  alert('Thank you for playing my guessing game ' + firstName + '. I hope you enjoyed it! You scored ' + score + ' / 7!');
}

greeting();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
goodbye();

