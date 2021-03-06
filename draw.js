const terminal = require('terminal-kit').terminal
const colors = require('colors');
const inventory = require('./inventory.js');
const map = require('./mapreader.js');
const enemy = require('./enemy.js');
const gates = require('./gates.js');
const sword = require('./sword.js');
const movement = require('./movement.js');
const smallerenemies = require('./smallerenemies.js');
// const gameOver = require('./gameOver.js');
const gameFinished = require('./gameFinished.js');
const movingenemy = require('./movingenemy.js');
const minimap = require('./minimap.js')
const menuScreen = require('./menuScreen.js')
const menuItems = require('./menuItems.js')
const gameOverScreen = require('./gameOverScreen.js')

const player = {coords: coords = {
                x: [13, 14, 13, 14],
                y: [14, 14, 15, 15]
                                },
                life: 5
                }

const playerTopChange = (player) => {
  let playerTop = {coords: coords = {
     x: [player.coords.x[0], player.coords.x[2]],
     y: [player.coords.y[0], player.coords.y[2]]
    }
  }
   return playerTop
}

const playerBottomChange = (player) => {
  let playerBottom = {coords: coords = {
    x: [player.coords.x[1], player.coords.x[3]],
    y: [player.coords.y[1], player.coords.y[3]]
    }
  }
  return playerBottom
}

const playerRightChange = (player) => {
  let playerRight = {coords: coords = {
    x: [player.coords.x[2], player.coords.x[3]],
    y: [player.coords.y[2], player.coords.y[3]]
    }
  }
  return playerRight
}

const playerLeftChange = (player) => {
  let playerRight = {coords: coords = {
    x: [player.coords.x[0], player.coords.x[1]],
    y: [player.coords.y[0], player.coords.y[1]]
    }
  }
  return playerRight
}

let swordBladeUp = '| ';
let swordHiltUp = 'T ';
let swordBladeDown = '| ';
let swordHiltDown = '+ ';


const isPlayerCord = (x, y, player) => {
  for (let k = 0; k < player.coords.x.length; k++) {
    if (x === player.coords.x[k] && y === player.coords.y[k]) {
      return true;
    }
  }
  return false;
}

const gameOver = () => {
  terminal.red();
  console.log('                                                _____                         ____                 ');
  console.log('                                               / ____|                       / __ \\                ');
  console.log('                                              | |  __  __ _ _ __ ___   ___  | |  | |_   _____ _ __ ');
  console.log('                                              | | |_ |/ _` | \'_ ` _ \\ / _ \\ | |  | \\ \\ / / _ \ \'__|');
  console.log('                                              | |__| | (_| | | | | | |  __/ | |__| |\\ V /  __/ |   ');
  console.log('                                               \\_____|\\__,_|_| |_| |_|\\___|  \\____/  \\_/ \\___|_|   ');
  console.log(' ')
}

