/**
 * Get details of an auction in the tavern
 */
export default async function (tokenIds) {
  try {
    return await this.salesAuctionContract.methods.auctions(...tokenIds).call();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
