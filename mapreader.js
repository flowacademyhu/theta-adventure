const fs = require('fs');
const mapreader = (minimap) => {
  const board = [];
  const data = fs.readFileSync(minimap, 'utf8').split('\n');
  for (let i = 0; i < data.length - 1; i++) {
    board[i] = [];
    for (let j = 0; j < data[i].length; j++) {
      board[i].push(Number(data[i][j]));
    }
  }
  return board;
};
module.exports = {
  mapreader: mapreader
};