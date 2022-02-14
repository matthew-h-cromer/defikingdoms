import parseStatGenes from '../../../utils/parsing/parseStatGenes.js';
import parseVisualGenes from '../../../utils/parsing/parseVisualGenes.js';
import parseFirstName from '../../../utils/parsing/parseFirstName.js';
import parseLastName from '../../../utils/parsing/parseLastName.js';

export default async function getHero({ tokenId }) {
  if (!tokenId) throw 'tokenId must be provided';
  if (typeof tokenId !== 'string') throw 'tokenId must be string';

  const rawHero = await this.web3.methods.getHero(tokenId).call();

  if (!rawHero) return {};

  const statGenes = parseStatGenes(BigInt(rawHero[2][0]));
  const visualGenes = parseVisualGenes(BigInt(rawHero[2][1]));

  return {
    // summoning
    summonedtime: rawHero[1][0],
    nextsummontime: rawHero[1][1],
    summoner_id: rawHero[1][2],
    assistant_id: rawHero[1][3],
    summons: rawHero[1][4],
    maxsummons: rawHero[1][5],
    summons_remaining: +rawHero[1][5] - +rawHero[1][4],

    // info
    id: tokenId,
    numberid: tokenId,
    rarity: rawHero[2][2],
    shiny: rawHero[2][3],
    generation: rawHero[2][4],
    firstname: rawHero[2][5],
    firstname_string: parseFirstName({
      id: rawHero[2][5],
      gender: visualGenes.gender,
    }),
    lastname: rawHero[2][6],
    lastname_string: parseLastName(rawHero[2][6]),
    shinystyle: rawHero[2][7],
    mainclass: rawHero[2][8],
    subclass: rawHero[2][9],

    // state
    staminafullat: rawHero[3][0],
    hpfullat: rawHero[3][1],
    mpfullat: rawHero[3][2],
    level: rawHero[3][3],
    xp: rawHero[3][4],
    currentquest: rawHero[3][5],
    sp: rawHero[3][6],
    status: rawHero[3][7],

    // stat genes
    statgenes: rawHero[2][0],
    profession: statGenes.profession,
    passive1: statGenes.passive1, // TODO: "Basic" syntax
    passive2: statGenes.passive2, // TODO: "Basic" syntax
    active1: statGenes.active1, // TODO: "Basic" syntax
    active2: statGenes.active2, // TODO: "Basic" syntax
    statboost1: statGenes.statBoost1,
    statboost2: statGenes.statBoost2,
    statsunknown1: statGenes.statsUnknown1,
    statsunknown2: statGenes.statsUnknown2,
    element: statGenes.element,

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
    strengthgrowthp: rawHero[5][0],
    intelligencegrowthp: rawHero[5][1],
    wisdomgrowthp: rawHero[5][2],
    luckgrowthp: rawHero[5][3],
    agilitygrowthp: rawHero[5][4],
    vitalitygrowthp: rawHero[5][5],
    endurancegrowthp: rawHero[5][6],
    dexteritygrowthp: rawHero[5][7],
    hpsmgrowth: rawHero[5][8],
    hprggrowth: rawHero[5][9],
    hplggrowth: rawHero[5][10],
    mpsmgrowth: rawHero[5][11],
    mprggrowth: rawHero[5][12],
    mplggrowth: rawHero[5][13],

    // secondary stat growth
    strengthgrowths: rawHero[6][0],
    intelligencegrowths: rawHero[6][1],
    wisdomgrowths: rawHero[6][2],
    luckgrowths: rawHero[6][3],
    agilitygrowths: rawHero[6][4],
    vitalitygrowths: rawHero[6][5],
    endurancegrowths: rawHero[6][6],
    dexteritygrowths: rawHero[6][7],

    // professions
    mining: rawHero[7][0],
    gardening: rawHero[7][1],
    foraging: rawHero[7][2],
    fishing: rawHero[7][3],

    // visual genes
    visualgenes: rawHero[2][1],
    gender: visualGenes.gender,
    headappendage: visualGenes.headAppendage,
    backappendage: visualGenes.backAppendage,
    background: visualGenes.background,
    hairstyle: visualGenes.hairStyle,
    haircolor: visualGenes.hairColor,
    visualunknown1: visualGenes.visualUnknown1,
    eyecolor: visualGenes.eyeColor,
    skincolor: visualGenes.skinColor,
    appendagecolor: visualGenes.appendageColor,
    backappendagecolor: visualGenes.backAppendageColor,
    visualunknown2: visualGenes.visualUnknown2,

    // UNACCOUNTED FOR:
    // assistant_generation: 0,
    // assistant_mainclass: '',
    // assistant_rarity: '',
    // assistant_visualgenes: '',
    // assistantid: '',
    // assistauction_duration: null,
    // assistauction_endingprice: null,
    // assistauction_startedat: null,
    // assistauction_startingprice: null,
    // assistingauction: null,
    // assistingprice: '',
    // creator: null,
    // owner: '',
    // owner_address: '',
    // owner_name: '',
    // owner_picid: 0,
    // privateauctionprofile: null,
    // saleauction: null,
    // saleauction_duration: null,
    // saleauction_endingprice: null,
    // saleauction_startedat: null,
    // saleauction_startingprice: null,
    // saleprice: '',
    // summoner_generation: 2,
    // summoner_mainclass: '',
    // summoner_rarity: '',
    // summoner_visualgenes: '',
    // summonerid: '',
  };
}
