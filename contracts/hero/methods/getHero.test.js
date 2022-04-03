import DFK from '../../../DFK.js';

test('getHero 102627', async () => {
  const dfk = new DFK();

  const hero = await dfk.hero.getHero({ tokenId: '102627' });

  // info
  expect(hero.id).toBe('102627');
  expect(hero.numberid).toBe('102627');
  expect(hero.pjstatus).toBe(null);

  // genes
  expect(hero.statgenes).toBe(
    '224632332718891859820200784494365009268196137423793891553167309011290176'
  );
  expect(hero.visualgenes).toBe(
    '57106485620589442369929565513712625799171819247885041932115938989284419'
  );

  // statGenes
  expect(hero.mainclass).toBe('1');
  expect(hero.subclass).toBe('1');
  expect(hero.profession).toBe('fishing');
  expect(hero.passive1).toBe('6');
  expect(hero.passive2).toBe('4');
  expect(hero.active1).toBe('4');
  expect(hero.active2).toBe('7');
  expect(hero.statboost1).toBe('AGI');
  expect(hero.statboost2).toBe('AGI');
  expect(hero.statsunknown1).toBe('3');
  expect(hero.statsunknown2).toBe('0');

  // r1_statGenes
  expect(hero.r1_mainclass).toBe('6');
  expect(hero.r1_subclass).toBe('4');
  expect(hero.r1_profession).toBe('fishing');
  expect(hero.r1_passive1).toBe('6');
  expect(hero.r1_passive2).toBe('2');
  expect(hero.r1_active1).toBe('6');
  expect(hero.r1_active2).toBe('5');
  expect(hero.r1_statboost1).toBe('DEX');
  expect(hero.r1_statboost2).toBe('LCK');
  expect(hero.r1_statsunknown1).toBe('0');
  expect(hero.r1_statsunknown2).toBe('2');

  // r2_statGenes
  expect(hero.r2_mainclass).toBe('2');
  expect(hero.r2_subclass).toBe('2');
  expect(hero.r2_profession).toBe('mining');
  expect(hero.r2_passive1).toBe('1');
  expect(hero.r2_passive2).toBe('1');
  expect(hero.r2_active1).toBe('2');
  expect(hero.r2_active2).toBe('7');
  expect(hero.r2_statboost1).toBe('LCK');
  expect(hero.r2_statboost2).toBe('END');
  expect(hero.r2_statsunknown1).toBe('3');
  expect(hero.r2_statsunknown2).toBe('2');

  // r3_statGenes
  expect(hero.r3_mainclass).toBe('4');
  expect(hero.r3_subclass).toBe('7');
  expect(hero.r3_profession).toBe('fishing');
  expect(hero.r3_passive1).toBe('6');
  expect(hero.r3_passive2).toBe('3');
  expect(hero.r3_active1).toBe('4');
  expect(hero.r3_active2).toBe('2');
  expect(hero.r3_statboost1).toBe('VIT');
  expect(hero.r3_statboost2).toBe('WIS');
  expect(hero.r3_statsunknown1).toBe('4');
  expect(hero.r3_statsunknown2).toBe('12');
});

test('getHero pj survivor', async () => {
  const dfk = new DFK();

  const hero = await dfk.hero.getHero({ tokenId: '44292' });

  expect(hero.pjstatus).toBe('SURVIVED');
});
