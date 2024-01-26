import DFK from '../../DFK';

describe('Crystalvale', () => {
  test('getUserHeroes', async () => {
    const dfk = new DFK();

    const heroes = await dfk.getUserHeroes(
      '0x983Fb2169E3b9ECe1A5bE123279246a424154D31'
    );

    console.log(heroes);
  });
});
