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
let enemy = {
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

const moveEnemy = () => {
  if (enemy.coords.y[3] !== 27 && enemy.coords.y[7] !== 27 && enemy.coords.y[11] !== 27 && enemy.coords.y[15] !== 27 &&
    enemy.coords.x[12] === 21 && enemy.coords.x[13] === 21 && enemy.coords.x[14] === 21 && enemy.coords.x[15] === 21) {
    changeArrayElementsPositive(enemy.coords.y);
    if (enemy.coords.y[3] === 27 && enemy.coords.y[7] === 27 && enemy.coords.y[11] === 27 && enemy.coords.y[15] === 27) {
      changeArrayElementsPositive(enemy.coords.x);
    }
  }
  if (enemy.coords.y[0] > 3 && enemy.coords.y[4] > 3 && enemy.coords.y[8] > 3 && enemy.coords.y[12] > 3 &&
    enemy.coords.x[12] === 22 && enemy.coords.x[13] === 22 && enemy.coords.x[14] === 22 && enemy.coords.x[15] === 22) {
    changeArrayElementsNegative(enemy.coords.y);
    if (enemy.coords.y[0] === 3 && enemy.coords.y[4] === 3 && enemy.coords.y[8] === 3 && enemy.coords.y[12] === 3) {
      changeArrayElementsNegative(enemy.coords.x);
    }
  }
};

const isEnemyCord = (x, y, enemy) => {
  if (minimap.currentBoardCoords.x === 3 && minimap.currentBoardCoords.y === 2) {
    for (let k = 0; k < enemy.coords.x.length; k++) {
      if (x === enemy.coords.x[k] && y === enemy.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

module.exports = {
  enemy: enemy,
  isEnemyCord: isEnemyCord,
  moveEnemy: moveEnemy
};

