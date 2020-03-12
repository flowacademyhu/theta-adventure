const inventory = require('./inventory');

let swordUp = true;

const drawSwordBlade = (x, y, player) => {
  if(swordUp === true && inventory.inventory.includes('-<==') && x === player.coords.x[2] - 1 && y === player.coords.y[2] + 1) {
    return true;
  } else if (swordUp === false && inventory.inventory.includes('-<==') && x === player.coords.x[3] + 1 && y === player.coords.y[3] + 1) {
    return false;
  }
}

const drawSwordHilt = (x, y, player) => {
  if(swordUp === true && inventory.inventory.includes('-<==') && x === player.coords.x[2] && y === player.coords.y[2] + 1) {
    return true;
  } else if (swordUp === false && inventory.inventory.includes('-<==') && x === player.coords.x[3] && y === player.coords.y[3] + 1) {
  return false;
  }
}

const swordPos = () => {
  if (swordUp === true) {
    swordUp = false;
  } else if (swordUp === false) {
    swordUp = true;
  }
  return swordUp;
}

module.exports = {
  drawSwordBlade: drawSwordBlade,
  drawSwordHilt: drawSwordHilt,
  swordUp: swordUp,
  swordPos: swordPos
}