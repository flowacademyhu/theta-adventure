
const inventory = {slot1: [], slot2: [], slot3: []};

const key1 = {coords: coords = {
              x: [4],
              y: [3] },
              exists: true
}

const isKeyCord = (x, y, key1) => {
    for (let k = 0; k < key1.coords.x.length; k++) {
      if (x === key1.coords.x[k] && y === key1.coords.y[k] && key1.exists === true) {
        return true;
      }
    }
    return false;
  }

  const pickUp = (player, key, inventory) => {
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
  isKeyCord: isKeyCord,
  pickUp: pickUp
}