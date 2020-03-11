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
  if (map.currentBoardCoords.x === 3 && map.currentBoardCoords.y === 3) {
    for (let k = 0; k < enemy5.coords.x.length; k++) {
      if (x === enemy5.coords.x[k] && y === enemy5.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const sleepingEnemy = {
  coords: {
    x: [15, 15, 16, 16],
    y: [14, 15, 14, 15]
  }
};

const isSleepingEnemy = (x, y, sleepingEnemy) => {
  if (map.currentBoardCoords.x === 2 && map.currentBoardCoords.y === 4) {
    for (let k = 0; k < sleepingEnemy.coords.x.length; k++) {
      if (x === sleepingEnemy.coords.x[k] && y === sleepingEnemy.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const moveSleeping = (player) => {
  if (map.currentBoardCoords.x === 2 && map.currentBoardCoords.y === 4) {
    if (player.coords.y[2] - sleepingEnemy.coords.y[1] <= 15 && sleepingEnemy.coords.y[1] - player.coords.y[2] <= 15 && player.coords.x[1] - sleepingEnemy.coords.x[2] <= 15 && sleepingEnemy.coords.x[2] - player.coords.x[1] <= 15) {
      if (sleepingEnemy.coords.y[0] > player.coords.y[0]) {
        change.changeArrayElementsNegative(sleepingEnemy.coords.y);
      } else if (sleepingEnemy.coords.y[1] < player.coords.y[2]) {
        change.changeArrayElementsPositive(sleepingEnemy.coords.y);
      }
      if (sleepingEnemy.coords.x[2] > player.coords.x[1]) {
        change.changeArrayElementsNegative(sleepingEnemy.coords.x);
      } else if (sleepingEnemy.coords.x[2] < player.coords.x[1]) {
        change.changeArrayElementsPositive(sleepingEnemy.coords.x);
      }
    } else if (player.coords.y[2] - sleepingEnemy.coords.y[1] > 15 && sleepingEnemy.coords.y[1] - player.coords.y[2] > 15 && player.coords.x[1] - sleepingEnemy.coords.x[2] > 15 && sleepingEnemy.coords.x[2] - player.coords.x[1] > 15) {
      if (sleepingEnemy.coords.y[0] !== 14) {
        if (sleepingEnemy.coords.y[0] > 14) {
          change.changeArrayElementsNegative(sleepingEnemy.coords.y);
        } else if (sleepingEnemy.coords.y[0] < 14) {
          change.changeArrayElementsPositive(sleepingEnemy.coords.y);
        }
      }
      if (sleepingEnemy.coords.x[0] !== 15) {
        if (sleepingEnemy.coords.x[0] < 15) {
          change.changeArrayElementsPositive(sleepingEnemy.coords.x);
        } else if (sleepingEnemy.coords.x[0] > 15) {
          change.changeArrayElementsNegative(sleepingEnemy.coords.x);
        }
      }
    }
  }
  console.log(sleepingEnemy);
} 

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
  movingEnemy: movingEnemy,
  sleepingEnemy: sleepingEnemy,
  isSleepingEnemy: isSleepingEnemy,
  moveSleeping: moveSleeping
}
