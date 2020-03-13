const minimap = require('./minimap.js')
const reset = require('./reset.js')
const draw = require('./draw.js')
const enemy = require('./enemy')
const smallerenemies = require('./smallerenemies')
const movingenemy = require('./movingenemy')
const inventory = require('./inventory')
const gates = require('./gates')

const controlsButton = {coords: coords = {
  x: [3],
  y: [15]},
  show: false
}

const isControlsButton = (x, y, controlsButton) => {
  if (minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 0) {
    for (let i = 0; i < controlsButton.coords.x.length; i++) {
      if (x === controlsButton.coords.x[i] && y === controlsButton.coords.y[i]){
        return true;
      }
    }
    return false
  }
}

const pressControlsButton = (player, controlsButton) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === controlsButton.coords.x[0] && player.coords.y[i] === controlsButton.coords.y[0] && minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 0) {
      if (controlsButton.show === false) {
        controlsButton.show = true;
        return controlsButton.show
      } else if (controlsButton.show === true) {
        controlsButton.show = false
        return controlsButton.show
      }
    }
  }
}

const startButton = {coords: coords = {
  x: [9],
  y: [25]
}}

let startGame = {sg: true}

const isStartButtonCord = (x, y, startButton) => {
  if (minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 0) {
    for (let i = 0; i < startButton.coords.x.length; i++) {
      if (x === startButton.coords.x[i] && y === startButton.coords.y[i]){
        return true;
      }
    }
    return false
  }
}

const pressStartButton = (player, startButton) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === startButton.coords.x[0] && player.coords.y[i] === startButton.coords.y[0] && minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 0) {
      minimap.currentBoardCoords.x = 2;
      minimap.currentBoardCoords.y = 2;
      startGame.sg = false;
      for (let j = 0; j < player.coords.x.length; j++) {
        player.coords.x[j] += 13;
        player.coords.y[j] -= 10;
        player.life = 5
        enemy.enemyGhost.life = 3
        smallerenemies.enemy1.life = 2
        smallerenemies.enemy2.life = 2
        smallerenemies.enemy3.life = 2
        smallerenemies.enemy4.life = 2
        movingenemy.enemy5.life = 3
        movingenemy.sleepingEnemy.life = 3
        inventory.key1.exists = true
        inventory.key2.exists = true
        gates.gate1.exists = true
        gates.gate2.exists = true
        gates.gate3.exists = true
        inventory.torch.exists = true
        inventory.sword.exists = true
        inventory.pack1.exist = true;
        inventory.pack2.exist = true;
        inventory.inventory = [];
      }
      return startGame.sg
    }
  }
}

const quitButton = {coords: coords = {
  x: [9],
  y: [5]
}}

const isQuitButtonCord = (x, y, quitButton) => {
  if (minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 0) {
    for (let i = 0; i < quitButton.coords.x.length; i++) {
      if (x === quitButton.coords.x[i] && y === quitButton.coords.y[i]){
        return true;
      }
    } return false
  }
}

const pressQuitButton = (player, quitButton) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === quitButton.coords.x[0] && player.coords.y[i] === quitButton.coords.y[0] && minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 0) {
      console.clear();
      process.exit(0)
    }
  }
}

const reStartButton = {coords: coords = {
  x: [15],
  y: [25]
}}

const isReStartButtonCord = (x, y, reStartButton) => {
  if (minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 2) {
    for (let i = 0; i < startButton.coords.x.length; i++) {
      if (x === reStartButton.coords.x[i] && y === reStartButton.coords.y[i]){
        return true;
      }
    } return false
  }
}

const pressReSartButton = (player, reStartButton) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] === reStartButton.coords.x[0] && player.coords.y[i] === reStartButton.coords.y[0] && minimap.currentBoardCoords.x === 5 && minimap.currentBoardCoords.y === 2) {
      minimap.currentBoardCoords.x = 2;
      minimap.currentBoardCoords.y = 2;
      for (let j = 0; j < player.coords.x.length; j++) {
        reset.reset(draw.player, enemy.enemyGhost, smallerenemies.enemy1, smallerenemies.enemy2, smallerenemies.enemy3, smallerenemies.enemy4, movingenemy.enemy5, movingenemy.sleepingEnemy, inventory.key1, inventory.key2, gates.gate1, gates.gate2, gates.gate3, inventory.torch, inventory.sword, inventory.inventory);
        player.coords.x[j] += 10;
        player.coords.y[j] -= 10;
      }
    }
  }
}

module.exports = {
  startButton: startButton,
  isStartButtonCord: isStartButtonCord,
  pressStartButton: pressStartButton,
  quitButton: quitButton,
  isQuitButtonCord: isQuitButtonCord,
  pressQuitButton: pressQuitButton,
  reStartButton: reStartButton,
  isReStartButtonCord: isReStartButtonCord,
  pressReSartButton: pressReSartButton,
  controlsButton: controlsButton,
  isControlsButton: isControlsButton,
  pressControlsButton: pressControlsButton,
  startGame: startGame
}