const map = require('./maps.js');
const player = {
  coords: coords = {
    x: [24, 25, 24, 25],
    y: [14, 14, 15, 15]
  }
};
const moveDown = (player, map) => {
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

}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'w') {
    moveDown(player,map)
   
    }
  }
  if (key === 's') {
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
  }
  console.log(player);
});
