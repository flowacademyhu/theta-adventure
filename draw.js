// const readLine = require('readline-sync');

const player = {x: [1, 2],
                y: [3, 4]
              }
/* 
const movePlayer = (player) => {
  let pressedKey = readlineSync
} */

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];



const draw = (board, player) => {
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
}

const isPlayerCords = (x, y, player) => {
  for (let i = 0; i < player.x.length; i++) {
    board[player.x[i]][player.y[i]] = 1;
  }
}

setInterval(draw, 500, board, player);