const Block = require('./block.js');

const block = new Block('1234', '4568EAEA', 'HB20', '100');

console.log(block.toString());
console.log(Block.genesis().toString());
const firstBlock = Block.mineBlock(Block.genesis(), '$500');

console.log(firstBlock.toString());
