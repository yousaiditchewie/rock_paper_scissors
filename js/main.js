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
  winner:         undefined,
  tie:            false
}
var rock     = 1;
var paper    = 2;
var scissors = 3;
function startGame(){
  game.isWon          = false;
  game.length         = 1;
  game.player1        = 'Player 1';
  game.player2        = 'Computer';
  game.player1Score   = 0;
  game.player2Score   = 0;
  game.message        = messages[0];
  game.computerImgUrl = imageUrls[0];
  game.winner         = undefined;
  game.tie            = false;
  render();
};


// **** MODEL: GAME LOGIC ****
function evaluateWinner(player1Play, player2Play) {
  console.log(`computer played ${player2Play}`)
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
function play(hand) {
  var playWord   = hand.id;
  var playNumber = eval(hand.id);
  console.log('player 1 played ' + playWord);
  console.log('winner = ' + evaluateWinner(playNumber, generateComputerPlay()));
}
function updateMessage() {

}
function showAllHands() {
  rockEl.classList.remove('hide-this');
  paperEl.classList.remove('hide-this');
  scissorsEl.classList.remove('hide-this');
}
// **** DOM ELEMENT VARIABLES ****
var messageBoard = document.getElementById('message-board');
var computerImg  = document.getElementById('computer-img');
var player1Score = document.getElementById('player-1-score');
var player2Score = document.getElementById('player-2-score');
var rockEl       = document.getElementById('rock');
var paperEl      = document.getElementById('paper');
var scissorsEl   = document.getElementById('scissors');
// **** RENDER FUNCTIONS ****
function render() {
  messageBoard.innerHTML = game.message;
  computerImg.src        = game.computerImgUrl;
  player1Score.innerHTML = game.player1Score;
  player2Score.innerHTML = game.player2Score;
}

// **** GLOBAL VARIABLES ****
// var winner,
//     tie;
