import parseHeroV3 from './parseHeroV3.js';

test('Can parse hero data', async () => {
  const testData = {
    id: '1000000306607',
    stats: {
      strength: '17',
      intelligence: '6',
      wisdom: '8',
      luck: '6',
      agility: '8',
      vitality: '15',
      endurance: '9',
      dexterity: '8',
      hp: '218',
      mp: '37',
      stamina: '26'
    },
    primaryStatGrowth: {
      strength: '8100',
      intelligence: '2000',
      wisdom: '2100',
      luck: '4000',
      agility: '5500',
      vitality: '6700',
      endurance: '6000',
      dexterity: '6000',
      hpSm: '1500',
      hpRg: '4500',
      hpLg: '4000',
      mpSm: '4500',
      mpRg: '4000',
      mpLg: '1500'
    },
    secondaryStatGrowth: {
      strength: '750',
      intelligence: '1750',
      wisdom: '2000',
      luck: '1000',
      agility: '1000',
      vitality: '1650',
      endurance: '1500',
      dexterity: '750',
      hpSm: '875',
      hpRg: '1000',
      hpLg: '625',
      mpSm: '375',
      mpRg: '875',
      mpLg: '1250'
    },
    professions: {
      mining: '0',
      gardening: '89',
      foraging: '0',
      fishing: '0',
      craft1: '0',
      craft2: '0'
    },
    equipment: {
      equippedSlots: '0',
      petId: '0',
      weapon1Id: '0',
      weapon1VisageId: '0',
      weapon2Id: '0',
      weapon2VisageId: '0',
      offhand1Id: '0',
      offhand1VisageId: '0',
      offhand2Id: '0',
      offhand2VisageId: '0',
      armorId: '0',
      armorVisageId: '0',
      accessoryId: '0',
      accessoryVisageId: '0'
    }
  };
});
