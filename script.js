//Igra se igra do 20
//Player 1 obrce kocku koliko god hoce puta i svaki rezultat koji dobije se sabira sa rezultatom trenutne runde
//Ako igrac izvuce broj 1 svi poeni iz te runde se gube
//Ukoliko igrac odluci da zadrzi trenutne poene pre nego sto dobije broj 1, poeni dobijeni u rundi se sabiraju u totalni skor
let player1Round = 0;
let player1Total = 0;

let player2Round = 0;
let player2Total = 0;

const dice1 = 1;
const dice2 = 2;
const dice3 = 3;
const dice4 = 4;
const dice5 = 5;
const dice6 = 6;

const dice1Active = () => {
  document.querySelector('.dice1').style.zIndex = "2";
  document.querySelector('.dice2').style.zIndex = "-1";
  document.querySelector('.dice3').style.zIndex = "-1";
  document.querySelector('.dice4').style.zIndex = "-1";
  document.querySelector('.dice5').style.zIndex = "-1";
  document.querySelector('.dice6').style.zIndex = "-1";
}
const dice2Active = () => {
  document.querySelector('.dice1').style.zIndex = "-1";
  document.querySelector('.dice2').style.zIndex = "2";
  document.querySelector('.dice3').style.zIndex = "-1";
  document.querySelector('.dice4').style.zIndex = "-1";
  document.querySelector('.dice5').style.zIndex = "-1";
  document.querySelector('.dice6').style.zIndex = "-1";
}
const dice3Active = () => {
  document.querySelector('.dice1').style.zIndex = "-1";
  document.querySelector('.dice2').style.zIndex = "-1";
  document.querySelector('.dice3').style.zIndex = "2";
  document.querySelector('.dice4').style.zIndex = "-1";
  document.querySelector('.dice5').style.zIndex = "-1";
  document.querySelector('.dice6').style.zIndex = "-1";
}
const dice4Active = () => {
  document.querySelector('.dice1').style.zIndex = "-1";
  document.querySelector('.dice2').style.zIndex = "-1";
  document.querySelector('.dice3').style.zIndex = "-1";
  document.querySelector('.dice4').style.zIndex = "2";
  document.querySelector('.dice5').style.zIndex = "-1";
  document.querySelector('.dice6').style.zIndex = "-1";
}
const dice5Active = () => {
  document.querySelector('.dice1').style.zIndex = "-1";
  document.querySelector('.dice2').style.zIndex = "-1";
  document.querySelector('.dice3').style.zIndex = "-1";
  document.querySelector('.dice4').style.zIndex = "-1";
  document.querySelector('.dice5').style.zIndex = "2";
  document.querySelector('.dice6').style.zIndex = "-1";
}
const dice6Active = () => {
  document.querySelector('.dice1').style.zIndex = "-1";
  document.querySelector('.dice2').style.zIndex = "-1";
  document.querySelector('.dice3').style.zIndex = "-1";
  document.querySelector('.dice4').style.zIndex = "-1";
  document.querySelector('.dice5').style.zIndex = "-1";
  document.querySelector('.dice6').style.zIndex = "2";
}


// Start Game
document.querySelector('.btnRollDice').addEventListener('click' , function(){

  let randomDice = Math.floor(Math.random() * 6) + 1;
  
  if (randomDice === 1) {
    console.log('Dice 1');
    dice1Active();
  } else if (randomDice === 2) {
    console.log('Dice 2');
    dice2Active();
  } else if (randomDice === 3) {
    console.log('Dice 3');
    dice3Active();
  } else if (randomDice === 4) {
    console.log('Dice 4');
    dice4Active();
  } else if (randomDice === 5) {
    console.log('Dice 5');
    dice5Active();
  } else if (randomDice === 6) {
    console.log('Dice 6');
    dice6Active();
  }

});


