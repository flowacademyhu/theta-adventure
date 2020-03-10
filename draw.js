const inventory = require('./inventory');
// const minimap = require('./minimap.js');
const map = require('./mapreader.js')
const enemy = require('./enemy.js')
const gates = require('./gates.js')

const player = {coords: coords = {
                x: [24, 25, 24, 25],
                y: [14, 14, 15, 15]
                                }
                }

const pickedUpSword = {
  coordsUp: coordsUp = {
    x: [player.coords.x[0] - 1, player.coords.x[2] - 1],
    y: [player.coords.y[0], player.coords.y[2]]},
  coordsDown: coordsDown = {
    x: [player.coords.x[1] + 1, player.coords.x[3] + 1],
    y: [player.coords.y[1], player.coords.y[3]]},
  coordsRight: coordsRigth = {
    x: [player.coords.x[2], player.coords.x[3]],
    y: [player.coords.y[2] + 1, player.coords.y[3] + 1]},
  coordsLeft: coordsLeft = {
    x: [player.coords.x[0], player.coords.x[1]],
    y: [player.coords.y[0] - 1, player.coords.y[1] - 1]},
}

const isPlayerCord = (x, y, player) => {
  for (let k = 0; k < player.coords.x.length; k++) {
    if (x === player.coords.x[k] && y === player.coords.y[k]) {
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
      if (gates.isGate1(i, j, gates.gate1) === true) {
        line += ' #';
      } else if (gates.isGate2(i, j, gates.gate2) === true) {
        line += ' #';
      } else if (enemy.isEnemyCord(i, j, enemy.enemy) === true) {
        line += ' $';
      } else if (board[i][j] === 1) {
        line += ' 1';
      } else if (board[i][j] === 2) {
        line += ' o';
      } else if (board[i][j] === 3) {
        line += '--';
      } else if (inventory.isKey1Cord(i, j, inventory.key1) === true) {
        line += 'o-';
      } else if (inventory.isKey2Cord(i, j, inventory.key2) === true) {
        line += '=0';
      } else if (inventory.isSwordHiltCord(i, j, inventory.sword) === true) {
        line += '-<'
      } else if (inventory.isSwordBladeCord(i, j, inventory.sword) === true) {
        line += '=='
      } else if (isPlayerCord(i, j, player) === true) {
        line += ' *';
      } else {
        line += '  ';
      }
    }
    line += '\n';
  }
  console.log(line);
  console.log(player.coords)
  console.log('Inventory:')
  console.log(Object.values(inventory.inventory));
}

// setInterval(draw, 50, map.mapreader, player, inventory.key1);

module.exports = {
  isPlayerCord: isPlayerCord,
  draw: draw,
  player: player,
 }