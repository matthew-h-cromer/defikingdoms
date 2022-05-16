import DFK from './DFK.js';
// parsing
import parseHero from './utils/parseHero/parseHero.js';
// constants
import abilities from './constants/abilities.js';
import appendageColors from './constants/appendageColors.js';
import backgrounds from './constants/backgrounds.js';
import classes from './constants/classes.js';
import classRanks from './constants/classRanks.js';
import elements from './constants/elements.js';
import eyeColors from './constants/eyeColors.js';
import maleFirstNames from './constants/maleFirstNames.js';
import femaleFirstNames from './constants/femaleFirstNames.js';
import hairColors from './constants/hairColors.js';
import lastNames from './constants/lastNames.js';
import pjStatuses from './constants/pjStatuses.js';
import professions from './constants/professions.js';
import rarities from './constants/rarities.js';
import skinColors from './constants/skinColors.js';
import stats from './constants/stats.js';
import contractAddresses from './constants/contractAddresses.js';
// abi
import abi from './abi/index.js';

const parser = {
  hero: parseHero,
  abilities: id => abilities[id] ?? id,
  appendageColors: id => appendageColors[id] ?? id,
  backgrounds: id => backgrounds[id] ?? id,
  classes: id => classes[id] ?? id,
  classRanks: id => classRanks[id] ?? id,
  contractAddresses: id => contractAddresses[id] ?? id,
  elements: id => elements[id] ?? id,
  eyeColors: id => eyeColors[id] ?? id,
  femaleFirstNames: id => femaleFirstNames[id] ?? id,
  hairColors: id => hairColors[id] ?? id,
  lastNames: id => lastNames[id] ?? id,
  maleFirstNames: id => maleFirstNames[id] ?? id,
  professions: id => professions[id] ?? id,
  rarities: id => rarities[id] ?? id,
  skinColors: id => skinColors[id] ?? id,
  stats: id => stats[id] ?? id,
};

export {
  DFK,
  abilities,
  appendageColors,
  backgrounds,
  classes,
  classRanks,
  elements,
  eyeColors,
  maleFirstNames,
  femaleFirstNames,
  hairColors,
  lastNames,
  pjStatuses,
  professions,
  rarities,
  skinColors,
  stats,
  contractAddresses,
  abi,
  parser,
};
