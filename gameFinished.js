const minimap = require('./minimap.js');
const term = require('terminal-kit').terminal

const theEnd = () => {
  term.red()
  console.log('                                      |\'\'||\'\'| \'||               \'||\'\'\'\'|              ||` ');
  console.log('                                         ||     ||                ||   .               ||  ');
  console.log('                                         ||     ||\'\'|, .|\'\'|,     ||\'\'\'|  `||\'\'|,  .|\'\'||  ');
  console.log('                                         ||     ||  || ||..||     ||       ||  ||  ||  ||  ');
  console.log('                                        .||.   .||  || `|...     .||....| .||  ||. `|..||. ')
}

const finishGame = (player, x, y) => {
  if(x === minimap.currentBoardCoords.x && y === minimap.currentBoardCoords.y && player.coords.x[0] === 15 && player.coords.y[0] === 14) {
    console.clear();
    return true;
  }
};

module.exports = {
  finishGame: finishGame,
  theEnd: theEnd
}