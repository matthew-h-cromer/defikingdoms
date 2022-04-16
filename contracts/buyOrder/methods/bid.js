export default async function bid({ buyOrderAddress, tokenId, amount, gas, gasPrice, nonce }) {
  if (!buyOrderAddress) throw 'buyOrderAddress must be provided';
  if (typeof buyOrderAddress !== 'string') throw 'buyOrderAddress must be string';
  if (!tokenId) throw 'tokenId must be provided';
  if (typeof tokenId !== 'string') throw 'tokenId must be string';
  if (!amount) throw 'amount must be provided';
  if (typeof amount !== 'string') throw 'amount must be string';

  try {
    this.web3.options.address = buyOrderAddress;

    const result = await this.dfk.sendSignedTransaction({
      transaction: this.web3.methods.bid(tokenId, amount),
      wallet: this.dfk.wallet,
      gas,
      gasPrice,
      nonce,
    });

    return result;
  } catch (e) {
    return { error: e.toString() };
  }
}
