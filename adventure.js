const map = require('./mapreader.js');
const draw = require('./draw.js');
const movement = require('./movement.js')
const inventory = require('./inventory.js')
const enemy = require('./enemy.js')
const gates = require('./gates.js')
const puzzle = require('./puzzle.js')
const sword = require('./sword.js')
const smallerenemies = require('./smallerenemies.js')
const colors = require('colors')

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 's') {
    movement.moveDown(draw.player, map.mapreader());
    // movement.enemyCollisonDown(draw.player, enemy.enemy, map.mapreader());
  }

  if (key === 'w') {
    movement.moveUp(draw.player, map.mapreader());
    // movement.enemyCollisonUp(draw.player, enemy.enemy, map.mapreader())
  }

  if (key === 'a') {
    movement.moveLeft(draw.player, map.mapreader());
    // movement.enemyCollisonLeft(draw.player, enemy.enemy, map.mapreader());
  }

  if (key === 'd') {
    movement.moveRight(draw.player, map.mapreader());
    // movement.enemyCollisonRight(draw.player, enemy.enemy, map.mapreader());
  }
  if (key === 'e') {
    inventory.pickUpKey1(draw.player, inventory.key1, inventory.inventory)
    inventory.pickUpKey2(draw.player, inventory.key2, inventory.inventory)
    inventory.pickUpSword(draw.player, inventory.sword, inventory.inventory)
    gates.openGate1(draw.player, gates.gate1, inventory.inventory)
    gates.openGate2(draw.player, gates.gate2, inventory.inventory)
  }
  if (key === 'o') {
    sword.swordPos();
  }
  if (key === 'q') {
    process.exit(0);
  }
});

const witcher = () => {
  setInterval(smallerenemies.moveEnemy1, 100);
  setInterval(smallerenemies.moveEnemy2, 100);
  setInterval(smallerenemies.moveEnemy3, 100);
  setInterval(smallerenemies.moveEnemy4, 100);
  setInterval(enemy.moveEnemyGhost, 150);
  setInterval(() => { draw.draw(map.mapreader(), draw.player) }, 50);
}

module.exports = {
  witcher: witcher
}
