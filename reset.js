
const reset = (player, enemyGhost, enemy1, enemy2, enemy3, enemy4, enemy5, sleepingEnemy, key1, key2, gate1, gate2, gate3, torch, sword, inventory) => {
                  player.life = 5
                  enemyGhost.life = 3
                  enemy1.life = 2
                  enemy2.life = 2
                  enemy3.life = 2
                  enemy4.life = 2
                  enemy5.life = 3
                  sleepingEnemy.life = 3
                  key1.exists = true
                  key2.exists = true
                  exists = true
                  gate1.exists = true
                  gate2.exists = true
                  gate3.exists = true
                  torch.exists = true
                  sword.exists = true
                  inventory = [];
}

module.exports = {
  reset: reset
}