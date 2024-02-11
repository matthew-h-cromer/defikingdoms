import _ from 'lodash';

export default function (rawHero) {
  // get only the named values from the raw hero data
  let baseHero = { tokenId: rawHero[0], ...getNamedValues(rawHero) };
  delete baseHero.id;

  // convert paths to int
  const paths = [
    'summoningInfo.summonedTime',
    'summoningInfo.nextSummonTime',
    'summoningInfo.summons',
    'summoningInfo.maxSummons',
    'info.rarity',
    'info.generation',
    'state.staminaFullAt',
    'state.hpFullAt',
    'state.mpFullAt',
    'state.level',
    'state.xp',
    'state.sp',
    'stats.strength',
    'stats.intelligence',
    'stats.wisdom',
    'stats.luck',
    'stats.agility',
    'stats.vitality',
    'stats.endurance',
    'stats.dexterity',
    'stats.hp',
    'stats.mp',
    'stats.stamina',
    'primaryStatGrowth.strength',
    'primaryStatGrowth.intelligence',
    'primaryStatGrowth.wisdom',
    'primaryStatGrowth.luck',
    'primaryStatGrowth.agility',
    'primaryStatGrowth.vitality',
    'primaryStatGrowth.endurance',
    'primaryStatGrowth.dexterity',
    'primaryStatGrowth.hpSm',
    'primaryStatGrowth.hpRg',
    'primaryStatGrowth.hpLg',
    'primaryStatGrowth.mpSm',
    'primaryStatGrowth.mpRg',
    'primaryStatGrowth.mpLg',
    'secondaryStatGrowth.strength',
    'secondaryStatGrowth.intelligence',
    'secondaryStatGrowth.wisdom',
    'secondaryStatGrowth.luck',
    'secondaryStatGrowth.agility',
    'secondaryStatGrowth.vitality',
    'secondaryStatGrowth.endurance',
    'secondaryStatGrowth.dexterity',
    'secondaryStatGrowth.hpSm',
    'secondaryStatGrowth.hpRg',
    'secondaryStatGrowth.hpLg',
    'secondaryStatGrowth.mpSm',
    'secondaryStatGrowth.mpRg',
    'secondaryStatGrowth.mpLg',
    'professions.mining',
    'professions.gardening',
    'professions.foraging',
    'professions.fishing',
    'professions.craft1',
    'professions.craft2'
  ];
  baseHero = convertPathsToInt(baseHero, paths);

  return baseHero;
}

function getNamedValues(obj) {
  const newObj = {};

  // Loop all named keys
  const namedKeys = Object.keys(obj).filter(key => isNaN(key));
  for (const key of namedKeys) {
    if (Array.isArray(obj[key])) {
      // Recurse arrays
      newObj[key] = getNamedValues(obj[key]);
    } else {
      // Assign the named values
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function convertPathsToInt(obj, paths) {
  for (let path of paths) {
    let value = _.get(obj, path);
    if (typeof value === 'string' && !isNaN(value)) {
      _.set(obj, path, parseInt(value, 10));
    } else if (typeof value === 'object' && value !== null) {
      for (let key in value) {
        if (typeof value[key] === 'string' && !isNaN(value[key])) {
          value[key] = parseInt(value[key], 10);
        }
      }
    }
  }
  return obj;
}
