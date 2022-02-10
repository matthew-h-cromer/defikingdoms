export default async function multiBid({ tokenId, amount, gasPriceMultipliers = [1] }) {
  const minGasPrice = 30000000000;

  let nonce = this.dfk.latestNonce;

  if (nonce == null) return { bids: [], status: 'failed', error: 'no nonce available' };

  const promises = gasPriceMultipliers.map(multiplier => {
    const promise = new Promise(async (resolve, reject) => {
      const gasPrice = `${Math.round(minGasPrice * multiplier)}`;

      resolve(
        await this.dfk.salesAuction.bid({
          tokenId,
          amount,
          gas: '5000000',
          gasPrice,
          nonce,
        })
      );
    });

    nonce++;

    return promise;
  });

  this.dfk.latestNonce = nonce;

  const bids = await Promise.all(promises);

  const hasSuccess = bids.filter(result => !result.error).length > 0;

  return { bids, status: hasSuccess ? 'success' : 'failed' };
}
