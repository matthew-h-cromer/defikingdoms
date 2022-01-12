import parseStatGenes from '../../../utils/parsing/parseStatGenes.js';
import parseVisualGenes from '../../../utils/parsing/parseVisualGenes.js';
import parseRarity from '../../../utils/parsing/parseRarity.js';
import parseFirstName from '../../../utils/parsing/parseFirstName.js';
import parseLastName from '../../../utils/parsing/parseLastName.js';
import parseClass from '../../../utils/parsing/parseClass.js';

export default async function getHero({ tokenId }) {
  if (!tokenId) throw 'tokenId must be provided';
  if (typeof tokenId !== 'string') throw 'tokenId must be string';

  const rawHero = await this.web3.methods.getHero(tokenId).call();

  if (!rawHero) return {};

  return {
    summoningInfo: {
      summonedTime: rawHero[1][0],
      nextSummonTime: rawHero[1][1],
      summonerId: rawHero[1][2],
      assistantId: rawHero[1][3],
      summons: rawHero[1][4],
      maxSummons: rawHero[1][5],
    },
    info: {
      statGenes: parseStatGenes(BigInt(rawHero[2][0])),
      visualGenes: parseVisualGenes(BigInt(rawHero[2][1])),
      rarity: parseRarity(rawHero[2][2]),
      shiny: rawHero[2][3],
      generation: rawHero[2][4],
      firstName: parseFirstName({
        id: rawHero[2][5],
        gender: parseVisualGenes(BigInt(rawHero[2][1])).gender,
      }),
      lastName: parseLastName(rawHero[2][6]),
      shinyStyle: rawHero[2][7],
      class: parseClass(rawHero[2][8]),
      subClass: parseClass(rawHero[2][9]),
    },
    state: {
      staminaFullAt: rawHero[3][0],
      hpFullAt: rawHero[3][1],
      mpFullAt: rawHero[3][2],
      level: rawHero[3][3],
      xp: rawHero[3][4],
      currentQuest: rawHero[3][5],
      sp: rawHero[3][6],
      status: rawHero[3][7],
    },
    stats: {
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
    },
    primaryStatGrowth: {
      strength: rawHero[5][0],
      intelligence: rawHero[5][1],
      wisdom: rawHero[5][2],
      luck: rawHero[5][3],
      agility: rawHero[5][4],
      vitality: rawHero[5][5],
      endurance: rawHero[5][6],
      dexterity: rawHero[5][7],
      hpSm: rawHero[5][8],
      hpRg: rawHero[5][9],
      hpLg: rawHero[5][10],
      mpSm: rawHero[5][11],
      mpRg: rawHero[5][12],
      mpLg: rawHero[5][13],
    },
    secondaryStatGrowth: {
      strength: rawHero[6][0],
      intelligence: rawHero[6][1],
      wisdom: rawHero[6][2],
      luck: rawHero[6][3],
      agility: rawHero[6][4],
      vitality: rawHero[6][5],
      endurance: rawHero[6][6],
      dexterity: rawHero[6][7],
      hpSm: rawHero[6][8],
      hpRg: rawHero[6][9],
      hpLg: rawHero[6][10],
      mpSm: rawHero[6][11],
      mpRg: rawHero[6][12],
      mpLg: rawHero[6][13],
    },
    professions: {
      mining: rawHero[7][0],
      gardening: rawHero[7][1],
      foraging: rawHero[7][2],
      fishing: rawHero[7][3],
    },
  };
}
