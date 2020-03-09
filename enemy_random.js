const enemy = {
  coords: coords = {
    x: [1],
    y: [15]
  }
};

const enemyPatrolY = (enemy, map) => {
  for (let i = 0; i < enemy.coords.y.length; i++) {
    if (map[enemy.coords.y[i]] <= 29) {
      enemy.coords.y[i]++;
      if (map[enemy.coords.y[i]] === 29) {
        enemy.coords.y[i]--;
      }
    }
  }
};

const enemyPatrolX = (enemy, map) => {
  for (let j = 0; j < enemy.coords.x.length; j++) {
    if (map[enemy.coords.x[j]] <= 29) {
      enemy.coords.x[j]++;
      if (map[enemy.coords.x[j]] === 29) {
        enemy.coords.x[j]--;
      }
    }
  }

};

module.exports = {
  enemy: enemy,
  enemyPatrolY: enemyPatrolY,
  enemyPatrolX: enemyPatrolX
};
