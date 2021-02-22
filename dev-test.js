const Block = require('./block');

const block = new Block(new Date(), 'hash', 'hash2', 'data');

console.log(block.toString());