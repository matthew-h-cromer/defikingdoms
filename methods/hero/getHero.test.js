import DFK from '../../DFK';

test('getHero', async () => {
  const dfk = new DFK();

  const hero = await dfk.getHero('1234');
  console.log(hero);
  expect(hero).not.toBeNull();
});
