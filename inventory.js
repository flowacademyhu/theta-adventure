const minimap = require('./minimap.js')

const inventory = {slot1: [], slot2: [], slot3: []};

const key1 = {coords: coords = {
              x: [4],
              y: [3] },
              exists: true
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
      if (player.coords.x[i] === key.coords.x[0] && player.coords.y[i] === key.coords.y[0]) {
        key.exists = false;
        inventory.slot1 = ['o-'];
        return;
      }
    }
    return;
  }

module.exports = {
  inventory: inventory,
  key1: key1,
  isKey1Cord: isKey1Cord,
  pickUpKey1: pickUpKey1
}