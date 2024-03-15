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
//Dice
const diceImg = document.querySelector('.dice');
//Player 1
const player1Wrapper = document.querySelector('.player--1');
const player2Wrapper = document.querySelector('.player--2');


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
  const setPlayer1TotalScoreReset = () => player1TotalScore = 0;
  const setPlayer2TotalScoreReset = () => player2TotalScore = 0;

  

  //Display elements
  const displayPlayer1CurrentScore = () => {

  }

  return {getPlayer1CurrentScore, getPlayer2CurrentScore, getPlayer1TotalScore, getPlayer2TotalScore, getBtnNewGame, getBtnRoll, getHold, setPlayer1CurrentScore, setPlayer2CurrentScore, setPlayer1TotalScore, setPlayer2TotalScore, getActivePlayer, setActivePlayer, displayPlayer1CurrentScore, setPlayer1CurrentScoreReset, setPlayer2CurrentScoreReset, setPlayer1TotalScoreReset, setPlayer2TotalScoreReset};
}


//GAME UI STATE 
const gameUI = () => {

  //Player 1 Current Score
  const getPlayer1CurrentScoreEl = () => player1CurrentScoreEl;
  const setPlayer1CurrentScoreEl = (value) => player1CurrentScoreEl.textContent = value;
  //Player 2 Current Score
  const getPlayer2CurrentScoreEl = () => player2CurrentScoreEl;
  const setPlayer2CurrentScoreEl = (value) => player2CurrentScoreEl.textContent = value;

  //Player 1 Total Score
  const getPlayer1TotalScoreEl = () => player1TotalScoreEl;
  const setPlayer1TotalScoreEl = (value) => player1TotalScoreEl.textContent = value;
  //Player 2 Total Score 
  const getPlayer2TotalScoreEl = () => player2TotalScoreEl;
  const setPlayer2TotalScoreEl = (value) => player2TotalScoreEl.textContent = value;
  
  return {getPlayer1CurrentScoreEl, setPlayer1CurrentScoreEl, getPlayer2CurrentScoreEl,setPlayer2CurrentScoreEl, getPlayer1TotalScoreEl, setPlayer1TotalScoreEl, getPlayer2TotalScoreEl, setPlayer2TotalScoreEl}
}


//CALLING STATES
const game = gameCreator();
const ui = gameUI();





