console.log(`Rock Paper Scissors Loaded!`)

// **** MODEL: DATA MODEL ****

var gameIsWon    = false;
var gameLength   = 1;
var player1      = 'Player 1';
var player1Score = 0;
var player2      = 'Player 2';
var player2Score = 0;

var startGame = function(){};

// **** MODEL: GAME LOGIC ****

// WINNING PLAYS

var evaluateWinner = function(player1Play, player2Play) {
  tie = false;
  if (player1Play === player2Play) {
    return tieGame();
  } else if (player1Play === 1 && player2Play === 2 || player1Play === 2 && player2Play === 3 || player1Play === 3 && player2Play === 1) {
    return winner = player2;
  } else {
    return winner = player1;
  }
}
var tieGame = function(tie) {
  return tie = true;
}
var generateComputerPlay = function() {
  return player2Play = Math.floor(Math.random() * (4 - 1) + 1);
}

// **** GLOBAL VARIABLES ****
var winner,
    tie;
