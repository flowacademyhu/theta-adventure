
const player = { x: [1, 1, 2, 2], y: [3, 4, 3, 4] };

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'w') {
    for (let i = 0; i < player.y.length; i++) {
      player.y[i]--;
    }
  }
  if (key === 's') {
    for (let i = 0; i < player.y.length; i++) {
      player.y[i]++;
    }
  }
  if (key === 'a') {
    for (let i = 0; i < player.x.length; i++) {
      player.x[i]--;
    }
  }
  if (key === 'd') {
    for (let i = 0; i < player.x.length; i++) {
      player.x[i]++;
    }
  }
  if (key === 'q') {
    process.exit(0); 
  }
  console.log(player);
});
