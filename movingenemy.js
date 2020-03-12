const minimap = require('./minimap');
const player = require('./draw');
const change = require('./smallerenemies.js');

const enemy5 = {
  coords: {
    x: [15, 15, 16, 16],
    y: [14, 15, 14, 15]
  },
  life: 4
};

const isEnemy5 = (x, y, enemy5) => {
  if (enemy5.life <= 0) {
    return false;
  }
  if (minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 2) {
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

const enemy5Hit = (player, inventory, enemy5, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 2 && enemy5.life > 0) {
    for (let i = 0; i < enemy5.coords.x.length; i++) {
      if (enemy5.coords.x[i] === player.coords.x[2] - 2 && enemy5.coords.y[i] === player.coords.y[2] + 1) {
        enemy5.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return enemy5.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 2 && enemy5.life > 0) {
    for (let j = 0; j < enemy5.coords.x.length; j++) {
      if (enemy5.coords.x[j] === player.coords.x[3] + 1 && enemy5.coords.y[j] === player.coords.y[3] + 1) {
        enemy5.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return enemy5.life
  }
}

const sleepingEnemy = {
  coords: {
    x: [15, 15, 16, 16],
    y: [14, 15, 14, 15]
  },
  life: 3
};

const isSleepingEnemy = (x, y, sleepingEnemy) => {
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4) {
    for (let k = 0; k < sleepingEnemy.coords.x.length; k++) {
      if (x === sleepingEnemy.coords.x[k] && y === sleepingEnemy.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const moveSleeping = (player) => {
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4) {
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

const sleepingEnemyHit = (player, inventory, sleepingEnemy, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4 && sleepingEnemy.life > 0) {
    for (let i = 0; i < sleepingEnemy.coords.x.length; i++) {
      if (sleepingEnemy.coords.x[i] === player.coords.x[2] - 2 && sleepingEnemy.coords.y[i] === player.coords.y[2] + 1) {
        sleepingEnemy.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return sleepingEnemy.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4 && sleepingEnemy.life > 0) {
    for (let j = 0; j < sleepingEnemy.coords.x.length; j++) {
      if (sleepingEnemy.coords.x[j] === player.coords.x[3] + 1 && sleepingEnemy.coords.y[j] === player.coords.y[3] + 1) {
        sleepingEnemy.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return sleepingEnemy.life
  }
}

module.exports = {
  isEnemy5: isEnemy5,
  enemy5: enemy5,
  movingEnemy: movingEnemy,
  enemy5Hit: enemy5Hit,
  sleepingEnemy: sleepingEnemy,
  isSleepingEnemy: isSleepingEnemy,
  moveSleeping: moveSleeping,
  sleepingEnemyHit: sleepingEnemyHit
}
