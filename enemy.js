const minimap = require('./minimap');
const inventory = require('./inventory.js');
//const main = require('./connect');
/* const enemy = {
const drawn = require('./draw.js');
const map = require('./mapreader.js');
const movement = require('./movement.js');
const minimap = require('./minimap.js')
const enemy = {
  coords: coords = {
    x: [3],
    y: [27]
  }
}; */
let enemyGhost = {
  coords: {
    x: [18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21],
    y: [4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7]
  },
  life: 3
};

const changeArrayElementsPositive = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
};
const changeArrayElementsNegative = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]--;
  }
};
const moveEnemyGhost = () => {
  if (enemyGhost.coords.y[3] !== 27 && enemyGhost.coords.y[7] !== 27 && enemyGhost.coords.y[11] !== 27 && enemyGhost.coords.y[15] !== 27 &&
    enemyGhost.coords.x[12] === 21 && enemyGhost.coords.x[13] === 21 && enemyGhost.coords.x[14] === 21 && enemyGhost.coords.x[15] === 21) {
    changeArrayElementsPositive(enemyGhost.coords.y);
    if (enemyGhost.coords.y[3] === 27 && enemyGhost.coords.y[7] === 27 && enemyGhost.coords.y[11] === 27 && enemyGhost.coords.y[15] === 27) {
      changeArrayElementsPositive(enemyGhost.coords.x);
    }
  }
  if (enemyGhost.coords.y[0] > 3 && enemyGhost.coords.y[4] > 3 && enemyGhost.coords.y[8] > 3 && enemyGhost.coords.y[12] > 3 &&
    enemyGhost.coords.x[12] === 22 && enemyGhost.coords.x[13] === 22 && enemyGhost.coords.x[14] === 22 && enemyGhost.coords.x[15] === 22) {
    changeArrayElementsNegative(enemyGhost.coords.y);
    if (enemyGhost.coords.y[0] === 3 && enemyGhost.coords.y[4] === 3 && enemyGhost.coords.y[8] === 3 && enemyGhost.coords.y[12] === 3) {
      changeArrayElementsNegative(enemyGhost.coords.x);
    }
  }
};

const isEnemyGhostCord = (x, y, enemy) => {
  if(enemy.life <= 0) {
    return false;
  }
  if (minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemy.coords.x.length; k++) {
      if (x === enemy.coords.x[k] && y === enemy.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const enemyGhostHit = (player, inventory, enemy, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0 && enemy.life > 0) {
    for (let i = 0; i < enemy.coords.x.length; i++) {
      if (enemy.coords.x[i] === player.coords.x[2] - 2 && enemy.coords.y[i] === player.coords.y[2] + 1) {
        enemy.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return enemy.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0 && enemy.life > 0) {
    for (let j = 0; j < enemy.coords.x.length; j++) {
      if (enemy.coords.x[j] === player.coords.x[3] + 1 && enemy.coords.y[j] === player.coords.y[3] + 1) {
        enemy.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return enemy.life
  }
}

module.exports = {
  enemyGhost: enemyGhost,
  isEnemyGhostCord: isEnemyGhostCord,
  moveEnemyGhost: moveEnemyGhost,
  enemyGhostHit: enemyGhostHit
};