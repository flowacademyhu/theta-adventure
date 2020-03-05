
const inventory = {slot1: [], slot2: [], slot3: []};

const key1 = {coords: coords = {
              x: [4, 4],
              y: [3, 4]
}}

const isKeyVisible = (player, key1) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < key1.coords.x.length; j++) {
      if (player.coords.x[i] === key1.coords.x[i] && player.coords.y[j] === key1.coords.y[j]) {
        return false;
      }
    }
  }
  return true;
}

/* const keyCoord = () => { 
} */

module.exports = {
  inventory: inventory,
  key1: key1,
  isKeyVisible: isKeyVisible,
}