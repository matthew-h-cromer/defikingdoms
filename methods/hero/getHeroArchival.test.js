import DFK from '../../DFK';

test('getHero (archival) 4724', async () => {
  const dfk = new DFK();

  const hero = await dfk.getHero('4724', { blockNumber: 18637062 });

  // check immutable hero attrs
  expect(hero).toMatchObject({});
});

test('getHero (archival) 5917', async () => {
  const dfk = new DFK();

  const hero = await dfk.getHero('5917', { blockNumber: 18637062 });

  // check immutable hero attrs
  expect(hero).toMatchObject({});
});
