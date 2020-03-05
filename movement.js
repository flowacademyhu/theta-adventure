// const map = require('./maps.js');
const draw = require('./draw.js')
/* const player = {
  coords: coords = {
    x: [24, 25, 24, 25],
    y: [14, 14, 15, 15]
  }
}; */
/* const moveDown = (player, map) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] && player.coords.x[i + 1] === 0) {
      player.coords.x[i]--;
    }else {(player.coords.x[i] === 1);
      return;
    }

}
const moveUp = (player, map) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (player.coords.x[i] && player.coords.x[i + 1] === 0) {
      player.coords.x[i]++;
    }else {player.coords.x[i] === 1;
    }

}
const moveLeft = (player, map) => {
  for (let i = 0; i < player.coords.y.length; i++) {
    if (player.coords.y[i] && player.coords.y[i + 1] === 0) {
      player.coords.y[i]--;
    }else {player.coords.y[i] === 1;
    } return;
}
const moveRight = (player,map) => {
  for (let i = 0; i < player.coords.y.length; i++) {
    if (player.coords.y[i] && player.coords.y[i + 1] === 0) {
      player.coords.y[i]++;
    }else {player.coords.y[i] === 0;
    } return;
  } */

// const player = { x: [1, 1, 2, 2], y: [3, 4, 3, 4] };
const map = require('./mapreader.js');
/* const player = {
  coords: coords = {
    x: [24, 25, 24, 25],
    y: [14, 14, 15, 15]
  }
}; */

const moveUp = (player, map) => {
  if (map[player.coords.x[0] - 1][player.coords.y[0]] === 1 || map[player.coords.x[2] - 1][player.coords.y[2]] === 1) {
    return;
  } else {
    for (let i = 0; i < player.coords.x.length; i++) {
    player.coords.x[i]--;
    }
  }
  return;
}

const moveDown = (player, map) => {
  if (map[player.coords.x[1] + 1][player.coords.y[1]] === 1 || map[player.coords.x[3] + 1][player.coords.y[3]] === 1) {
    return;
  } else {
    for (let i = 0; i < player.coords.x.length; i++) {
    player.coords.x[i]++;
    }
  }
return;
}

const moveLeft = (player, map) => {
  if (map[player.coords.x[0]][player.coords.y[0] - 1] === 1 || map[player.coords.x[1]][player.coords.y[1] - 1] === 1) {
    return;
  } else {
    for (let i = 0; i < player.coords.y.length; i++) {
    player.coords.y[i]--;
    }
  }
return;
}

const moveRight = (player, map) => {
  if (map[player.coords.x[2]][player.coords.y[2] + 1] === 1 || map[player.coords.x[3]][player.coords.y[3] + 1] === 1) {
    return;
  } else {
    for (let i = 0; i < player.coords.y.length; i++) {
    player.coords.y[i]++;
    }
  }
return;
}

/* const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'w') {
    moveDown(draw.player,map)
    }

  if (key === 's') {
    moveUp(draw.player,map)
    }
  
  if (key === 'a') {
    moveLeft(draw.player,map)
    }

  if (key === 'd') {
    moveRight(draw.player,map)
    }
  
  if (key === 'q') {
    process.exit(0); 
    }
});
  
/*  if (key === 's') {
    moveUp(player,map)
    
    }
  }
  if (key === 'a') {
    moveLeft(player,map)
    }
  }
  if (key === 'd') {
    moveRight(player,map)
    }
  }
  if (key === 'q') {
    process.exit(0);
=======
    process.exit(0);
>>>>>>> 9dea4d46ad58e8fde84adf95998ed22462f0ab5c
  }
  console.log(player);
});
*/

module.exports = {
  moveDown: moveDown,
  moveUp: moveUp,
  moveLeft: moveLeft,
  moveRight: moveRight }