draw = (board, player) => {
  gates.openGate3(gates.gate3, movingenemy.enemy5);
  if (gameFinished.princessSaved.is === true) {
    console.clear()
    gameFinished.theEnd()
  } else {
    console.clear()
  let line = "                                        ";
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), enemy.enemyGhost, map.mapreader(), 4, 0);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), enemy.enemyGhost, map.mapreader(), 4, 0);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), enemy.enemyGhost, map.mapreader(), 4, 0);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), enemy.enemyGhost, map.mapreader(), 4, 0);
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), smallerenemies.enemy1, map.mapreader(), 1, 0);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), smallerenemies.enemy1, map.mapreader(), 1, 0);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), smallerenemies.enemy1, map.mapreader(), 1, 0);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), smallerenemies.enemy1, map.mapreader(), 1, 0);
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), smallerenemies.enemy2, map.mapreader(), 2, 0);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), smallerenemies.enemy2, map.mapreader(), 2, 0);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), smallerenemies.enemy2, map.mapreader(), 2, 0);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), smallerenemies.enemy2, map.mapreader(), 2, 0);
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), smallerenemies.enemy3, map.mapreader(), 2, 0);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), smallerenemies.enemy3, map.mapreader(), 2, 0);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), smallerenemies.enemy3, map.mapreader(), 2, 0);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), smallerenemies.enemy3, map.mapreader(), 2, 0);
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), smallerenemies.enemy4, map.mapreader(), 2, 0);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), smallerenemies.enemy4, map.mapreader(), 2, 0);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), smallerenemies.enemy4, map.mapreader(), 2, 0);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), smallerenemies.enemy4, map.mapreader(), 2, 0);
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), movingenemy.enemy5, map.mapreader(), 1, 2);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), movingenemy.enemy5, map.mapreader(), 1, 2);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), movingenemy.enemy5, map.mapreader(), 1, 2);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), movingenemy.enemy5, map.mapreader(), 1, 2);
  movement.enemyCollisonDown(player, playerBottomChange(player), playerTopChange(player), movingenemy.sleepingEnemy, map.mapreader(), 2, 4);
  movement.enemyCollisonRight(player, playerRightChange(player), playerLeftChange(player), movingenemy.sleepingEnemy, map.mapreader(), 2, 4);
  movement.enemyCollisonLeft(player, playerLeftChange(player), playerRightChange(player), movingenemy.sleepingEnemy, map.mapreader(), 2, 4);
  movement.enemyCollisonUp(player, playerTopChange(player), playerBottomChange(player), movingenemy.sleepingEnemy, map.mapreader(), 2, 4);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (player.life <= 0) {
        minimap.currentBoardCoords.x = 5
        minimap.currentBoardCoords.y = 0
        player.coords.x = [13, 14, 13, 14]
        player.coords.y = [14, 14, 15, 15]
        player.life = 'You dead boi'
      } 
      if(gates.isGate1(i, j, gates.gate1)) {
        line += ' #'.cyan.bgCyan;
      } else if (gates.isGate2(i, j, gates.gate2)) {
        line += ' #'.green.bgGreen;
      } else if (gates.isGate3(i, j, gates.gate3)) {
        line += ' #'.green.bgGreen;
      } else if (menuItems.isStartButtonCord(i, j, menuItems.startButton)) {
        line += ' S'.black.bgGreen;
      } else if (menuItems.isQuitButtonCord(i, j, menuItems.quitButton)) {
        line += ' Q'.black.bgRed;
      } else if (menuItems.isControlsButton(i, j, menuItems.controlsButton)) {
        line += ' C'.black.bgBlue;
      } else if (sword.drawSwordBlade(i, j, player)) {
        line += swordBladeUp.white.bgBlack;
        sword.swordUp = true;
      } else if (sword.drawSwordBlade(i, j, player) === false) {
        line += swordBladeDown.white.bgBlack;
        sword.swordUp = false;
      } else if (sword.drawSwordHilt(i, j, player)) {
        line += swordHiltUp.blue.bgBlack;
        sword.swordUp = true;
      } else if (sword.drawSwordHilt(i, j, player) === false) {
        line += swordHiltDown.blue.bgBlack;
        sword.swordUp = false;
        } else if (sword.drawSwordBlade(i, j, player)) {
        line += swordBladeUp.white.bgBlack;
        sword.swordUp = true;
      } else if (sword.drawSwordBlade(i, j, player) === false) {
        line += swordBladeDown.white.bgBlack;
        sword.swordUp = false;
      } else if (sword.drawSwordHilt(i, j, player)) {
        line += swordHiltUp.blue.bgBlack;
        sword.swordUp = true;
      } else if (sword.drawSwordHilt(i, j, player) === false) {
        line += swordHiltDown.blue.bgBlack;
        sword.swordUp = false;
      } else if (enemy.isEnemyGhostCord(i, j, enemy.enemyGhost)) {
        line += ' $'.white.bgWhite;
      } else if (smallerenemies.isEnemy1(i, j, smallerenemies.enemy1) === true) {
        line += '~~'.red.bgRed;
      } else if (smallerenemies.isEnemy2(i, j, smallerenemies.enemy2) === true) {
        line += '~~'.red.bgRed;
      } else if (smallerenemies.isEnemy3(i, j, smallerenemies.enemy3) === true) {
        line += '~~'.red.bgRed;
      } else if (smallerenemies.isEnemy4(i, j, smallerenemies.enemy4) === true) {
        line += '~~'.red.bgRed;
      } else if (movingenemy.isEnemy5(i, j, movingenemy.enemy5) === true) {
        line += ' @'.green.bgGreen;
      } else if (movingenemy.isSleepingEnemy(i, j, movingenemy.sleepingEnemy) === true) {
        line += ' Z'.blue.bgBlue;
      } else if (board[i][j] === 1 && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 1 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (board[i][j] === 1 && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (board[i][j] === 1 && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 1 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (board[i][j] === 1 && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (board[i][j] === 1) {
        line += ' 1'.gray.bgGray;
      } else if (board[i][j] === 2) {
        line += '|/'.brightYellow.bgBlack;
      } else if (board[i][j] === 3) {
        line += '\\|'.brightYellow.bgBlack;
      } else if (board[i][j] === 4) {
        line += ' *'.magenta.bgMagenta
      } else if (inventory.isKey1Cord(i, j, inventory.key1)) {
        line += 'o-'.cyan.bgBlack;
      } else if (inventory.isKey2Cord(i, j, inventory.key2)) {
        line += '=0'.green.bgBlack;
      } else if (inventory.isTorch(i, j, inventory.torch)) {
        line += '-@'.red.bgBlack
      } else if (inventory.isSwordHiltCord(i, j, inventory.sword)) {
        line += '-<'.blue.bgBlack;
      } else if (inventory.isSwordBladeCord(i, j, inventory.sword)) {
        line += '=='.white.bgBlack;
      } else if (isPlayerCord(i, j, player) && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 1 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (isPlayerCord(i, j, player) && minimap.currentBoardCoords.x === 2 && minimap.currentBoardCoords.y === 0 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (isPlayerCord(i, j, player) && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 1 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (isPlayerCord(i, j, player) && minimap.currentBoardCoords.x === 1 && minimap.currentBoardCoords.y === 0 && !inventory.inventory.includes('--@')) {
        line += '  '.bgBlack;
      } else if (isPlayerCord(i, j, player)) {
        line += ' *'.yellow.bgYellow;
      } else if (inventory.pack1Coord(i, j, inventory.pack1) || inventory.pack2Coord(i, j, inventory.pack2)) {
        line += '++'.red.bgWhite;
      } else if (board[i][j] === 8) {
        line += '  '.bgGrey;
      } else {
        line += '  '.bgBlack;
      }
    }
    line += '\n                                        ';
  }
  movingenemy.sleepingEnemyHit(player, inventory.inventory, movingenemy.sleepingEnemy, sword.swordUp, map.mapreader());
  movingenemy.enemy5Hit(player, inventory.inventory, movingenemy.enemy5, sword.swordUp, map.mapreader());
  smallerenemies.enemy1Hit(player, inventory.inventory, smallerenemies.enemy1, sword.swordUp, map.mapreader());
  smallerenemies.enemy2Hit(player, inventory.inventory, smallerenemies.enemy2, sword.swordUp, map.mapreader());
  smallerenemies.enemy3Hit(player, inventory.inventory, smallerenemies.enemy3, sword.swordUp, map.mapreader());
  smallerenemies.enemy4Hit(player, inventory.inventory, smallerenemies.enemy4, sword.swordUp, map.mapreader());
  enemy.enemyGhostHit(player, inventory.inventory, enemy.enemyGhost, sword.swordUp, map.mapreader());
  if (menuItems.startGame.sg === true && menuItems.controlsButton.show === false) {
    menuScreen.witcherScreen();
  }
  if (player.life === 'You dead boi' && menuItems.controlsButton.show === false) {
    gameOver();
  }
  if (menuItems.controlsButton.show === true) {
    menuScreen.controls();
  }
  console.log(line);
  console.log('Lives: ', player.life, '<3')
  console.log('Inventory:')
  console.log(Object.values(inventory.inventory));
  }
}

// setInterval(draw, 50, map.mapreader, player, inventory.key1);

module.exports = {
  isPlayerCord: isPlayerCord,
  draw: draw,
  player: player,
  swordBladeUp: swordBladeUp,
  swordHiltUp: swordHiltUp,
 }