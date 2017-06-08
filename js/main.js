document.addEventListener('readystatechange', function(evt) {
  console.log(evt.path[0].readyState);
  if (evt.path[0].readyState === 'complete') {
    console.log(`Rock Paper Scissors Loaded!`);
  }
});

// **** MODEL: DATA MODEL ****
var messages = [
  'Choose your play...',
  'Tie game. Play again...',
  'You Win!!!',
  'You lose...'
];
var imageUrls = [
  './assets/rock.png',
  './assets/paper.png',
  './assets/scisors.png',
  './assets/computer.png'
]
var game = {
  isWon:        false,
  length:       1,
  player1:      'Player 1',
  player2:      'Computer',
  player1Score: 0,
  player2Score: 0,
  message:      messages[0]
}

function startGame(){
  game.isWon        = false;
  game.length       = 1;
  game.player1      = 'Player 1';
  game.player2      = 'Player 2';
  game.player1Score = 0;
  game.player2Score = 0;
  game.message      = messages[0];
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

// **** DOM ELEMENT VARIABLES ****
var messageBoard = document.getElementById('message-board');
// **** RENDER FUNCTIONS ****


// **** GLOBAL VARIABLES ****
var winner,
    tie;
