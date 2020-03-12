const minimap = [
  ['wall.txt', 'wall.txt', 'openBottom.txt', 'wall.txt', 'wall.txt'],
  ['lab1.txt', 'lab2.txt', 'insideCastle.txt', 'wall.txt', 'wall.txt'],
  ['lab3.txt', 'lab4.txt', 'castle.txt', 'garden4.txt', 'openLeft.txt'],
  ['wall.txt', 'garden2.txt', 'garden.txt', 'garden3.txt', 'wall.txt'],
  ['insideGhostCastle.txt', 'ghostcastle.txt'],
  ['menu.txt']]

const currentBoardCoords = {x: 5, y: 0}

const changeMapDown = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {  // down movement
    if (player.coords.x[i] > 28) {
      currentBoardCoords.x ++;
      for (let j = 0; j < player.coords.x.length; j++) {
        player.coords.x[j] -= 27;
      }
    } else if (currentBoardCoords.x === 1 && currentBoardCoords.y === 2) {
      for (let i = 0; i < player.coords.x.length; i++) {
        if (player.coords.x[i] > 28) {
          currentBoardCoords.x++;
          for (let j = 0; j < player.coords.x.length; j++) {
            player.coords.x[j] -= 11;
          }
        }
      }
    } else if (currentBoardCoords.x === 4 && currentBoardCoords.y === 0) {
      for (let i = 0; i < player.coords.x.length; i++) {
        if (player.coords.x[i] > 28) {
          currentBoardCoords.y++;
          for (let j = 0; j < player.coords.x.length; j++) {
            player.coords.x[j] -= 7;
            player.coords.y[j] -= 4;
          }
        }
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
    } else if (currentBoardCoords.x === 2 && currentBoardCoords.y === 2) {
      for (let i = 0; i < player.coords.x.length; i++) {
        if (player.coords.x[i] < 17 && player.coords.y[i] === 14) {
          currentBoardCoords.x--;
          for (let j = 0; j < player.coords.x.length; j++) {
            player.coords.x[j] += 10;
          }
        }
      }
    } else if (currentBoardCoords.x === 4 && currentBoardCoords.y === 1) {
      for (let i = 0; i < player.coords.x.length; i++) {
        if (player.coords.x[i] < 21 && player.coords.y[i] === 10) {
          currentBoardCoords.y--;
          for (let j = 0; j < player.coords.x.length; j++) {
            player.coords.x[j] += 7;
            player.coords.y[j] += 4;
          }
        }
      }
    }
  }
  return;
}
    
const changeMapRight = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.y[i] > 29) { // right movement
      currentBoardCoords.y++;
      for (let j = 0; j < player.coords.y.length; j++) {
        player.coords.y[j] -= 27;
      }
    }
  }
  return;
}

const changeMapLeft = (player) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.y[i] < 0) {  // left movement
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