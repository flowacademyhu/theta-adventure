const term = require('terminal-kit').terminal;
const menuScreen = require('./menuScreen.js');
const termMenu = require('terminal-menu');
// const readLine = require('readline-sync');
const adventure = require('./adventure.js');

const mainMenu = () => {
  term.clear();
  menuScreen.witcher();

  const menu = termMenu({
    width: 12,
    x: 65,
    y: 18,
    fg: 'white',
    bg: 'red'
  });

  menu.write('MAIN MENU');
  menu.add('New game');
  menu.add('Controls')
  menu.add('Exit');

  menu.on('select', function(label) {
    if (label === ('New game')) {
      term.reset();
      adventure.witcher();
    } else if (label === ('Controls')) {
      menuScreen.controls();
    } else if (label === ('Exit')) {
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

mainMenu();