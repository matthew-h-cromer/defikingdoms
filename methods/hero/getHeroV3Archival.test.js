import DFK from '../../DFK';

describe('Crystalvale', () => {
  test('getHero 1000000000001', async () => {
    const dfk = new DFK();

    try {
      const hero = await dfk.getHeroV3('1000000000001', {
        blockNumber: (await dfk.web3.eth.getBlockNumber()) - 1000
      });
      console.log(hero);
    } catch (e) {
      console.log(e);
    }
  }, 10000);
});
