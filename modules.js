var gameBoard = [ ['x', '', 'b'],
                  ['o', 'a', 'o'],
                  ['b', '', 'x'],
                ];

//
//var getRandom = Math.floor(Math.random() * 3);




//console.log(rowOne);
//console.log(rowTwo);


//function shoiuld add computer move to array
//

function winningBoard(gameBoard) {
  for (var i = 0; i < winningBoard.length; i++) {
    if ((gameBoard[0][0] === gameBoard[0][1]) && (gameBoard[0][0] === gameBoard[0][2])) {
    console.log('WINNER');
  } else if ((gameBoard[0][0] === gameBoard[1][0]) && (gameBoard[0][0] === gameBoard[2][0])){
    console.log('WINNER');
  } else if ((gameBoard[0][1] === gameBoard[1][1]) && (gameBoard[0][1] === gameBoard[2][1])){
    console.log('WINNER');
  }else if ((gameBoard[0][2] === gameBoard[1][2]) && (gameBoard[0][2] === gameBoard[2][2])){
    console.log('WINNER');
  } else if ((gameBoard[1][0] === gameBoard[1][1]) && (gameBoard[1][0] === gameBoard[1][2])){
    console.log('WINNER');
  } else if ((gameBoard[2][0] === gameBoard[2][1]) && (gameBoard[2][0] === gameBoard[2][2])){
    console.log('WINNER');
  } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[0][0] === gameBoard[2][2])){
    console.log('WINNER');
  } else if ((gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[0][2] === gameBoard[2][0])){
    console.log('WINNER');
  }  else {
    console.log("Not a winner.");
  }
}
}

console.log(winningBoard(gameBoard));
