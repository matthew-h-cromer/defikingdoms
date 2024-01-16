import DFK from '../../DFK';

describe('Crystalvale', () => {
  test('getHero 1000000306607', async () => {
    const dfk = new DFK();

    const hero = await dfk.getHeroV3('1000000306607');

    console.log(hero);
  });
});
