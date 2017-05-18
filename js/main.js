console.log(`Rock Paper Scissors Loaded!`)

// **** MODEL: DATA MODEL ****

var gameIsWon    = false;
var gameLength   = 1;
var player1      = 'Player 1';
var player1Score = 0;
var player2      = 'Player 2';
var player2Score = 0;

var startGame = function(){
  gameIsWon    = false;
  gameLength   = 1;
  player1      = 'Player 1';
  player1Score = 0;
  player2      = 'Player 2';
  player2Score = 0;
};

// **** MODEL: GAME LOGIC ****

function evaluateWinner(player1Play, player2Play) {
  tie = false;
  if (player1Play === player2Play) {
    return tieGame();
  } else if (player1Play === 1 && player2Play === 2 || player1Play === 2 && player2Play === 3 || player1Play === 3 && player2Play === 1) {
    return winner = player2;
  } else {
    return winner = player1;
  }
}
function tieGame(tie) {
  return tie = true;
}
function generateComputerPlay() {
  return player2Play = Math.floor(Math.random() * (4 - 1) + 1);
}
function playSingleGame(player1Play, player2Play, evaluateWinner) {
  if (player2Play) {
    return evaluateWinner(player1Play, player2Play);
  } else {
    generateComputerPlay();
    return evaluateWinner(player1Play, player2Play);
  }
}

// **** GLOBAL VARIABLES ****
var winner,
    tie;
