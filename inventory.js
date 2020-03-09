const minimap = require('./minimap.js')

const inventory = []

const key1 = {coords: coords = {
  x: [4],
  y: [3] },
  exists: true
}

const isKey1Cord = (x, y, key1) => {
  if(minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 2) {
    for (let k = 0; k < key1.coords.x.length; k++) {
      if (x === key1.coords.x[k] && y === key1.coords.y[k] && key1.exists === true) {
        return true;
      }
    }
    return false;
  }
}

const pickUpKey1 = (player, key, inventory) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === key.coords.x[0] && player.coords.y[i] === key.coords.y[0]) {
      key.exists = false;
      inventory.push('o-')
      return;
    }
  }
  return;
}

const key2 = {coords: coords = {
  x: [2],
  y: [26] },
  exists: true
}

const isKey2Cord = (x, y, key2) => {
  if(minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 1) {
    for (let k = 0; k < key2.coords.x.length; k++) {
      if (x === key2.coords.x[k] && y === key2.coords.y[k] && key2.exists === true) {
        return true;
      }
    }
  return false;
  }
}

const pickUpKey2 = (player, key, inventory) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === key.coords.x[0] && player.coords.y[i] === key.coords.y[0]) {
      key.exists = false;
      inventory.push('=0')
      return;
    }
  }
  return;
}

const sword = {
  swordHiltCoords: swordHiltCoords = {
  x: [11],
  y: [14]},
  swordBladeCoords: swordBladeCoords = {
    x: [11],
    y: [15]},
  exists: true
}

const isSwordHiltCord = (x, y, sword) => {
  if (minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < sword.swordHiltCoords.x.length; k++) {
      if (x === sword.swordHiltCoords.x[k] && y === sword.swordHiltCoords.y[k] && sword.exists === true) {
        return true;
      }
    }
  }
  return false;
}

const isSwordBladeCord = (x, y, sword) => {
  if (minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0) {
    for (let k = 0; k < sword.swordBladeCoords.x.length; k++) {
      if (x === sword.swordBladeCoords.x[k] && y === sword.swordBladeCoords.y[k] && sword.exists === true) {
        return true;
      }
    }
  }
  return false;
}

const pickUpSword = (player, sword, inventory) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === sword.swordHiltCoords.x[0] && player.coords.y[i] === sword.swordHiltCoords.y[0] || player.coords.x[i] === sword.swordBladeCoords.x[0] && player.coords.y[i] === sword.swordBladeCoords.y[0]) {
      sword.exists = false;
      inventory.push('-<==')
      return;
    }
  }
  return;
}

module.exports = {
  inventory: inventory,
  key1: key1,
  isKey1Cord: isKey1Cord,
  pickUpKey1: pickUpKey1,
  key2: key2,
  isKey2Cord: isKey2Cord,
  pickUpKey2, pickUpKey2,
  sword: sword,
  isSwordHiltCord: isSwordHiltCord,
  isSwordBladeCord: isSwordBladeCord,
  pickUpSword: pickUpSword
}