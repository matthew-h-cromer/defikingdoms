export default async function bid({ tokenId, amount, gas, gasPrice, nonce }) {
  if (!tokenId) throw 'tokenId must be provided';
  if (typeof tokenId !== 'string') throw 'tokenId must be string';
  if (!amount) throw 'amount must be provided';
  if (typeof amount !== 'string') throw 'amount must be string';

  return await this.dfk.sendSignedTransaction({
    transaction: this.web3.methods.bid(tokenId, amount),
    wallet: this.dfk.wallet,
    gas,
    gasPrice,
    nonce,
  });
}
