export default async function ({ transaction, gas, gasPrice, nonce }) {
  let tx = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
  };

  if (gas !== undefined) {
    tx.gas = gas;
  } else {
    tx.gas = await transaction.estimateGas({ from: this.wallet.address });
  }

  if (gasPrice !== undefined) tx.gasPrice = gasPrice;

  if (nonce !== undefined) tx.nonce = nonce;

  let result = { txInput: tx };

  try {
    const signed = await this.wallet.signTransaction(tx);
    result.tx = await this.web3.eth.sendSignedTransaction(signed.rawTransaction);
    // result.gasSpent = BigInt(receipt.gas) * BigInt(receipt.gasPrice);
  } catch (e) {
    result.error = e.reason ?? e.message ?? 'unknown error';
    result.tx = e.receipt;
    result.signature = signature;
  } finally {
    return result;
  }
}
