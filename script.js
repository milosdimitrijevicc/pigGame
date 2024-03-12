const game = () => {

  //Current Score
  const player1CurrentScore = document.querySelector('#current--1');
  const player2CurrentScore = document.querySelector('#current--2');
  //Total Score
  const player1TotalScore = document.querySelector('#score--1');
  const player2TotalScore = document.querySelector('#score--2');
  //Buttons
  const btnNewGame = document.querySelector('#btn--new');
  const btnRoll = document.querySelector('#btn--roll');
  const btnHold = document.querySelector('#btn--hold');


  //Getters
  const getPlayer1CurrentScore = player1CurrentScore;
  const getPlayer2CurrentScore = player2CurrentScore;
  const getPlayer1TotalScore = player1TotalScore;
  const getPlayer2TotalScore = player2TotalScore;


  //Setters
  const setPlayer1CurrentScore = (value) => player1CurrentScore = player1CurrentScore + value;
  const setPlayer2CurrentScore = (value) => player2CurrentScore = player2CurrentScore + value;
  const setPlayer1TotalScore = (value) => player1TotalScore = player1TotalScore + value;
  const setPlayer2TotalScore = (value) => player2TotalScore = player2TotalScore + value;
}