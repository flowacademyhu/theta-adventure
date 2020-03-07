
const minimap = [
  ['vmi', 'castle.txt'], 
  ['vmi2', 'garden.txt']]

const currentBoardCoords = {x: 1, y: 1}

const changeMap = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] > 30) {
      currentBoardCoords.x ++;
      for (let j = 0; j < player.coords.x.length; j++) {
        player.coords.x[j] -= 29;
      }
    } else if (player.coords.x[i] < 2) {
      for (let j = 0; j < player.coords.x.length; j++) {
        player.coords.x[j] += 29;
      }
      currentBoardCoords.x--;
    } else if (player.coords.y[i] > 30) {
      for (let j = 0; j < player.coords.y.length; j++) {
        player.coords.y[j] -= 29;
      }
      currentBoardCoords.y++;
    } else if (player.coords.y[i] < 2) {
      for (let j = 0; j < player.coords.y.length; j++) {
        player.coords.y[j] += 29;
      }
      currentBoardCoords.y--;
    }
  }
}


module.exports = {
  minimap: minimap,
  // currentBoard: currentBoard,
  changeMap: changeMap,
  currentBoardCoords: currentBoardCoords
}