export default async function ({ transaction, gas, gasPrice }) {
  let tx = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
  };

  if (gas) {
    tx.gas = gas;
  } else {
    tx.gas = (await transaction.estimateGas({ from: this.wallet.address })) * 3;
  }

  if (gasPrice) tx.gasPrice = gasPrice;

  const signed = await this.wallet.signTransaction(tx);

  const receipt = await this.web3.eth.sendSignedTransaction(signed.rawTransaction);

  return receipt;
}
