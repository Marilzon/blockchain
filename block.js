class Block {

  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `
          Block:
           - timestamp = ${this.timestamp}
           - lastHash = ${this.lastHash.substring(0, 10)}
           - hash = ${this.hash.substring(0, 10)}
           - data = ${this.data}
        `;
  }

  static genesis() {
    return new this('Genesis time', '----------', 'HB20', []);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.Now();
    const lastHash = lastBlock.hash;
    const hash = 'hash-pending';

    return new this(timestam, lastHash, data);
  }
}

module.exports = Block;
