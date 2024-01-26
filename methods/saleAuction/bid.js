/**
 * Bid on a hero listed for sale in the tavern
 */
export default async function (tokenId, bidAmount) {
  try {
    return await this.salesAuctionContract.methods
      .bid(tokenId, bidAmount)
      .send({ from: this.walletAddress, gasLimit: 1000000 });
  } catch (err) {
    console.log(err);
    throw err;
  }
}
