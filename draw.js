const player = {x: [1, 1, 2, 2],
                y: [3, 4, 3, 4]
              }

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];



/* const drawv1 = (board, player) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      for (let k = 0; k < player.x.length; k++) {
        for (let l = 0; l < player.y.length; l++) {
          if (i === player.x[k] && j === player.y[l]) {
            board[i][j] = 1;
          }
        }
      }
    }
  }
  console.log(board);
  setInterval(console.clear, 500);
} */

// setInterval(drawv1, 500, board, player);

const isPlayerCord = (x, y, player) =>{
  for (let k = 0; k < player.x.length; k++) {
    if (x === player.x[k] && y === player.y[k]) {
      return true;
    }
  }
  return false;
}

const draw = (board, player) => {
  let line = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (isPlayerCord(i, j, player) === true) {
        line += ' 1';
      } else {
        line += ' 0';
      }
    }
    line += '\n';
  }
  console.log(line);
  setInterval(console.clear, 500);
}

setInterval(draw, 500, board, player);