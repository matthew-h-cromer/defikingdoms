export default async function tokenByIndex({ index }) {
  const token = await this.web3.methods.tokenByIndex(index).call();

  return token;
}
