import parseStatGenes from './parseStatGenes.js';
import parseVisualGenes from './parseVisualGenes.js';
import parseFirstName from './parseFirstName.js';
import parseLastName from './parseLastName.js';
import date from './dateFromUnixSeconds.js';

export default function (rawHero) {
  const statGenes = parseStatGenes(BigInt(rawHero[2][0]));
  const visualGenes = parseVisualGenes(BigInt(rawHero[2][1]));

  return {
    // summoning
    summonedTime: date(rawHero[1][0]),
    nextSummonTime: date(rawHero[1][1]),
    summonerId: rawHero[1][2],
    assistantId: rawHero[1][3],
    summons: rawHero[1][4],
    maxSummons: rawHero[1][5],
    summonsRemaining: +rawHero[1][5] - +rawHero[1][4],

    // stat genes
    statGenes: rawHero[2][0],
    ...statGenes,

    // visual genes
    visualGenes: rawHero[2][1],
    ...visualGenes,

    // info
    rarity: rawHero[2][2],
    shiny: rawHero[2][3],
    generation: rawHero[2][4],
    firstName: rawHero[2][5],
    firstNameString: parseFirstName({
      id: rawHero[2][5],
      gender: visualGenes.gender,
    }),
    lastName: rawHero[2][6],
    lastNameString: parseLastName(rawHero[2][6]),
    shinyStyle: rawHero[2][7],

    // state
    staminaFullAt: date(rawHero[3][0]),
    hpFullAt: date(rawHero[3][1]),
    mpFullAt: date(rawHero[3][2]),
    level: rawHero[3][3],
    xp: rawHero[3][4],
    currentQuest: rawHero[3][5],
    sp: rawHero[3][6],
    status: rawHero[3][7],

    // stats
    strength: rawHero[4][0],
    intelligence: rawHero[4][1],
    wisdom: rawHero[4][2],
    luck: rawHero[4][3],
    agility: rawHero[4][4],
    vitality: rawHero[4][5],
    endurance: rawHero[4][6],
    dexterity: rawHero[4][7],
    hp: rawHero[4][8],
    mp: rawHero[4][9],
    stamina: rawHero[4][10],

    // primary stat growth
    strengthGrowthP: rawHero[5][0],
    intelligenceGrowthP: rawHero[5][1],
    wisdomGrowthP: rawHero[5][2],
    luckGrowthP: rawHero[5][3],
    agilityGrowthP: rawHero[5][4],
    vitalityGrowthP: rawHero[5][5],
    enduranceGrowthP: rawHero[5][6],
    dexterityGrowthP: rawHero[5][7],
    hpSmGrowth: rawHero[5][8],
    hpRgGrowth: rawHero[5][9],
    hpLgGrowth: rawHero[5][10],
    mpSmGrowth: rawHero[5][11],
    mpRgGrowth: rawHero[5][12],
    mpLgGrowth: rawHero[5][13],

    // secondary stat growth
    strengthGrowthS: rawHero[6][0],
    intelligenceGrowthS: rawHero[6][1],
    wisdomGrowthS: rawHero[6][2],
    luckGrowthS: rawHero[6][3],
    agilityGrowthS: rawHero[6][4],
    vitalityGrowthS: rawHero[6][5],
    enduranceGrowthS: rawHero[6][6],
    dexterityGrowthS: rawHero[6][7],

    // professions
    mining: rawHero[7][0],
    gardening: rawHero[7][1],
    foraging: rawHero[7][2],
    fishing: rawHero[7][3],
  };
}
