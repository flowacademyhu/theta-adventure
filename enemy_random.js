const enemy = {
  coords: coords = {
    x: [1],
    y: [15]
  }
};


const enemyPatrol = (enemy, map) => {
  for (let i = 0; i < enemy.coords.x.length; i++) {
    for (let j = 0; j < enemy.coords.y.length; j++) {
      if (map[enemy.coords.y[0]] <= map[enemy.coords.y[29]]) {
        enemy.coords.y[0]++;
      if (map[enemy.coords.y[0]] === map[enemy.coords.y[29]]) {
        enemy.coords.y[29]--;
      }

    }
  }
};

module.exports = {
  enemy: enemy,
  enemyPatrol: enemyPatrol
};