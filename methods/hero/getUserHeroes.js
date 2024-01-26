export default async function (address) {
  return this.heroContract.methods.getUserHeroes(address).call();
}
