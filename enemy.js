const drawn = require('./draw.js');
const map = require('./mapreader.js');
const movement = require('./movement.js');
const minimap = require('./minimap.js')

const enemy = {
  coords: coords = {
    x: [20],
    y: [3]
  }
};

const isEnemyCord = (x, y, enemy) => {
  if (minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemy.coords.x.length; k++) {
      if (x === enemy.coords.x[k] && y === enemy.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
}

const moveEnemy = () => {
  if (enemy.coords.y[0] !== 26 && enemy.coords.x[0] === 20) {
    enemy.coords.y[0]++;
    if (enemy.coords.y[0] === 26) {
      enemy.coords.x[0]++;
    }
  }
  if (enemy.coords.y[0] > 3 && enemy.coords.x[0] === 21) {
    enemy.coords.y[0]--;
    if (enemy.coords.y[0] === 3) {
      enemy.coords.x[0]--;
    }
  }
};

module.exports = {
  enemy: enemy,
  isEnemyCord: isEnemyCord,
  moveEnemy: moveEnemy
}