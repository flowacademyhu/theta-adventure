const minimap = require('./minimap.js')

const switch1 = {coords: coords = {
  x: [25],
  y: [3]
  },
  on: false
};

const switch2 = {coords: coords = {
  x: [25],
  y: [7]
  },
  on: false
};

const switch3 = {coords: coords = {
  x: [25],
  y: [11]
  },
  on: false
};

const switch4 = {coords: coords = {
  x: [25],
  y: [15]
  },
  on: false
};

const switch5 = {coords: coords = {
  x: [25],
  y: [19]
  },
  on: false
};

const isSwitchCord = (x, y, switch1, xCord, yCord) => {
  let switchStatus = 'on';
  if (minimap.currentBoardCoords.x === xCord && minimap.currentBoardCoords.y === yCord) {
    if (x === switch1.coords.x && y === switch1.coords.y && switch1.on === true) {
      return true
    } else if (x === switch1.coords.x && y === switch1.coords.y && switch1.on === false) {
      switchStatus = 'off';
      return switchStatus;
    }
  }
  return false;
}

module.exports = {
  switch1: switch1,
  switch2: switch2,
  switch3: switch3,
  switch4: switch4,
  switch5: switch5,
  isSwitchCord: isSwitchCord
}