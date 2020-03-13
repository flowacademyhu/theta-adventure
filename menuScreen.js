const terminal = require('terminal-kit').terminal;

const witcherScreen = () => {
  terminal.white();
  console.log(`                                       ____            ____                        _  `);
  console.log('                                       \\   \\          /   /       __     _____    | |      _____  ___  ____');
  console.log('                                        \\   \\        /   / ___  _|  |_  /  __  \\  | | __  |  ___||   |/    \\');
  console.log('                                         \\   \\  /\\  /   / |   ||_    _||  /  \\__\\ | |/  \\ | |__  |    __   |')
  console.log('                                          \\   \\/  \\/   /  |   |  |  |  | |    ___ |   _  ||  __| |   /  \\__|')
  console.log('                                           \\          /   |   |  |  |_ |  \\__/  / |  / \\ || |___ |   |')
  console.log('                                            \\___/\\___/    |___|   \\___/ \\______/  |_|  |_||_____||___|')
  terminal.red();
  console.log('                                                           __    __       __________')
  console.log('                                                          |  |  |  |     |   _______|')
  console.log('                                                          |  |__|  |     |  |_______')
  console.log('                                                          |        |     |________  |')
  console.log('                                                           \\____   |  _   _______|  |')
  console.log('                                                                |__| |_| |__________|')
  console.log(' ')
}

const controls = () => {
  terminal.white();
  console.log('                                                                         Up: W');
  console.log(' ')
  console.log('                                                                       Down: S');
  console.log(' ')
  console.log('                                                                      Right: A');
  console.log(' ')
  console.log('                                                                       Left: D');
  console.log(' ')
  console.log('                                                          Pick up/Use items: E');
  console.log(' ')
  console.log('                                                                Swing sword: O');
  console.log(' ')
  console.log('                                                                  Quit game: Q');
  console.log(' ')
}

module.exports = {
  witcherScreen: witcherScreen,
  controls: controls
}