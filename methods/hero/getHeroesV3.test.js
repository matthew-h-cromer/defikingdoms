import DFK from '../../DFK';

describe('Crystalvale', () => {
  test('getHeroes 1000000306607, ...8, ...9', async () => {
    const dfk = new DFK();

    const heroes = await dfk.getHeroesV3([
      '1000000306607',
      '1000000306608',
      '1000000306609'
    ]);

    console.log(heroes);
  });
});
