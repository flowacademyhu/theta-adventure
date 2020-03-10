const minimap = require('./minimap.js');

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

const isEnemy1 = (x, y, enemy1) => {
  if(enemy1.life <= 0) {
    return false;
  }
  if (minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemy1.coords.x.length; k++) {
      if (x === enemy1.coords.x[k] && y === enemy1.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const enemy1 = {
  coords: {
    x: [14, 14, 15, 15],
    y: [7, 8, 7, 8]
  },
  life: 2
};

const moveEnemy1 = () => {
  if (enemy1.coords.y[1] !== 16 && enemy1.coords.y[3] !== 16 && enemy1.coords.x[2] === 15 && enemy1.coords.x[3] === 15) {
    changeArrayElementsPositive(enemy1.coords.y);
    if (enemy1.coords.y[1] === 16 && enemy1.coords.y[3] === 16) {
      changeArrayElementsPositive(enemy1.coords.x);
    }
  }
  if (enemy1.coords.y[0] > 7 && enemy1.coords.y[2] > 7 && enemy1.coords.x[2] === 16 && enemy1.coords.x[3] === 16) {
    changeArrayElementsNegative(enemy1.coords.y);
    if (enemy1.coords.y[0] === 7 && enemy1.coords.y[2] === 7) {
      changeArrayElementsNegative(enemy1.coords.x);
    }
  }
};

const enemy2 = {
  coords: {
    x: [13, 13, 14, 14],
    y: [8, 9, 8, 9]
  },
  life: 2
};
const isEnemy2 = (x, y, enemy2) => {
  if(enemy2.life <= 0) {
    return false;
  }
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemy2.coords.x.length; k++) {
      if (x === enemy2.coords.x[k] && y === enemy2.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};
const moveEnemy2 = () => {
  if (enemy2.coords.y[0] !== 2 && enemy2.coords.x[3] === 14) {
    changeArrayElementsNegative(enemy2.coords.y);
    if (enemy2.coords.y[0] === 2) {
      changeArrayElementsNegative(enemy2.coords.x);
    }
  }
  if (enemy2.coords.y[1] !== 9 && enemy2.coords.x[3] === 13) {
    changeArrayElementsPositive(enemy2.coords.y);
    if (enemy2.coords.y[1] === 9) {
      changeArrayElementsPositive(enemy2.coords.x);
    }
  }
};
const enemy3 = {
  coords: {
    x: [25, 25, 26, 26],
    y: [14, 15, 14, 15]
  },
  life: 2
};

const isEnemy3 = (x, y, enemy3) => {
  if(enemy3.life <= 0) {
    return false;
  }
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemy3.coords.x.length; k++) {
      if (x === enemy3.coords.x[k] && y === enemy3.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};

const moveEnemy3 = () => {
  if (enemy3.coords.x[0] !== 19 && enemy3.coords.y[0] === 14) {
    changeArrayElementsNegative(enemy3.coords.x);
    if (enemy3.coords.x[0] === 19) {
      changeArrayElementsPositive(enemy3.coords.y);
    }
  }
  if (enemy3.coords.x[2] !== 26 && enemy3.coords.y[0] === 15) {
    changeArrayElementsPositive(enemy3.coords.x);
    if (enemy3.coords.x[2] === 26) {
      changeArrayElementsNegative(enemy3.coords.y);
    }
  }
};

const enemy4 = {
  coords: {
    x: [16, 16, 17, 17],
    y: [20, 21, 20, 21]
  },
  life: 2
};
const isEnemy4 = (x, y, enemy4) => {
  if(enemy4.life <= 0) {
    return false;
  }
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < enemy4.coords.x.length; k++) {
      if (x === enemy4.coords.x[k] && y === enemy4.coords.y[k]) {
        return true;
      }
    }
  }
  return false;
};
const moveEnemy4 = () => {
  if (enemy4.coords.y[1] !== 27 && enemy4.coords.x[0] === 16) {
    changeArrayElementsPositive(enemy4.coords.y);
    if (enemy4.coords.y[1] === 27) {
      changeArrayElementsPositive(enemy4.coords.x);
    }
  }
  if (enemy4.coords.y[0] !== 20 && enemy4.coords.x[0] === 17) {
    changeArrayElementsNegative(enemy4.coords.y);
    if (enemy4.coords.y[0] === 20) {
      changeArrayElementsNegative(enemy4.coords.x);
    }
  }
}

const enemy1Hit = (player, inventory, enemy1, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0 && enemy1.life > 0) {
    for (let i = 0; i < enemy1.coords.x.length; i++) {
      if (enemy1.coords.x[i] === player.coords.x[2] - 2 && enemy1.coords.y[i] === player.coords.y[2] + 1) {
        enemy1.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return enemy1.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0 && enemy1.life > 0) {
    for (let j = 0; j < enemy1.coords.x.length; j++) {
      if (enemy1.coords.x[j] === player.coords.x[3] + 1 && enemy1.coords.y[j] === player.coords.y[3] + 1) {
        enemy1.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return enemy1.life
  }
}

const enemy2Hit = (player, inventory, enemy2, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && enemy2.life > 0) {
    for (let i = 0; i < enemy2.coords.x.length; i++) {
      if (enemy2.coords.x[i] === player.coords.x[2] - 2 && enemy2.coords.y[i] === player.coords.y[2] + 1) {
        enemy2.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return enemy2.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && enemy2.life > 0) {
    for (let j = 0; j < enemy3.coords.x.length; j++) {
      if (enemy2.coords.x[j] === player.coords.x[3] + 1 && enemy2.coords.y[j] === player.coords.y[3] + 1) {
        enemy2.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return enemy2.life
  }
}

const enemy3Hit = (player, inventory, enemy3, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && enemy3.life > 0) {
    for (let i = 0; i < enemy3.coords.x.length; i++) {
      if (enemy3.coords.x[i] === player.coords.x[2] - 2 && enemy3.coords.y[i] === player.coords.y[2] + 1) {
        enemy3.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return enemy3.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && enemy3.life > 0) {
    for (let j = 0; j < enemy3.coords.x.length; j++) {
      if (enemy3.coords.x[j] === player.coords.x[3] + 1 && enemy3.coords.y[j] === player.coords.y[3] + 1) {
        enemy3.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return enemy3.life
  }
}

const enemy4Hit = (player, inventory, enemy4, swordUp, map) => {
  if (inventory.includes('-<==') && swordUp === true && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && enemy4.life > 0) {
    for (let i = 0; i < enemy4.coords.x.length; i++) {
      if (enemy4.coords.x[i] === player.coords.x[2] - 2 && enemy4.coords.y[i] === player.coords.y[2] + 1) {
        enemy4.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] + 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] += 3
          }
        }
      }
    }
    return enemy4.life
  } else if (inventory.includes('-<==') && swordUp === false && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && enemy4.life > 0) {
    for (let j = 0; j < enemy1.coords.x.length; j++) {
      if (enemy4.coords.x[j] === player.coords.x[3] + 1 && enemy4.coords.y[j] === player.coords.y[3] + 1) {
        enemy4.life -= 1;
        for (let k = 0; k < player.coords.x.length; k++) {
          if(map[player.coords.x[k] - 3][player.coords.y[k]] !== 1) {
          player.coords.x[k] -= 3
          }
        }
      }
    }
    return enemy4.life
  }
}

module.exports = {
  isEnemy1: isEnemy1,
  enemy1: enemy1,
  moveEnemy1: moveEnemy1,
  enemy1Hit: enemy1Hit,
  enemy1Hit: enemy1Hit,
  isEnemy2: isEnemy2,
  enemy2: enemy2,
  moveEnemy2: moveEnemy2,
  enemy2Hit, enemy2Hit,
  enemy3: enemy3,
  isEnemy3: isEnemy3,
  moveEnemy3: moveEnemy3,
  enemy3Hit: enemy3Hit,
  enemy4: enemy4,
  isEnemy4: isEnemy4,
  moveEnemy4: moveEnemy4,
  enemy4Hit: enemy4Hit
}