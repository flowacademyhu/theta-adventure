const minimap = require('./minimap');
const main = require('./connect');
/* const enemy = {
  coords: coords = {
    x: [3],
    y: [27]
  }
}; */

const moveEnemy = () => {
  if (main.enemy.coords.y[0] !== 26 && main.enemy.coords.x[0] === 20) {
    main.enemy.coords.y[0]++;
    if (main.enemy.coords.y[0] === 26) {
      main.enemy.coords.x[0]++;
    }
  }
  if (main.enemy.coords.y[0] > 3 && main.enemy.coords.x[0] === 21) {
    main.enemy.coords.y[0]--;
    if (main.enemy.coords.y[0] === 3) {
      main.enemy.coords.x[0]--;
    }
  }
}


setInterval(main.main, 50);
setInterval(moveEnemy, 150);
module.exports = {
  moveenemy: moveEnemy
}
