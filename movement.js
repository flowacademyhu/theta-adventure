const minimap = require('./minimap.js')
const gates = require('./gates.js')
const enemy = require('./enemy.js')

const collisonUp = (player, map) => {
  let collison = false;
    if (map[player.coords.x[0] - 1][player.coords.y[0]] === 1 || 
        map[player.coords.x[2] - 1][player.coords.y[2]] === 1 || 
        map[player.coords.x[0] - 1][player.coords.y[0]] === 2 || 
        map[player.coords.x[2] - 1][player.coords.y[2]] === 2 || 
        map[player.coords.x[0] - 1][player.coords.y[0]] === 3 || 
        map[player.coords.x[2] - 1][player.coords.y[2]] === 3 ||
        map[player.coords.x[0] - 1][player.coords.y[0]] === 4 || 
        map[player.coords.x[2] - 1][player.coords.y[2]] === 4 ) {
        collison = true;
        return collison;
    }
  return collison;
}

const collisonDown = (player, map) => {
  let collison = false;
  if (map[player.coords.x[1] + 1][player.coords.y[1]] === 1 || 
      map[player.coords.x[3] + 1][player.coords.y[3]] === 1 || 
      map[player.coords.x[1] + 1][player.coords.y[1]] === 2 || 
      map[player.coords.x[3] + 1][player.coords.y[3]] === 2 || 
      map[player.coords.x[1] + 1][player.coords.y[1]] === 3 || 
      map[player.coords.x[3] + 1][player.coords.y[3]] === 3 ||
      map[player.coords.x[1] + 1][player.coords.y[1]] === 4 || 
      map[player.coords.x[3] + 1][player.coords.y[3]] === 4 ) {
      collison = true;
      return collison;
    }
  return collison;
}

const collisonLeft = (player, map) => {
  let collison = false;
  if (map[player.coords.x[0]][player.coords.y[0] - 1] === 1 || 
      map[player.coords.x[1]][player.coords.y[1] - 1] === 1 || 
      map[player.coords.x[0]][player.coords.y[0] - 1] === 2 || 
      map[player.coords.x[1]][player.coords.y[1] - 1] === 2 || 
      map[player.coords.x[0]][player.coords.y[0] - 1] === 3 || 
      map[player.coords.x[1]][player.coords.y[1] - 1] === 3 ||
      map[player.coords.x[0]][player.coords.y[0] - 1] === 4 || 
      map[player.coords.x[1]][player.coords.y[1] - 1] === 4 ) {
      collison = true;
      return collison;
    }
  return collison;
}

const collisonRight = (player, map) => {
  let collison = false;
  if (map[player.coords.x[2]][player.coords.y[2] + 1] === 1 || 
      map[player.coords.x[3]][player.coords.y[3] + 1] === 1 || 
      map[player.coords.x[2]][player.coords.y[2] + 1] === 2 || 
      map[player.coords.x[3]][player.coords.y[3] + 1] === 2 || 
      map[player.coords.x[2]][player.coords.y[2] + 1] === 3 || 
      map[player.coords.x[3]][player.coords.y[3] + 1] === 3 ||
      map[player.coords.x[2]][player.coords.y[2] + 1] === 4 || 
      map[player.coords.x[3]][player.coords.y[3] + 1] === 4 ) {
      collison = true;
      return collison;
    }
  return collison;
}

const enemyCollisonDown = (player, playerBottom, enemy, map, xCord, yCord) => {
  if(minimap.currentBoardCoords.x === xCord && minimap.currentBoardCoords.y === yCord && enemy.life > 0) {
    for(let i = 0; i < playerBottom.coords.x.length; i++) {
      for (let j = 0; j < enemy.coords.x.length; j++) {
        if (playerBottom.coords.x[i] === enemy.coords.x[j] && playerBottom.coords.y[i] === enemy.coords.y[j] && map[playerBottom.coords.x[i] - 4][playerBottom.coords.y[i]] !== 1) {
          for (let k = 0; k < player.coords.x.length; k++) {
            player.coords.x[k] -= 3;
          }
          player.life -= 1;
        }
      }
    }
  }
}

