const gameOverScreen = require('./gameOverScreen.js');
const term = require('terminal-kit').terminal
const termMenu = require('terminal-menu')
const readLine = require('readline-sync')
const draw = require('./draw.js')

const gameOver = (witcher) => {
    term.reset();
    gameOverScreen.gameOverScreen();
    const key = readLine.keyIn('\n');
    if (key === 'q') {
      term.reset();
      process.exit();
    }
    if (key === 'r') {
      witcher
    }
  }


// gameOver()

