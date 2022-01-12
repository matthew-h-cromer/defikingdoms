export default async function approve({ address, amount }) {
  if (address === undefined) throw 'must provide address for approval';
  if (typeof address !== 'string') throw 'address must be string';
  if (amount === undefined) throw 'must provide amount for approval';
  if (typeof amount !== 'string') throw 'amount must be string';

  const receipt = await this.dfk.sendSignedTransaction({
    transaction: this.web3.methods.approve(address, amount),
  });

  return receipt;
}
