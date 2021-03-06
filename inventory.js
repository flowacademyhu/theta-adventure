const minimap = require('./minimap.js')
const colors = require('colors')

let inventory = []

const key1 = {coords: coords = {
  x: [2],
  y: [2] },
  exists: true
}

const torch = {coords: coords = {
  x: [15],
  y: [15] },
  exists: true
}

const isTorch = (x, y, torch) => {
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4) {
    for (let k = 0; k < torch.coords.x.length; k++) {
      if (x === torch.coords.x[k] && y === torch.coords.y[k] && torch.exists === true) {
        return true;
      }
    }
    return false;
  }
}

const isKey1Cord = (x, y, key1) => {
  if(minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0) {
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
    if (player.coords.x[i] === key.coords.x[0] && player.coords.y[i] === key.coords.y[0] && key.exists === true && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0) {
      key.exists = false;
      inventory.push('o-')
      return;
    }
  }
  return;
}

const pickUpTorch = (player, torch, inventory) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === torch.coords.x[0] && player.coords.y[i] === torch.coords.y[0] && torch.exists === true && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4) {
      torch.exists = false;
      inventory.push('--@');
      return;
    }
  }
  return;
}

const key2 = {coords: coords = {
  x: [18],
  y: [14] },
  exists: true
}

const isKey2Cord = (x, y, key2) => {
  if(minimap.currentBoardCoords.x === 3 && minimap.currentBoardCoords.y === 2) {
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
    if (player.coords.x[i] === key.coords.x[0] && player.coords.y[i] === key.coords.y[0] && key2.exists === true && minimap.currentBoardCoords.x === 3 && minimap.currentBoardCoords.y === 2) {
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
    if (player.coords.x[i] === sword.swordHiltCoords.x[0] && player.coords.y[i] === sword.swordHiltCoords.y[0] || player.coords.x[i] === sword.swordBladeCoords.x[0] && player.coords.y[i] === sword.swordBladeCoords.y[0] && swordBladeCoords.exists === true && swordHiltCoords.exists === true  && minimap.currentBoardCoords.x === 4 && minimap.currentBoardCoords.y === 0) {
      sword.exists = false;
      inventory.push('-<==')
      return;
    }
  }
  return;
}

const pack1 = {
  coords: {
    x: [9],
    y: [3]
  },
  exist: true
};
const pack2 = {
  coords: {
    x: [27],
    y: [27]
  },
  exist: true
};
const pack1Coord = (x, y, pack) => {
  if (minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0) {
    for (let i = 0; i < pack.coords.x.length; i++) {
      if (x === pack.coords.x[i] && y === pack.coords.y[i] && pack.exist === true) {
        return true;
      }
    }
  }
};

const pack2Coord = (x, y, pack) => {
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 2) {
    for (let i = 0; i < pack.coords.x.length; i++) {
      if (x === pack.coords.x[i] && y === pack.coords.y[i] && pack.exist === true) {
        return true;
      }
    }
  }
};


const healthpack = (player, pack) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.life < 5 && pack.exist === true) {
      if (player.coords.x[i] === pack.coords.x[0] || player.coords.x[i] === pack.coords.y[0] || player.coords.y[i] === pack.coords.y[0] || player.coords.y[i] === pack.coords.x[0]) {
        pack.exist = false;
        player.life = 5;
      }
    }
  }
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
  pickUpSword: pickUpSword,
  torch: torch,
  isTorch: isTorch,
  pickUpTorch: pickUpTorch,
  pack1: pack1,
  pack2: pack2,
  pack1Coord: pack1Coord,
  pack2Coord: pack2Coord,
  healthpack: healthpack
}