import DFK from '../../DFK';

describe('Crystalvale', () => {
  test('getHero 1000000306607', async () => {
    const dfk = new DFK();

    const hero = await dfk.getHero('1000000306607');

    // check immutable hero attrs
    expect(hero).toMatchObject({
      tokenId: '1000000306607',

      // summoning
      summonedTime: new Date('2023-08-01T12:38:04.000Z'),
      nextSummonTime: new Date('2024-01-13T03:49:58.000Z'),
      summonerId: '1000000000005',
      assistantId: '1000000000305',
      summons: 10,
      maxSummons: 10,
      summonsRemaining: 0,

      // stat genes
      statGenes:
        '457632095761153520094615745557172715113003103541268931405377006806907010',
      mainClass: '8',
      subClass: '4',
      profession: '2',
      passive1: '3',
      passive2: '2',
      active1: '6',
      active2: '1',
      statBoost1: '10',
      statBoost2: '10',
      statsUnknown1: '2',
      element: '0',
      statsUnknown2: '2',
      r1_mainClass: '7',
      r1_subClass: '11',
      r1_profession: '6',
      r1_passive1: '4',
      r1_passive2: '4',
      r1_active1: '6',
      r1_active2: '6',
      r1_statBoost1: '6',
      r1_statBoost2: '10',
      r1_statsUnknown1: '2',
      r1_element: '8',
      r1_statsUnknown2: '4',
      r2_mainClass: '9',
      r2_subClass: '4',
      r2_profession: '2',
      r2_passive1: '1',
      r2_passive2: '7',
      r2_active1: '4',
      r2_active2: '2',
      r2_statBoost1: '6',
      r2_statBoost2: '4',
      r2_statsUnknown1: '6',
      r2_element: '14',
      r2_statsUnknown2: '14',
      r3_mainClass: '8',
      r3_subClass: '9',
      r3_profession: '4',
      r3_passive1: '5',
      r3_passive2: '4',
      r3_active1: '7',
      r3_active2: '5',
      r3_statBoost1: '14',
      r3_statBoost2: '12',
      r3_statsUnknown1: '0',
      r3_element: '8',
      r3_statsUnknown2: '4',

      // visual genes
      visualGenes:
        '167422970822221401153782005898508099365989325697560758515534102131642565',
      gender: '1',
      headAppendage: '1',
      backAppendage: '7',
      background: '14',
      hairStyle: '8',
      hairColor: '5',
      visualUnknown1: '1',
      eyeColor: '0',
      skinColor: '4',
      appendageColor: '5',
      backAppendageColor: '4',
      visualUnknown2: '5',
      r1_gender: '1',
      r1_headAppendage: '11',
      r1_backAppendage: '6',
      r1_background: '2',
      r1_hairStyle: '2',
      r1_hairColor: '6',
      r1_visualUnknown1: '4',
      r1_eyeColor: '14',
      r1_skinColor: '14',
      r1_appendageColor: '3',
      r1_backAppendageColor: '10',
      r1_visualUnknown2: '6',
      r2_gender: '1',
      r2_headAppendage: '10',
      r2_backAppendage: '2',
      r2_background: '14',
      r2_hairStyle: '7',
      r2_hairColor: '10',
      r2_visualUnknown1: '6',
      r2_eyeColor: '0',
      r2_skinColor: '8',
      r2_appendageColor: '9',
      r2_backAppendageColor: '10',
      r2_visualUnknown2: '4',
      r3_gender: '3',
      r3_headAppendage: '0',
      r3_backAppendage: '5',
      r3_background: '14',
      r3_hairStyle: '0',
      r3_hairColor: '10',
      r3_visualUnknown1: '2',
      r3_eyeColor: '14',
      r3_skinColor: '8',
      r3_appendageColor: '9',
      r3_backAppendageColor: '1',
      r3_visualUnknown2: '0',

      // info
      rarity: 0,
      shiny: true,
      generation: 1,
      firstName: '1729',
      firstNameString: 'Moldan',
      lastName: '767',
      lastNameString: 'Farrowarm',
      shinyStyle: '11',

      // state
      staminaFullAt: new Date('2024-01-13T13:42:04.000Z'),
      hpFullAt: null,
      mpFullAt: null,
      level: 3,
      xp: 4000,
      currentQuest: '0x0000000000000000000000000000000000000000',
      sp: 3,
      status: '0',

      // stats
      strength: 17,
      intelligence: 6,
      wisdom: 8,
      luck: 6,
      agility: 8,
      vitality: 15,
      endurance: 9,
      dexterity: 8,
      hp: 218,
      mp: 37,
      stamina: 26,

      // primary stat growth
      strengthGrowthP: 8100,
      intelligenceGrowthP: 2000,
      wisdomGrowthP: 2100,
      luckGrowthP: 4000,
      agilityGrowthP: 5500,
      vitalityGrowthP: 6700,
      enduranceGrowthP: 6000,
      dexterityGrowthP: 6000,
      hpSmGrowth: 1500,
      hpRgGrowth: 4500,
      hpLgGrowth: 4000,
      mpSmGrowth: 4500,
      mpRgGrowth: 4000,
      mpLgGrowth: 1500,

      // secondary stat growth
      strengthGrowthS: 750,
      intelligenceGrowthS: 1750,
      wisdomGrowthS: 2000,
      luckGrowthS: 1000,
      agilityGrowthS: 1000,
      vitalityGrowthS: 1650,
      enduranceGrowthS: 1500,
      dexterityGrowthS: 750,

      // professions
      mining: 0,
      gardening: 87,
      foraging: 0,
      fishing: 0,

      // special flags
      pjStatus: null
    });
  });

  test('pj statuses', async () => {
    const dfk = new DFK();

    let hero;

    hero = await dfk.getHero('102627');
    expect(hero.pjStatus).toBe(null);

    hero = await dfk.getHero('44292');
    expect(hero.pjStatus).toBe('survived');

    hero = await dfk.getHero('44299');
    expect(hero.pjStatus).toBe('died');

    hero = await dfk.getHero('51956');
    expect(hero.pjStatus).toBe('onJourney');
  });
});
