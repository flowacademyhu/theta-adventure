const map = require('./minimap');
const player = require('./draw');
const change = require('./smallerenemies');

const enemy5 = {
  coords: {
    x: [15, 15, 16, 16],
    y: [14, 15, 14, 15]
  }
};

const isEnemy5 = (x, y, enemy5) => {
  if (map.currentBoardCoords.x === 3 && map.currentBoardCoords.y === 2) {
    for (let k = 0; k < enemy5.coords.x.length; k++) {
      if (x === enemy5.coords.x[k] && y === enemy5.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const movingEnemy = (player) => {
  if (enemy5.coords.x[0] > player.coords.x[0]) {
    change.changeArrayElementsNegative(enemy5.coords.x);
  }
  if (enemy5.coords.x[0] < player.coords.x[0]) {
    change.changeArrayElementsPositive(enemy5.coords.x);
  }
  if (enemy5.coords.y[0] > player.coords.y[0]) {
    change.changeArrayElementsNegative(enemy5.coords.y);
  }
  if (enemy5.coords.y[0] < player.coords.y[0]) {
    change.changeArrayElementsPositive(enemy5.coords.y);
  }
};

module.exports = {
  isEnemy5: isEnemy5,
  enemy5: enemy5,
  movingEnemy: movingEnemy
}
