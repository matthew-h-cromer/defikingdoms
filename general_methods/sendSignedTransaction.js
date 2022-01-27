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

  const result = {};

  try {
    const signed = await this.wallet.signTransaction(tx);
    result.receipt = await this.web3.eth.sendSignedTransaction(signed.rawTransaction);
  } catch (e) {
    result.error = e.reason ?? 'Unknown error';
    result.receipt = e.receipt;
  } finally {
    return result;
  }
}
