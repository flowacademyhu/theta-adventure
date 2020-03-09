const drawn = require('./draw.js');
const map = require('./mapreader.js');
const movement = require('./movement.js');
const minimap = require('./minimap.js')

const enemy = {
  coords: coords = {
    x: [3],
    y: [27]
  }
};

const isEnemyCord = (x, y, enemy) => {
  if (minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 2) {
    for (let k = 0; k < enemy.coords.x.length; k++) {
      if (x === enemy.coords.x[k] && y === enemy.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
}

const enemyMove

module.exports = {
  enemy: enemy,
  isEnemyCord: isEnemyCord
}