//ROLLING DICE
btnRoll.addEventListener('click' , function(){
  
  let rollDice = Math.floor((Math.random() * 6) +1);
  diceImg.src = `./dice-${rollDice}.png`; //SLIKA KOCKICE SE MENJA U ZAVISNOSTI OD BROJA KOJI IZRACUNA MATH.RANDOM

  if (game.getActivePlayer() === 'player1') { //STARTNA POZICIJA 
    
    if (rollDice !== 1) { //AKO PLAYER 1 NIJE ROLAO 1 IGRA

      // rollDice; //BACA SE KOCKICA I DOBIJA SE RANDOM BROJ OD 1 DO 6
      console.log(`Player 1 rolled ${rollDice}`); 
      game.setPlayer1CurrentScore(rollDice); //PLAYER 1 SCORE JE NA POCETKU 0 I SAD MU SE DODAJE BROJ SA KOCKICE 
      console.log(`Player 1 current score = ${game.getPlayer1CurrentScore()}`);
      ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore()); //SABRANI BROJ SE UPISUJE U IGRU KAKO BI IGRAC VIDEO KOLIKO IMA POENA

      if (game.getPlayer1CurrentScore() + game.getPlayer1TotalScore() >= 50) {
        game.setPlayer1TotalScore(game.getPlayer1CurrentScore());
        ui.setPlayer1TotalScoreEl(game.getPlayer1TotalScore())
        player1Wrapper.classList.add('player--winner');
        btnRoll.disabled = true;
        btnHold.disabled = true;
      } 

      //HOLDING CURRENT SCORE PLAYER 1
      btnHold.addEventListener('click' , function(){
        game.setPlayer1TotalScore(game.getPlayer1CurrentScore());
        ui.setPlayer1TotalScoreEl(game.getPlayer1TotalScore());
        game.setPlayer1CurrentScoreReset(); //KADA PLAYER 1 IZVUCE 1 NJEGOV SCORE SE VRACA NA 0
        ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore()); //PRIKAZUJE SE NA EKRANU DA JE SCORE PLAYERA 1 = 0
        game.setActivePlayer('player2'); //SADA IGRA PLAYER 2
        player2Wrapper.classList.add('player--active');
        player1Wrapper.classList.remove('player--active');
      })

    } else {
      console.log(`💥Player 1 rolled 1💥`); 
      game.setPlayer1CurrentScoreReset(); //KADA PLAYER 1 IZVUCE 1 NJEGOV SCORE SE VRACA NA 0
      console.log(`Player 1 score = ${game.getPlayer1CurrentScore()}`);
      ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore()); //PRIKAZUJE SE NA EKRANU DA JE SCORE PLAYERA 1 = 0
      game.setActivePlayer('player2'); //SADA IGRA PLAYER 2
      player2Wrapper.classList.add('player--active');
      player1Wrapper.classList.remove('player--active');
    } 

  
  } else if (game.getActivePlayer() === 'player2') { //SADA IGRA PLAYER 2
  
    if (rollDice !== 1) {

      // rollDice;
      console.log(`Player 2 rolled ${rollDice}`);
      game.setPlayer2CurrentScore(rollDice);
      console.log(`Player 2 current score = ${game.getPlayer2CurrentScore()}`);
      ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore());

      if (game.getPlayer2CurrentScore() + game.getPlayer2TotalScore() >= 50) {
        game.setPlayer2TotalScore(game.getPlayer2CurrentScore());
        ui.setPlayer2TotalScoreEl(game.getPlayer2TotalScore())
        player2Wrapper.classList.add('player--winner');
        btnRoll.disabled = true;
        btnHold.disabled = true;
      }

       //HOLDING CURRENT SCORE PLAYER 2
       btnHold.addEventListener('click' , function(){
        game.setPlayer2TotalScore(game.getPlayer2CurrentScore());
        ui.setPlayer2TotalScoreEl(game.getPlayer2TotalScore());
        game.setPlayer2CurrentScoreReset(); //KADA PLAYER 2 IZVUCE 1 NJEGOV SCORE SE VRACA NA 0
        ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore()) //PRIKAZUJE SE NA EKRANU DA JE SCORE PLAYERA 2 = 0
        game.setActivePlayer('player1'); //SADA IGRA PLAYER 1
        player1Wrapper.classList.add('player--active');
        player2Wrapper.classList.remove('player--active');
      })

    } else {
      console.log(`💥Player 2 rolled 1💥`);
      game.setPlayer2CurrentScoreReset();
      console.log(`Player 2 score = ${game.getPlayer2CurrentScore()}`);
      ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore())
      game.setActivePlayer('player1');
      player1Wrapper.classList.add('player--active');
      player2Wrapper.classList.remove('player--active');
    }

  }
});


//NEW GAME
btnNewGame.addEventListener('click' , function(){
  game.setPlayer1CurrentScoreReset();
  game.setPlayer2CurrentScoreReset();
  game.setPlayer1TotalScoreReset();
  game.setPlayer2TotalScoreReset();

  ui.setPlayer1CurrentScoreEl(game.getPlayer1CurrentScore());
  ui.setPlayer2CurrentScoreEl(game.getPlayer2CurrentScore());
  ui.setPlayer1TotalScoreEl(game.getPlayer1TotalScore());
  ui.setPlayer2TotalScoreEl(game.getPlayer2TotalScore());

  game.setActivePlayer('player1');
  player2Wrapper.classList.remove('player--winner');
  player1Wrapper.classList.remove('player--winner');
  player1Wrapper.classList.add('player--active');
  player2Wrapper.classList.remove('player--active');  

  btnHold.disabled = false;
  btnRoll.disabled = false;
})
