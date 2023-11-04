'use strict';

//Math.trunc corta os nunmeros decimais
//Math.random da um numero decimal aleatorio * 20 para chegar ate ao numero 20
//#VAR
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


//#DRY
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//#DRY
const typeNumber = function (value) {
  document.querySelector('.number').textContent = value;
};

typeNumber(secretNumber);
typeNumber('?');
//Click do botao Check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('😵 Number Not Valid');

    //Player ganha
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct number!');

    //style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Player esta alto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Click do botao Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // falta resetar number variables
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Reset the score
  document.querySelector('.score').textContent = score;
  //Reset da frase
  displayMessage('Start guessing...');
  //Reset input
  typeNumber('?');
  document.querySelector('.guess').value = '';
  //Reset background
  document.querySelector('body').style.backgroundColor = '#222';
  //Reset widht
  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.message').textContent = textContent;
});
