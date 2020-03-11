const map = require('./minimap');
const board = map.minimap;
const req = require('./mapreader');
const reader = req.mapreader;
const enemymove = require('./enemy');
const collide = require('./enemycollide')

let player = {
  x: [24, 25, 24, 25],
  y: [14, 14, 15, 15]
};
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'w') {
    for (let i = 0; i < player.x.length; i++) {
      player.x[i]--;
    }
  }
  if (key === 's') {
    for (let i = 0; i < player.x.length; i++) {
      player.x[i]++;
    }
  }
  if (key === 'a') {
    for (let i = 0; i < player.y.length; i++) {
      player.y[i]--;
    }
  }
  if (key === 'd') {
    for (let i = 0; i < player.y.length; i++) {
      player.y[i]++;
    }
  }
  if (key === 'q') {
    process.exit(0);
  }
});

const isEnemyCord = (x, y, enemy) => {
  if (currentmap === board[3][2]) {
    if (enemy.coords.x.includes(x) && enemy.coords.y.includes(y)) {
      return true;
    }
  }
  return false;
};

const printnewmap = (map, player) => {
  console.clear();
  let line = "";
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (isPlayerCord(i, j, player)) {
        line += ' *';
      } else if (isEnemyCord(i, j, enemy)) {
        line += ' $';
      } else if (map[i][j] === 1) {
        line += ' 1';
      } else {
        line += '  ';
      }
    }
    line += '\n';
  }

  console.log(line);
  //  console.log(player)
};
const isPlayerCord = (x, y, player) => {
  for (let k = 0; k < player.x.length; k++) {
    if (x === player.x[k] && y === player.y[k]) {
      return true;
    }
  }
  return false;
};
const changeXminus = (player) => {
  for (let i = 0; i < player.x.length; i++) {
    if (player.x[i] > 29) {
      return true;
    }
  }
};
const changeXpositive = (player) => {
  for (let i = 0; i < player.x.length; i++) {
    if (player.x[i] < 0) {
      return true;
    }
  }
};
const changeYminus = (player) => {
  for (let i = 0; i < player.y.length; i++) {
    if (player.y[i] > 30) {
      return true;
    }
  }
};
const changeYpositive = (player) => {
  for (let i = 0; i < player.y.length; i++) {
    if (player.y[i] < 0) {
      return true;
    }
  }
};
const shiftXminus = (player) => {
  for (let i = 0; i < player.x.length; i++) {
    player.x[i] -= 30;
  }
};
const shiftXpos = (player) => {
  for (let i = 0; i < player.x.length; i++) {
    player.x[i] += 30;
  }
};
const shiftYminus = (player) => {
  for (let i = 0; i < player.y.length; i++) {
    player.y[i] -= 30;
  }
};
const shiftYpos = (player) => {
  for (let i = 0; i < player.y.length; i++) {
    player.y[i] += 30;
  }
};
let currentmap = board[2][2];
const connect = (player) => {
  printnewmap(reader(currentmap), player);
  if (currentmap === board[2][2] && changeXminus(player)) {
    currentmap = board[3][2];
    shiftXminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][2] && changeXpositive(player)) {
    currentmap = board[2][2];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][2] && changeYpositive(player)) {
    currentmap = board[3][1];
    shiftYpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][1] && changeYminus(player)) {
    currentmap = board[3][2];
    shiftYminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][2] && changeYminus(player)) {
    currentmap = board[3][3];
    shiftYminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][3] && changeYpositive(player)) {
    currentmap = board[3][2];
    shiftYpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][1] && changeXminus(player)) {
    currentmap = board[4][1];
    shiftXminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[4][1] && changeXpositive(player)) {
    currentmap = board[3][1];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][2] && changeXpositive(player)) {
    currentmap = board[2][2];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][1] && changeXpositive(player)) {
    currentmap = board[2][1];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][1] && changeXminus(player)) {
    currentmap = board[3][1];
    shiftXminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][1] && changeXpositive(player)) {
    currentmap = board[1][1];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[1][1] && changeYpositive(player)) {
    currentmap = board[1][0];
    shiftYpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[1][0] && changeYpositive(player)) {
    currentmap = board[1][1];
    shiftYpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[1][0] && changeXminus(player)) {
    currentmap = board[2][0];
    shiftXminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[1][1] && changeXminus(player)) {
    currentmap = board[2][1];
    shiftXminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[1][0] && changeYminus(player)) {
    currentmap = board[1][1];
    shiftYminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][1] && changeYpositive(player)) {
    currentmap = board[2][0];
    shiftYpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][0] && changeXpositive(player)) {
    currentmap = board[1][0];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][0] && changeYminus(player)) {
    currentmap = board[2][1];
    shiftYminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[3][3] && changeXpositive(player)) {
    currentmap = board[2][3];
    shiftXpos(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][3] && changeXminus(player)) {
    currentmap = board[3][3];
    shiftXminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][3] && changeYminus(player)) {
    currentmap = board[2][4];
    shiftYminus(player);
    printnewmap(reader(currentmap), player);
  }
  if (currentmap === board[2][4] && changeYpositive(player)) {
    currentmap = board[2][3];
    shiftYpos(player);
    printnewmap(reader(currentmap), player);
  }
};
let enemy = {
  coords: {
    x: [20, 20, 21, 21],
    y: [3, 4, 3, 4, 3, 4]
  }
};

const main = () => {
  connect(player);
  collide.enemyCollide(enemy, player);
};
setInterval(main, 50);
module.exports = {
  main: main,
  isEnemyCord: isEnemyCord,
  enemy: enemy
}