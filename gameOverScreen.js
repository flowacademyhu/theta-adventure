const terminal = require('terminal-kit').terminal;

const gameOverScreen = () => {
  terminal.red();
  console.log('                                                _____                         ____                 ');
  console.log('                                               / ____|                       / __ \\                ');
  console.log('                                              | |  __  __ _ _ __ ___   ___  | |  | |_   _____ _ __ ');
  console.log('                                              | | |_ |/ _` | \'_ ` _ \\ / _ \\ | |  | \\ \\ / / _ \ \'__|');
  console.log('                                              | |__| | (_| | | | | | |  __/ | |__| |\\ V /  __/ |   ');
  console.log('                                               \\_____|\\__,_|_| |_| |_|\\___|  \\____/  \\_/ \\___|_|   ');
}

module.exports = {
  gameOverScreen: gameOverScreen
}