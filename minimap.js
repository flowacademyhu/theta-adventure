
const minimap = [
  ['vmi.txt', 'castle.txt'], 
  ['vmi.txt', 'garden.txt', 'vmi2.txt']];

const currentBoardCoords = { x: 0, y: 1 };

const changeMapDown = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {  // down movement
    if (player.coords.x[i] > 28) {
      currentBoardCoords.x++;
      for (let j = 0; j < player.coords.x.length; j++) {
        player.coords.x[j] -= 27;
      }
    }
  }
  return;
}

const changeMapUp = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) { 
    if (player.coords.x[i] < 1) {  // up movement
      currentBoardCoords.x--;
      for (let j = 0; j < player.coords.x.length; j++) {
        player.coords.x[j] += 27;
      }
    }
  }
  return;
}
    
const changeMapRight = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.y[i] > 28) { // right movement
      currentBoardCoords.y++;
      for (let j = 0; j < player.coords.y.length; j++) {
        player.coords.y[j] -= 27;
      }
    }
  }
  return;
};

const changeMapLeft = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.y[i] < 1) {  // left movement
      currentBoardCoords.y--;
      for (let j = 0; j < player.coords.y.length; j++) {
        player.coords.y[j] += 27;
      }
    }
  }
  return;
}



module.exports = {
  minimap: minimap,
  changeMapDown: changeMapDown,
  changeMapLeft: changeMapLeft,
  changeMapRight: changeMapRight,
  changeMapUp, changeMapUp,
  currentBoardCoords: currentBoardCoords
}