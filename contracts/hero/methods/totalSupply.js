export default async function totalSupply() {
  const totalSupply = await this.web3.methods.totalSupply().call();

  return totalSupply;
}
