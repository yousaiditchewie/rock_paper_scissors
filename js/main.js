console.log(`Rock Paper Scissors Loaded!`)

// **** MODEL: DATA MODEL ****
var game = {
  isWon: false,
  length: 1,
  player1Score: 0,
  player2Score: 0
}

function startGame(){
  game.isWon        = false;
  game.length       = 1;
  game.player1      = 'Player 1';
  game.player1Score = 0;
  game.player2      = 'Player 2';
  game.player2Score = 0;
};

// **** MODEL: GAME LOGIC ****
function evaluateWinner(player1Play, player2Play) {
  tie = false;
  if (player1Play === player2Play) {
    return tieGame();
  } else if (player1Play === 1 && player2Play === 2 || player1Play === 2 && player2Play === 3 || player1Play === 3 && player2Play === 1) {
    game.player2Score++;
    return winner = game.player2;
  } else {
    game.player1Score++;
    return winner = game.player1;
  }
}
function tieGame() {
  return tie = true;
}
function generateComputerPlay() {
  return player2Play = Math.floor(Math.random() * (4 - 1) + 1);
}
function setGameDuration(val) {
  return game.length = val;
}
function checkGameIsOver() {
  if (game.player1Score + game.player2Score === game.length) {
    return game.isWon = true;
  } else {
    return game.isWon = false;
  }
}


// **** GLOBAL VARIABLES ****
var winner,
    tie;
