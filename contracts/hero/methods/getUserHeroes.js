export default async function getUserHeroes({ address }) {
  const heroes = await this.web3.methods.getUserHeroes(address).call();

  return heroes;
}
