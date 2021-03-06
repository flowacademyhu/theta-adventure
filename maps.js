const mapgen = (column, row) => {
  const array = new Array(column);
  for (let i = 0; i < column; i++) {
    array[i] = new Array(row);
  }
  return array;
};
const fill = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = 0;
    }
  }
  return array;
};
const openFourSide = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let i = 0; i < 11; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let i = 19; i < 30; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 11; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let j = 19; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let i = 0; i < 11; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let i = 19; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let j = 0; j < 11; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  for (let j = 19; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  return board;
};
const castle = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const openSides = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let i = 0; i < 11; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let i = 19; i < 30; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let i = 0; i < 11; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let i = 19; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  return board;
};
const openUpSides = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let j = 0; j < 11; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let j = 19; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  return board;
};
const openBottom = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let i = 0; i < 30; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 11; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  for (let i = 0; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let j = 19; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  return board;
};
const openRight = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let i = 0; i < 30; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  for (let i = 0; i < 11; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let i = 19; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  return board;
};
const openUp = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let i = 0; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let i = 0; i < 30; i++) {
    const j = 0; 
    board[i][j] = 1;
  }
  for (let j = 0; j < 11; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let j = 19; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let i = 0; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  return board;
};
const openLeft = () => {
  const board = mapgen(30, 30);
  fill(board);
  for (let j = 0; j < 30; j++) {
    const i = 29;
    board[i][j] = 1;
  }
  for (let i = 0; i < 30; i++) {
    const j = 29;
    board[i][j] = 1;
  }
  for (let j = 0; j < 30; j++) {
    const i = 0;
    board[i][j] = 1;
  }
  for (let i = 0; i < 11; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  for (let i = 19; i < 30; i++) {
    const j = 0;
    board[i][j] = 1;
  }
  return board;
};

module.exports = {
  castle: castle
}