const minimap = require('./minimap.js')
const map = require('./mapreader.js')
const movingenemy = require('./movingenemy.js')

const gate1 = {coords: coords = {
  x: [16, 16, 17, 18, 17, 18, 17, 18, 17, 18, 19, 19, 19, 19],
  y: [14, 15, 13, 13, 14, 14, 15, 15, 16, 16, 13, 14, 15, 16]},
  exists: true
}

const isGate1 = (x, y, gate1) => {
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 2 && gate1.exists === true) {
      for (let k = 0; k < gate1.coords.x.length; k++) {
        if (x === gate1.coords.x[k] && y === gate1.coords.y[k]) {
          return true;
        }
      }
    return false;
  }
}

const collisonGate1 = (player, gate1, map) => {
  let collison = false;
  if(minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 2) {
    for (let i = 0; i < player.coords.x.length; i++) {
      for (let j = 0; j < gate1.coords.x.length; j++ ) {
        if (map[player.coords.x[i] - 1] === map[gate1.coords.x[j]] && map[player.coords.y[i] - 1] === map[gate1.coords.y[j]] && gate1.exists === true) {
          collison = true;
          return collison
        }
      }
    }
  }
  return collison;
}

const openGate1 = (player, gate1, inventory) => {
  if (collisonGate1(player, gate1, map.mapreader()) === true && inventory.includes('o-')) {
    gate1.exists = false;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === 'o-') {
        delete inventory[i];
  }
}
  }
}
const gate2 = {coords: coords = {
  x: [20, 20, 21, 22, 21, 22, 21, 22, 21, 22, 23, 23, 23, 23],
  y: [10, 11, 9, 9, 10, 10, 11, 11, 12, 12, 9, 10, 11, 12]},
  exists: true
}

const isGate2 = (x, y, gate2) => {
  if (minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 1 && gate2.exists === true) {
      for (let k = 0; k < gate1.coords.x.length; k++) {
        if (x === gate2.coords.x[k] && y === gate2.coords.y[k]) {
          return true;
        }
      }
    return false;
  }
}

const collisonGate2 = (player, gate2, map) => {
  let collison = false;
  if(minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 1) {
    for (let i = 0; i < player.coords.x.length; i++) {
      for (let j = 0; j < gate2.coords.x.length; j++ ) {
        if (map[player.coords.x[i] - 1] === map[gate2.coords.x[j]] && map[player.coords.y[i] - 1] === map[gate2.coords.y[j]] && gate2.exists === true) {
          collison = true;
          return collison
        }
      }
    }
  }
  return collison;
}

const openGate2 = (player, gate2, inventory) => {
  if (collisonGate2(player, gate2, map.mapreader()) === true && inventory.includes('=0')) {
    gate2.exists = false;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === '=0') {
        delete inventory[i]
      }
    }
  }
}

const gate3 = {coords: coords = {
  x: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  y: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]},
  exists: true
}

const isGate3 = (x, y, gate3) => {
  if (minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 2 && gate3.exists === true) {
      for (let k = 0; k < gate3.coords.x.length; k++) {
        if (x === gate3.coords.x[k] && y === gate3.coords.y[k]) {
          return true;
        }
      }
    return false;
  }
}

const collisonGate3 = (player, gate3, map) => {
  let collison = false;
  if(minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 2) {
    for (let i = 0; i < player.coords.x.length; i++) {
      for (let j = 0; j < gate3.coords.x.length; j++ ) {
        if (map[player.coords.x[i] - 1] === map[gate3.coords.x[j]] && map[player.coords.y[i] - 1] === map[gate3.coords.y[j]] && gate3.exists === true) {
          collison = true;
          return collison
        }
      }
    }
  }
  return collison;
}

const openGate3 = (gate3, enemy5) => {
  if (enemy5.life <= 0) {
    gate3.exists = false;
  }
}

module.exports = {
  gate1: gate1,
  isGate1: isGate1,
  openGate1: openGate1,
  collisonGate1: collisonGate1,
  gate2: gate2,
  isGate2: isGate2,
  openGate2: openGate2,
  collisonGate2: collisonGate2,
  gate3: gate3,
  isGate3: isGate3,
  openGate3: openGate3,
  collisonGate3: collisonGate3
}