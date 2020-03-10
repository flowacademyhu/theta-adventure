
const switch1 = {coords: coords = {
  x: [25, 26, 25, 26],
  y: [3, 3, 4, 4]
  },
  on: false
}

const switch2 = {coords: coords = {
  x: [25, 26, 25, 26],
  y: [7, 7, 8, 8]
  },
  on: false
}

const switch3 = {coords: coords = {
  x: [25, 26, 25, 26],
  y: [11, 11, 12, 12]
  },
  on: false
}

const switch4 = {coords: coords = {
  x: [25, 26, 25, 26],
  y: [15, 15, 16, 16]
  },
  on: false
}

const switch5 = {coords: coords = {
  x: [25, 26, 25, 26],
  y: [19, 19, 20, 20]
  },
  on: false
}

const isSwitchCord = (x, y, switch1, switch2, switch3, switch4, switch5) => {
  if (minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 4) {
    for (let k = 0; k < switch1.coords.x.length; k++) {
      if (x === switch1.coords.x[k] && y === switch1.coords.y[k]) {
        return true;
      } else if (x === switch2.coords.x[k] && y === switch2.coords.y[k]) {
        return true;
      } else if (x === switch3.coords.x[k] && y === switch3.coords.y[k]) {
        return true;
      } else if (x === switch4.coords.x[k] && y === switch4.coords.y[k]) {
        return true;
      } else if (x === switch5.coords.x[k] && y === switch5.coords.y[k]) {
        return true;
      }
    }
  } return false;
}

const switch1OnOff = (player, switch1, switch2, switch3, switch4, switch5) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < switch1.coords.x.length; i++) {
      if (player.coords.x[i] === switch1.coords.x[j] && player.coords.y[i] === switch1.coords.y[j]) {
        if (switch1.on === false) {
          switch1.on === true;
        } else {
          switch1.on === false;
        }
      }
    }
  }
}

const switch2OnOff = (player, switch2) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < switch1.coords.x.length; i++) {
      if (player.coords.x[i] === switch2.coords.x[j] && player.coords.y[i] === switch2.coords.y[j]) {
        if (switch2.on === false) {
          switch2.on === true;
        } else {
          switch2.on === false;
        }
      }
    }
  }
}

const switch3OnOff = (player, switch3) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < switch1.coords.x.length; i++) {
      if (player.coords.x[i] === switch3.coords.x[j] && player.coords.y[i] === switch3.coords.y[j]) {
        if (switch3.on === false) {
          switch3.on === true;
        } else {
          switch3.on === false;
        }
      }
    }
  }
}

const switch4OnOff = (player, switch4) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < switch1.coords.x.length; i++) {
      if (player.coords.x[i] === switch4.coords.x[j] && player.coords.y[i] === switch4.coords.y[j]) {
        if (switch4.on === false) {
          switch4.on === true;
        } else {
          switch4.on === false;
        }
      }
    }
  }
}
const switch5OnOff = (player, switch5) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < switch1.coords.x.length; i++) {
      if (player.coords.x[i] === switch5.coords.x[j] && player.coords.y[i] === switch5.coords.y[j]) {
        if (switch5.on === false) {
          switch5.on === true;
        } else {
          switch5.on === false;
        }
      }
    }
  }
}

module.exports = {
  switch1: switch1,
  switch2: switch2,
  switch3: switch3,
  switch4: switch4,
  switch5: switch5,
  isSwitchCord: isSwitchCord,
  switch1OnOff: switch1OnOff,
  switch2OnOff: switch2OnOff,
  switch3OnOff: switch3OnOff,
  switch4OnOff: switch4OnOff,
  switch5OnOff: switch5OnOff
}