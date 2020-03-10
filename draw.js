const inventory = require('./inventory');
const map = require('./mapreader.js')
const enemy = require('./enemy.js')
const gates = require('./gates.js')
const sword = require('./sword.js')

const player = {coords: coords = {
                x: [24, 25, 24, 25],
                y: [14, 14, 15, 15]
                                }
                }

let swordBladeUp = '| ';
let swordHiltUp = 'T ';
let swordBladeDown = '| ';
let swordHiltDown = '+ ';


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
      } else if (sword.drawSwordBlade(i, j, player) === true) {
        line += swordBladeUp;
      } else if (sword.drawSwordBlade(i, j, player) === false) {
        line += swordBladeDown;
      } else if (sword.drawSwordHilt(i, j, player) === true) {
        line += swordHiltUp;
      } else if (sword.drawSwordHilt(i, j, player) === false) {
        line += swordHiltDown
      } else if (enemy.isEnemyCord(i, j, enemy.enemy) === true) {
        line += ' $';
      } else if (board[i][j] === 1) {
        line += ' 1';
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
  console.log('Inventory:')
  console.log(Object.values(inventory.inventory));
}

// setInterval(draw, 50, map.mapreader, player, inventory.key1);

module.exports = {
  isPlayerCord: isPlayerCord,
  draw: draw,
  player: player,
  swordBladeUp: swordBladeUp,
  swordHiltUp: swordHiltUp,
 }