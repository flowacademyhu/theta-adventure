const minimap = require('./minimap.js');

const collisonUp = (player, map) => {
  let collison = false;
  if (map[player.coords.x[0] - 1][player.coords.y[0]] === 1 ||
        map[player.coords.x[2] - 1][player.coords.y[2]] === 1 ||
        map[player.coords.x[0] - 1][player.coords.y[0]] === 2 ||
        map[player.coords.x[2] - 1][player.coords.y[2]] === 2 ||
        map[player.coords.x[0] - 1][player.coords.y[0]] === 3 ||
        map[player.coords.x[2] - 1][player.coords.y[2]] === 3) {
    collison = true;
    return collison;
  }
  return collison;
};

const collisonDown = (player, map) => {
  let collison = false;
  if (map[player.coords.x[1] + 1][player.coords.y[1]] === 1 ||
      map[player.coords.x[3] + 1][player.coords.y[3]] === 1 ||
      map[player.coords.x[1] + 1][player.coords.y[1]] === 2 ||
      map[player.coords.x[3] + 1][player.coords.y[3]] === 2 ||
      map[player.coords.x[1] + 1][player.coords.y[1]] === 3 ||
      map[player.coords.x[3] + 1][player.coords.y[3]] === 3) {
    collison = true;
    return collison;
  }
  return collison;
};

const collisonLeft = (player, map) => {
  let collison = false;
  if (map[player.coords.x[0]][player.coords.y[0] - 1] === 1 ||
      map[player.coords.x[1]][player.coords.y[1] - 1] === 1 ||
      map[player.coords.x[0]][player.coords.y[0] - 1] === 2 ||
      map[player.coords.x[1]][player.coords.y[1] - 1] === 2 ||
      map[player.coords.x[0]][player.coords.y[0] - 1] === 3 ||
      map[player.coords.x[1]][player.coords.y[1] - 1] === 3) {
    collison = true;
    return collison;
  }
  return collison;
};

const collisonRight = (player, map) => {
  let collison = false;
  if (map[player.coords.x[2]][player.coords.y[2] + 1] === 1 ||
      map[player.coords.x[3]][player.coords.y[3] + 1] === 1 ||
      map[player.coords.x[2]][player.coords.y[2] + 1] === 2 ||
      map[player.coords.x[3]][player.coords.y[3] + 1] === 2 ||
      map[player.coords.x[2]][player.coords.y[2] + 1] === 3 ||
      map[player.coords.x[3]][player.coords.y[3] + 1] === 3) {
    collison = true;
    return collison;
  }
  return collison;
};

const moveUp = (player, map) => {
  if (collisonUp(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.x.length; i++) {
      player.coords.x[i]--;
    }
  }
  minimap.changeMapUp(player);
};

const moveDown = (player, map) => {
  if (collisonDown(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.x.length; i++) {
      player.coords.x[i]++;
    }
  }
  minimap.changeMapDown(player);
};

const moveLeft = (player, map) => {
  if (collisonLeft(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.y.length; i++) {
      player.coords.y[i]--;
    }
  }
  minimap.changeMapLeft(player);
};

const moveRight = (player, map) => {
  if (collisonRight(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.y.length; i++) {
      player.coords.y[i]++;
    }
  }
  minimap.changeMapRight(player);
};

module.exports = {
  moveDown: moveDown,
  moveUp: moveUp,
  moveLeft: moveLeft,
  moveRight: moveRight
};
