const map = require('./mapreader.js');
const draw = require('./draw.js');
const movement = require('./movement.js')
const inventory = require('./inventory.js')
const enemy = require('./enemy.js')
const gates = require('./gates.js')
const sword = require('./sword.js')
const smallerenemies = require('./smallerenemies.js')
const colors = require('colors')
const movingenemy = require('./movingenemy.js')
const menuItems = require('./menuItems.js')
const gameFinished = require('./gameFinished.js')
// const gameOver = require('./gameOver.js')

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
    inventory.pickUpKey1(draw.player, inventory.key1, inventory.inventory);
    inventory.pickUpKey2(draw.player, inventory.key2, inventory.inventory);
    inventory.pickUpSword(draw.player, inventory.sword, inventory.inventory);
    inventory.pickUpTorch(draw.player, inventory.torch, inventory.inventory);
    gates.openGate1(draw.player, gates.gate1, inventory.inventory);
    gates.openGate2(draw.player, gates.gate2, inventory.inventory);
    menuItems.pressStartButton(draw.player, menuItems.startButton);
    menuItems.pressQuitButton(draw.player, menuItems.quitButton);
    menuItems.pressControlsButton(draw.player, menuItems.controlsButton);
    inventory.healthpack(draw.player, inventory.pack1);
    inventory.healthpack(draw.player, inventory.pack2);
    gameFinished.finishGame(draw.player, 0, 2)
    }
  if (key === 'o') {
    sword.swordPos();
  }
  if (key === 'q') {
    console.clear()
    process.exit(0);
  }
});

const witcher = () => {
setInterval(smallerenemies.moveEnemy1, 100);
setInterval(smallerenemies.moveEnemy2, 100);
setInterval(smallerenemies.moveEnemy3, 100);
setInterval(smallerenemies.moveEnemy4, 100);
setInterval(movingenemy.movingEnemy, 200, draw.player)
setInterval(movingenemy.moveSleeping, 200, draw.player)
setInterval(enemy.moveEnemyGhost, 50);
setInterval(() => { draw.draw(map.mapreader(), draw.player)}, 75);
  }

witcher();

module.exports = {
  witcher: witcher,
}