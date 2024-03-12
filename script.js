//Current Score
const player1CurrentScoreEl = document.querySelector('#current--1');
const player2CurrentScoreEl = document.querySelector('#current--2');
//Total Score
const player1TotalScoreEl = document.querySelector('#score--1');
const player2TotalScoreEl = document.querySelector('#score--2');
//Buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');





//GAME LOGIC STATE
const gameCreator = () => {
  let player1CurrentScore = 0;
  let player2CurrentScore = 0;
  let player1TotalScore = 0;
  let player2TotalScore = 0;
  let activePlayer = 'player1';

  //Getters
  const getPlayer1CurrentScore = () => player1CurrentScore;
  const getPlayer2CurrentScore = () => player2CurrentScore;
  const getPlayer1TotalScore = () => player1TotalScore;
  const getPlayer2TotalScore = () => player2TotalScore;
  const getBtnNewGame = () => btnNewGame;
  const getBtnRoll = () => btnRoll;
  const getHold = () => btnHold;
  const getActivePlayer = () => activePlayer;


  //Setters
  const setPlayer1CurrentScore = (value) => player1CurrentScore = player1CurrentScore + value;
  const setPlayer2CurrentScore = (value) => player2CurrentScore = player2CurrentScore + value;
  const setPlayer1TotalScore = (value) => player1TotalScore = player1TotalScore + value;
  const setPlayer2TotalScore = (value) => player2TotalScore = player2TotalScore + value;
  const setActivePlayer = (value) => activePlayer = value;
  

  //Display elements
  const displayPlayer1CurrentScore = () => {

  }

  return {getPlayer1CurrentScore, getPlayer2CurrentScore, getPlayer1TotalScore, getPlayer2TotalScore, getBtnNewGame, getBtnRoll, getHold, setPlayer1CurrentScore, setPlayer2CurrentScore, setPlayer1TotalScore, setPlayer2TotalScore, getActivePlayer, setActivePlayer, displayPlayer1CurrentScore};
}






//GAME UI STATE 
const gameUI = () => {

  //Player 1
  const getPlayer1CurrentScoreEl = () => player1CurrentScoreEl;
  const setPlayer1CurrentScoreEl = (value) => player1CurrentScoreEl.textContent = value;
  //Player 2
  const getPlayer2CurrentScoreEl = () => player2CurrentScoreEl;
  const setPlayer2CurrentScoreEl = (value) => player2CurrentScoreEl.textContent = value;

  
  return {getPlayer1CurrentScoreEl, setPlayer1CurrentScoreEl, getPlayer2CurrentScoreEl,setPlayer2CurrentScoreEl}
}


//CALLING STATES
const game = gameCreator();
const ui = gameUI();




btnRoll.addEventListener('click' , function(){
  
  let rollDice = Math.floor((Math.random() * 6) +1);

  if (game.getActivePlayer() === 'player1') {
    
    if (rollDice !== 1) {

      rollDice;
      console.log(`Player 1 rolled ${rollDice}`);
      game.setPlayer1CurrentScore(rollDice);
      console.log(`Player 1 current score = ${game.getPlayer1CurrentScore()}`);
      ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore());

    } else {
      console.log(`💥Player 1 rolled 1💥`);
      game.setActivePlayer('player2');
    }

  
  } else if (game.getActivePlayer() === 'player2') {

    if (rollDice !== 1) {

      rollDice;
      console.log(`Player 2 rolled ${rollDice}`);
      game.setPlayer2CurrentScore(rollDice);
      console.log(`Player 2 current score = ${game.getPlayer2CurrentScore()}`);
      ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore());


    } else {
      console.log(`💥Player 2 rolled 1💥`);
      game.setActivePlayer('player1');
    }

  }
  
  
})



// if (num === 0) {
//   game.setActivePlayer('player2');
// }

// if (game.getActivePlayer() === 'player1') {
//   num--;
// } else if (game.getActivePlayer() === 'player2'){
//   num = num + 1;
// }