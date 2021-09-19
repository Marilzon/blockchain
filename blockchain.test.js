const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc;
  let bc2;

  beforeEach(() => {
    bc = new Blockchain;
    bc2 = new Blockchain;
  });

  it('start with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('add a new block', () => {
    const data = 'file.pdf';
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  it('validates a valid chain', () => {
    bc2.addBlock('500 USD');
    expect(bc.isValidChain(bc2.chain)).toBe(true);
  });

  it('check a currupt chain in first block', () => {
    bc2.chain[0].data = '0 USD';
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  it('check a currupt chain', () => {
    bc2.addBlock('200 USD');
    bc2.chain[1].data = '0 USD';
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });
});
