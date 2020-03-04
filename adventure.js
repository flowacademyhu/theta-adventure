const map = require('./maps.js');
const draw = require('./draw.js');
const movement = require('./movement.js')

setInterval(draw.draw, 50, map.castle, movement.player);