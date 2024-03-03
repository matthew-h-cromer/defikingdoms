/**
 * Get details of an auction in the tavern
 */
export default async function (tokenId) {
  try {
    return await this.salesAuctionContract.methods.getAuction(tokenId).call();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
