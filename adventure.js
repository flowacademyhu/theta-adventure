const map = require('./mapreader.js');
const draw = require('./draw.js');
const movement = require('./movement.js')
const inventory = require('./inventory.js')
const enemy = require('./enemyGhost')
const gates = require('./gates.js');
const enemies = require('./smallerenemies');
const movingEnemy = require('./movingenemy');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 's') {
    movement.moveDown(draw.player, map.mapreader());
  }

  if (key === 'w') {
    movement.moveUp(draw.player, map.mapreader());
  }

  if (key === 'a') {
    movement.moveLeft(draw.player, map.mapreader());
  }

  if (key === 'd') {
    movement.moveRight(draw.player, map.mapreader());
  }

  if (key === 'e') {
    inventory.pickUpKey1(draw.player, inventory.key1, inventory.inventory)
    inventory.pickUpKey2(draw.player, inventory.key2, inventory.inventory)
    inventory.pickUpSword(draw.player, inventory.sword, inventory.inventory)
  }

  if (key === 'r') {
    gates.openGate1(draw.player, gates.gate1, inventory.inventory)
    gates.openGate2(draw.player, gates.gate2, inventory.inventory)
  }

  if (key === 'q') {
    process.exit(0);
  }
});

setInterval(() => { draw.draw(map.mapreader(), draw.player); }, 50);
setInterval(enemy.moveEnemyGhost, 150);
setInterval(enemies.moveEnemy1, 150);
setInterval(enemies.moveEnemy2, 150);
setInterval(enemies.moveEnemy3, 150);
setInterval(enemies.moveEnemy4, 150);
setInterval(movingEnemy.movingEnemy, 200, draw.player);
setInterval(movingEnemy.moveSleeping, 200, draw.player);
