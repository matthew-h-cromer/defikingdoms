export default async function getHeroSubmission({ tokenId }) {
  const result = await this.web3.methods.getHeroSubmission(tokenId).call();
  return result;
}
