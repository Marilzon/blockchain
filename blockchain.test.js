const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc;
  let bc2;

  beforeEach(() => {
    bc = new Blockchain;
    bc2 = new Blockchain;
  });

  it('Starts  with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('Adds a new block', () => {
    const data = 'file.pdf';
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  it('Validates a valid chain', () => {
    bc2.addBlock('500 USD');

    expect(bc.isValidChain(bc2.chain)).toBe(true);
  });
});
