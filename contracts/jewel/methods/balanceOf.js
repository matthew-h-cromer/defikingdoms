export default async function balanceOf(address) {
  return await this.web3.methods.balanceOf(address).call();
}