const enemyCollisonUp = (player, playerTop, enemy, map, xCord, yCord) => {
  if(minimap.currentBoardCoords.x === xCord && minimap.currentBoardCoords.y === yCord && enemy.life > 0) {
    for(let i = 0; i < playerTop.coords.x.length; i++) {
      for (let j = 0; j < enemy.coords.x.length; j++) {
        if (playerTop.coords.x[i] === enemy.coords.x[j] && playerTop.coords.y[i] === enemy.coords.y[j] && map[playerTop.coords.x[i] + 4][playerTop.coords.y[i]] !== 1) {
          for (let k = 0; k < player.coords.x.length; k++) {
            player.coords.x[k] += 3;
          }
          player.life -= 1;
        }
      }
    }
  }
}

const enemyCollisonRight = (player, playerRight, enemy, map, xCord, yCord) => {
  if(minimap.currentBoardCoords.x === xCord && minimap.currentBoardCoords.y === yCord && enemy.life > 0) {
    for(let i = 0; i < playerRight.coords.x.length; i++) {
      for (let j = 0; j < enemy.coords.x.length; j++) {
        if (playerRight.coords.x[i] === enemy.coords.x[j] && playerRight.coords.y[i] === enemy.coords.y[j] && map[playerRight.coords.x[i]][playerRight.coords.y[i] - 4] !== 1) {
          for (let k = 0; k < player.coords.x.length; k++) {
            player.coords.y[k] -= 3;
          }
          player.life -= 1;
        }
      }
    }
  }
}

const enemyCollisonLeft = (player, playerLeft, enemy, map, xCord, yCord) => {
  if(minimap.currentBoardCoords.x === xCord && minimap.currentBoardCoords.y === yCord && enemy.life > 0) {
    for(let i = 0; i < playerLeft.coords.x.length; i++) {
      for (let j = 0; j < enemy.coords.x.length; j++) {
        if (playerLeft.coords.x[i] === enemy.coords.x[j] && playerLeft.coords.y[i] === enemy.coords.y[j] && map[playerLeft.coords.x[i]][playerLeft.coords.y[i] + 4] !== 1) {
          for (let k = 0; k < player.coords.x.length; k++) {
            player.coords.y[k] += 3;
          }
        player.life -= 1;
        }
      }
    }
  }
}

const moveUp = (player, map) => {
  if (collisonUp(player, map) === true || gates.collisonGate1(player, gates.gate1, map) === true) {
    return;
  } else if (collisonUp(player, map) === true || gates.collisonGate2(player, gates.gate2, map) === true) {
    return;
  } else if (collisonUp(player, map) === true || gates.collisonGate3(player, gates.gate3, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.x.length; i++) {
    player.coords.x[i]--;
    }
  }
  minimap.changeMapUp(player);
}

const moveDown = (player, map) => {
  if (collisonDown(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.x.length; i++) {
    player.coords.x[i]++;
    }
  }
  minimap.changeMapDown(player);
}

const moveLeft = (player, map) => {
  if (collisonLeft(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.y.length; i++) {
    player.coords.y[i]--;
    }
  }
  minimap.changeMapLeft(player);
}

const moveRight = (player, map) => {
  if (collisonRight(player, map) === true) {
    return;
  } else {
    for (let i = 0; i < player.coords.y.length; i++) {
    player.coords.y[i]++;
    }
  }
  minimap.changeMapRight(player);
}

module.exports = {
  moveDown: moveDown,
  moveUp: moveUp,
  moveLeft: moveLeft,
  moveRight: moveRight,
  enemyCollisonDown: enemyCollisonDown,
  enemyCollisonUp: enemyCollisonUp,
  enemyCollisonRight: enemyCollisonRight,
  enemyCollisonLeft: enemyCollisonLeft
}
