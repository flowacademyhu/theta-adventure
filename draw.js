const map = require('./maps.js');

const player = {x: [24, 25, 24, 25],
                y: [14, 14, 15, 15]
              }

/* const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]; */



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
  console.clear();
  let line = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (isPlayerCord(i, j, player) === true) {
        line += ' *';
      } else if (board[i][j] === 1) {
        line += ' 1';
      } else {
        line += '  ';
      }
    }
    line += '\n';
  }
  console.log(line);
}

setInterval(draw, 50, map.castle, player);

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'w') {
    for (let i = 0; i < player.x.length; i++) {
      player.x[i]--;
    }
  }
  if (key === 's') {
    for (let i = 0; i < player.x.length; i++) {
      player.x[i]++;
    }
  }
  if (key === 'a') {
    for (let i = 0; i < player.y.length; i++) {
      player.y[i]--;
    }
  }
  if (key === 'd') {
    for (let i = 0; i < player.y.length; i++) {
      player.y[i]++;
    }
  }
  if (key === 'q') {
    process.exit(0);
  }
});