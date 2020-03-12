const term = require('terminal-kit').terminal
const gameOverScreen = require('./gameOverScreen.js');
const termMenu = require('terminal-menu');
const mainMenu = require('./menu.js');
const adventure = require('./adventure.js')

const gameOverMenu = () => {
  term.clear();
  gameOverScreen.gameOverScreen();

  const menu = termMenu({
    width: 12,
    x: 65,
    y: 18,
    fg: 'white',
    bg: 'red'
  });

  menu.write('GAME OVER');
  menu.add('New game');
  menu.add('Main menu');
  menu.add('Quit game');

  menu.on('select', function(label) {
    if (label === ('New game')) {
      term.reset();
      adventure.witcher();
    } else if (label === ('Main menu')) {
      mainMenu.mainMenu();
    } else if (label === ('Quit game')) {
      term.reset();
      process.exit();
    }
  });

  process.stdin.pipe(menu.createStream()).pipe(process.stdout);
  process.stdin.setRawMode(true);
  menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
  });
};

gameOverMenu();