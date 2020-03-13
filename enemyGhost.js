const minimap = require('./minimap');
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
  }
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
const isEnemyCordGhost = (x, y, enemy) => {
  if (minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemyGhost.coords.x.length; k++) {
      if (x === enemyGhost.coords.x[k] && y === enemyGhost.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};
module.exports = {
  enemyGhost: enemyGhost,
  isEnemyCordGhost: isEnemyCordGhost,
  moveEnemyGhost: moveEnemyGhost,
  changeArrayElementsNegative: changeArrayElementsNegative,
  changeArrayElementsPositive: changeArrayElementsPositive
};