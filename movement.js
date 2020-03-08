const map = require('./maps.js');
const player = {
  coords: coords = {
    x: [24, 25, 24, 25],
    y: [14, 14, 15, 15]
  }
};
const moveDown = (player, map) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (map[player.coords.x[i] + 1][player.coords.y[i] !== 1]) {
      player.coords.x[i]--;
    }else {
      player.coords.x[i]++;
    }

}
const moveUp = (player, map) => {
  for (let i = 0; i < player.coords.x.length; i++) {
    if (map[player.coords.x[i] -1][ player.coords.y[i] !== 1]) {
      player.coords.x[i]++;
    }else {
      player.coords.x[i]--;
    }

}
const moveLeft = (player, map) => {
  for (let i = 0; i < player.coords.y.length; i++) {
    if (map[player.coords.y[i]][player.coords.y[i] - 1 !== 1]) {
      player.coords.y[i]--;
    }else {
      player.coords.y[i]++;
    } 
}
const moveRight = (player,map) => {
  for (let i = 0; i < player.coords.y.length; i++) {
    if (player.coords.y[i] && player.coords.y[i + 1] === 0) {
      player.coords.y[i]++;
    }else {
      player.coords.y[i]--;
    } 
};

module.exports = {
  moveUp: moveUp,
  moveDown: moveDown,
  moveLeft: moveLeft,
  moveRight: moveRight
};