let NO_ONE_PLAYED = "-";
let X_PLAYED = "X";
let Y_PLAYED = "Y";
let game_id = -1;

let board = [];

//get the game id from the server
function initGame() {
  $.post("/games/", {body: "this data don't mattah"}, function(data) {
    console.log("hit the server!");
    game_id = game_id;
  });
}

function initBoard() {
  for (var i = 0; i< 3; i++) {
    let new_arr = [];
    for (var j = 0; j< 3; j++) {
      new_arr.push(NO_ONE_PLAYED);
    }
    board.push(new_arr);
  }
}

function translateIndexToCoordinate(index) {
  let y = Math.floor(index/3);
  let x = index % 3;
  return { x: x, y: y}
}

function turnBoardIntoString() {
}

//computer player makes a move on the board
function makeMoveOnBoard(player, positionboard) {
}

//check to see if the game is over!
function checkForEndOfGameOnBoard(board) {
}

//update the state of the remote game
function updateGame() {
}

function playerMoved(index) {
  let playerMovedCoords = translateIndexToCoordinate(index);
  board[playerMovedCoords.x][playerMovedCoords.y];
}

$(".board-space").on('click', function() {
  if ($(this).text == NO_ONE_PLAYED) {
    playerMoved($(this).attr('data-space-index'));
  }
});

window.onload = function() {
  initBoard();
  initGame();
}
