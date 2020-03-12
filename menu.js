const term = require('terminal-kit').terminal
const menuScreen = require('./menuScreen.js');
const termMenu = require('terminal-menu');
const adventure = require('./adventure.js');
const readLine = require('readline-sync');

const menu = () => {
  term.clear();
  menuScreen.witcherScreen();
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
  menu.add('Quit game');

  menu.on('select', function(label) {
    if (label === ('New game')) {
      term.reset();
      adventure.witcher();
    } else if (label === ('Controls')) {
      menuScreen.controls();
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

menu();

module.exports = {
  menu: menu,
}