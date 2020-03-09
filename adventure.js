const map = require('./mapreader.js');
const draw = require('./draw.js');
const movement = require('./movement.js')
const inventory = require('./inventory.js')
const enemy = require('./enemy.js')
const gates = require('./gates.js')

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 's') {
    movement.moveDown(draw.player, map.mapreader())
    }

  if (key === 'w') {
    movement.moveUp(draw.player, map.mapreader())
    }
  
  if (key === 'a') {
    movement.moveLeft(draw.player, map.mapreader())
    }

  if (key === 'd') {
    movement.moveRight(draw.player, map.mapreader())
    }

  if (key === 'e') {
    inventory.pickUpKey1(draw.player, inventory.key1, inventory.inventory)
    inventory.pickUpKey2(draw.player, inventory.key2, inventory.inventory)
  }

  if (key === 'r') {
    gates.openGate1(draw.player, gates.gate1, inventory.inventory)
    gates.openGate2(draw.player, gates.gate2, inventory.inventory)
  }
  
  if (key === 'q') {
    process.exit(0); 
  }
});

setInterval(() => { draw.draw(map.mapreader(), draw.player)}, 50);