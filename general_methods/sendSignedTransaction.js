export default async function ({ transaction }) {
  const signed = await this.wallet.signTransaction({
    to: transaction._parent._address,
    data: transaction.encodeABI(),
    gas: (await transaction.estimateGas({ from: this.wallet.address })) * 3,
  });

  const receipt = await this.web3.eth.sendSignedTransaction(signed.rawTransaction);

  return receipt;
}
