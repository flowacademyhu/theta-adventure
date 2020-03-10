const map = require('./minimap');

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
  if (map.currentBoardCoords.x === 1 && map.currentBoardCoords.y === 0) {
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
  }
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
  }
};
const isEnemy2 = (x, y, enemy2) => {
  if (map.currentBoardCoords.x === 2 && map.currentBoardCoords.y === 0) {
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
  }
};

const isEnemy3 = (x, y, enemy3) => {
  if (map.currentBoardCoords.x === 2 && map.currentBoardCoords.y === 0) {
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
  }
};
const isEnemy4 = (x, y, enemy4) => {
  if (map.currentBoardCoords.x === 2 && map.currentBoardCoords.y === 0) {
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
module.exports = {
  isEnemy1: isEnemy1,
  enemy1: enemy1,
  moveEnemy1: moveEnemy1,
  isEnemy2: isEnemy2,
  enemy2: enemy2,
  moveEnemy2: moveEnemy2,
  enemy3: enemy3,
  isEnemy3: isEnemy3,
  moveEnemy3: moveEnemy3,
  enemy4: enemy4,
  isEnemy4: isEnemy4,
  moveEnemy4: moveEnemy4
}