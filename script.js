'use strict';
//funcs
const changeToPlayer1 = () => {
  player0El.classList.remove('player--active');
  player1El.classList.add('player--active');
  cScore0El.textContent = 0;
  currentScore = 0;
};

const changeToPlayer0 = () => {
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  cScore1El.textContent = 0;
  currentScore = 0;
};

const resetGame = () => {
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  changeToPlayer0();
  score0El.textContent = 0;
  score1EL.textContent = 0;
};

const Win = playerEl => {
    playerEl.classList.remove('player--active');
    playerEl.classList.add('player--winner');
}

const whoWins = score => {
  if (score >= 100) {
    if (score === Number(score0El.textContent)) {
      Win(player0El);

    } else {
        Win(player1El);
    }
  }
};


// Selecting elements
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const cScore0El = document.getElementById('current--0');
const cScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Start point
let currentPlayer = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let currentScore = 0;
score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (player0El.classList.contains('player--active')) {
    if (dice !== 7) {
      currentScore += dice;
      cScore0El.textContent = currentScore;
    } else {
      changeToPlayer1();
    }
  } else {
    if (dice !== 7) {
      currentScore += dice;
      cScore1El.textContent = currentScore;
    } else {
      changeToPlayer0();
    }
  }
});
//Hold Button
btnHold.addEventListener('click', function () {
  if (player0El.classList.contains('player--active')) {
    score0El.textContent = Number(score0El.textContent) + currentScore;
    whoWins(Number(score0El.textContent));
    changeToPlayer1();
  } else {
    score1EL.textContent = Number(score1EL.textContent) + currentScore;
    whoWins(Number(score1EL.textContent));
    changeToPlayer0();
  }
});

//New Game Button
btnNew.addEventListener('click', resetGame);


//Refact this shit