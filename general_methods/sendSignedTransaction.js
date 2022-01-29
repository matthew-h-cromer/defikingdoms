export default async function ({ transaction, gas, gasPrice, nonce }) {
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

  if (nonce) tx.nonce = nonce;

  let result = { inputTx: tx };

  try {
    const signed = await this.wallet.signTransaction(tx);
    result.receipt = await this.web3.eth.sendSignedTransaction(signed.rawTransaction);
    // result.gasSpent = BigInt(receipt.gas) * BigInt(receipt.gasPrice);
  } catch (e) {
    result.error = e.reason ?? e.message ?? 'unknown error';
    result.receipt = e.receipt;
  } finally {
    return result;
  }
}
