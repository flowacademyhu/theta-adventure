// const drawn = require('./draw.js');
// const map = require('./mapreader.js');
// const movement = require('./movement.js');

const enemy = {
  coords: coords = {
    x: [15],
    y: [27]
  }
};

const enemyMove = (player, enemy, map) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    for (let j = 0; j < player.coords.y.length; j++) {
      if (map[enemy.coords.x[0]] < map[player.coords.x[i]] && map[enemy.coords.x[0]] === 0) {
        enemy.coords.x[0]++;
      } else {
        enemy.coords.x[0]--;
      }
      if (map[enemy.coords.y[0]] < map[player.coords.y[j]] && map[enemy.coords.y[0]] === 0) {
        enemy.coords.y[0]++;
      } else {
        enemy.coords.y[0]--;
      }
    }
  }
};
