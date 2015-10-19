var gameboard = [ ['x', '', 'b'],
                  ['o', 'a', 'o'],
                  ['b', '', 'x'],
                ];

//
//var getRandom = Math.floor(Math.random() * 3);




//console.log(rowOne);
//console.log(rowTwo);


//function shoiuld add computer move to array
//

function winningboard(gameboard) {
  for (var i = 0; i < winningboard.length; i++) {
    if ((gameboard[0][0] === gameboard[0][1]) && (gameboard[0][0] === gameboard[0][2])) {
    console.log('WINNER');
  } else if ((gameboard[0][0] === gameboard[1][0]) && (gameboard[0][0] === gameboard[2][0])){
    console.log('WINNER');
  } else if ((gameboard[0][1] === gameboard[1][1]) && (gameboard[0][1] === gameboard[2][1])){
    console.log('WINNER');
  }else if ((gameboard[0][2] === gameboard[1][2]) && (gameboard[0][2] === gameboard[2][2])){
    console.log('WINNER');
  } else if ((gameboard[1][0] === gameboard[1][1]) && (gameboard[1][0] === gameboard[1][2])){
    console.log('WINNER');
  } else if ((gameboard[2][0] === gameboard[2][1]) && (gameboard[2][0] === gameboard[2][2])){
    console.log('WINNER');
  } else if ((gameboard[0][0] === gameboard[1][1]) && (gameboard[0][0] === gameboard[2][2])){
    console.log('WINNER');
  } else if ((gameboard[0][2] === gameboard[1][1]) && (gameboard[0][2] === gameboard[2][0])){
    console.log('WINNER');
  }  else {
    console.log("Not a winner.");
  }
}
}

console.log(winningboard(gameboard));
