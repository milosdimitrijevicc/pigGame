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
  const setPlayer1CurrentScoreReset = () => player1CurrentScore = 0;
  const setPlayer2CurrentScoreReset = () => player2CurrentScore = 0;

  

  //Display elements
  const displayPlayer1CurrentScore = () => {

  }

  return {getPlayer1CurrentScore, getPlayer2CurrentScore, getPlayer1TotalScore, getPlayer2TotalScore, getBtnNewGame, getBtnRoll, getHold, setPlayer1CurrentScore, setPlayer2CurrentScore, setPlayer1TotalScore, setPlayer2TotalScore, getActivePlayer, setActivePlayer, displayPlayer1CurrentScore, setPlayer1CurrentScoreReset, setPlayer2CurrentScoreReset};
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

  if (game.getActivePlayer() === 'player1') { //STARTNA POZICIJA 
    
    if (rollDice !== 1) { //AKO PLAYER 1 NIJE ROLAO 1 IGRA

      rollDice; //BACA SE KOCKICA I DOBIJA SE RANDOM BROJ OD 1 DO 6
      console.log(`Player 1 rolled ${rollDice}`); 
      game.setPlayer1CurrentScore(rollDice); //PLAYER 1 SCORE JE NA POCETKU 0 I SAD MU SE DODAJE BROJ SA KOCKICE 
      console.log(`Player 1 current score = ${game.getPlayer1CurrentScore()}`);
      ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore()); //SABRANI BROJ SE UPISUJE U IGRU KAKO BI IGRAC VIDEO KOLIKO IMA POENA

    } else {
      console.log(`💥Player 1 rolled 1💥`); 
      game.setPlayer1CurrentScoreReset(); //KADA PLAYER 1 IZVUCE 1 NJEGOV SCORE SE VRACA NA 0
      console.log(`Player 1 score = ${game.getPlayer1CurrentScore()}`);
      ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore()) //PRIKAZUJE SE NA EKRANU DA JE SCORE PLAYERA 1 = 0
      game.setActivePlayer('player2'); //SADA IGRA PLAYER 2
    }

  
  } else if (game.getActivePlayer() === 'player2') { //SADA IGRA PLAYER 2

    if (rollDice !== 1) {

      rollDice;
      console.log(`Player 2 rolled ${rollDice}`);
      game.setPlayer2CurrentScore(rollDice);
      console.log(`Player 2 current score = ${game.getPlayer2CurrentScore()}`);
      ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore());


    } else {
      console.log(`💥Player 2 rolled 1💥`);
      game.setPlayer2CurrentScoreReset();
      console.log(`Player 2 score = ${game.getPlayer2CurrentScore()}`);
      ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore())
      game.setActivePlayer('player1');
    }

  }
  
  
})