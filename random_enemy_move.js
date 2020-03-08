const enemy = {
  coords: coords = {
    x: [1],
    y: [20]
  }
};

const enemyRandomMove = (enemy, map) => {
  enemy.coords.x[0] = Math.random(Math.map);
  enemy.coords.x[0]++;
  if (enemy.coords.x[0])
  enemy.coords.y[0] = Math.random(Math.map);
  enemy.coords.y[0]++;

};

setInterval(enemy, 1000);
