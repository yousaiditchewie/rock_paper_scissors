document.addEventListener('readystatechange', function(evt) {
  if (evt.path[0].readyState === 'complete') {
    console.log(`Rock Paper Scissors Loaded!`);
    startGame();
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
  './assets/computer.png',
  './assets/rock.png',
  './assets/paper.png',
  './assets/scissors.png'
]
var game = {
  isWon:          false,
  length:         1,
  player1:        'Player 1',
  player2:        'Computer',
  player1Score:   0,
  player2Score:   0,
  message:        messages[0],
  computerImgUrl: imageUrls[0],
  tie:            false
}
var rock     = 1;
var paper    = 2;
var scissors = 3;
function startGame(){
  game.isWon          = false;
  game.length         = 1;
  game.player1        = 'Player 1';
  game.player2        = 'Player 2';
  game.player1Score   = 0;
  game.player2Score   = 0;
  game.message        = messages[0];
  game.computerImgUrl = imageUrls[0];
  game.tie            = false;
  render();
};


// **** MODEL: GAME LOGIC ****
function evaluateWinner(player1Play, player2Play) {
  if (player1Play === player2Play) {
    return tieGame();
  } else if (player1Play === rock && player2Play === paper || player1Play === paper && player2Play === scissors || player1Play === scissors && player2Play === rock) {
    game.player2Score++;
    return winner = game.player2;
  } else {
    game.player1Score++;
    return winner = game.player1;
  }
}
function tieGame() {
  return game.tie = true;
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
var computerImg  = document.getElementById('computer-img');
var player1Score = document.getElementById('player-1-score');
var player2Score = document.getElementById('player-2-score');
// **** RENDER FUNCTIONS ****
function render() {
  messageBoard.innerHTML = game.message;
  computerImg.src = game.computerImgUrl;
  player1Score.innerHTML = game.player1Score;
  player2Score.innerHTML = game.player2Score;
}

// **** GLOBAL VARIABLES ****
var winner,
    tie;
