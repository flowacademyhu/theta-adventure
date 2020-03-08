const inventory = require('./inventory');
const minimap = require('./minimap.js');
const map = require('./mapreader.js');

const player = {
  coords: coords = {
    x: [24, 25, 24, 25],
    y: [14, 14, 15, 15]
  }
};

// setInterval(drawv1, 500, board, player);

const isPlayerCord = (x, y, player) => {
  for (let k = 0; k < player.coords.x.length; k++) {
    if (x === player.coords.x[k] && y === player.coords.y[k]) {
      return true;
    }
  }
  return false;
};

const draw = (board, player) => {
  console.clear();
  let line = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (isPlayerCord(i, j, player) === true) {
        line += ' *';
      } else if (board[i][j] === 1) {
        line += ' 1';
      } else if (board[i][j] === 2) {
        line += ' o';
      } else if (board[i][j] === 3) {
        line += '--';
      } else if (inventory.isKeyCord(i, j, inventory.key1) === true) {
        line += 'o-';
      } else {
        line += '  ';
      }
    }
    line += '\n';
  }
  console.log(line);
  console.log('Your inventory:');
  console.log(Object.values(inventory.inventory));
};

// setInterval(draw, 50, map.mapreader, player, inventory.key1);

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
module.exports = {
  isPlayerCord: isPlayerCord,
  draw: draw,
  player: player
};
