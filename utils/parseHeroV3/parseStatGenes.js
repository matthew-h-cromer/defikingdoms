import decodeGenes from '../parseHero/decodeGenes.js';
import decodeGeneValue from '../parseHero/decodeGeneValue.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
    info: {
      // class
      class: String(decodeGeneValue(decoded[0][3])),
      r1_class: String(decodeGeneValue(decoded[0][2])),
      r2_class: String(decodeGeneValue(decoded[0][1])),
      r3_class: String(decodeGeneValue(decoded[0][0])),
      // subClass
      subClass: String(decodeGeneValue(decoded[1][3])),
      r1_subClass: String(decodeGeneValue(decoded[1][2])),
      r2_subClass: String(decodeGeneValue(decoded[1][1])),
      r3_subClass: String(decodeGeneValue(decoded[1][0])),
      // element
      element: String(decodeGeneValue(decoded[10][3])),
      r1_element: String(decodeGeneValue(decoded[10][2])),
      r2_element: String(decodeGeneValue(decoded[10][1])),
      r3_element: String(decodeGeneValue(decoded[10][0]))
    },
    professions: {
      // profession
      profession: String(decodeGeneValue(decoded[2][3])),
      r1_profession: String(decodeGeneValue(decoded[2][2])),
      r2_profession: String(decodeGeneValue(decoded[2][1])),
      r3_profession: String(decodeGeneValue(decoded[2][0])),
      // crafting1
      crafting1: String(decodeGeneValue(decoded[9][3])),
      r1_crafting1: String(decodeGeneValue(decoded[9][2])),
      r2_crafting1: String(decodeGeneValue(decoded[9][1])),
      r3_crafting1: String(decodeGeneValue(decoded[9][0])),
      // crafting2
      crafting2: String(decodeGeneValue(decoded[11][3])),
      r1_crafting2: String(decodeGeneValue(decoded[11][2])),
      r2_crafting2: String(decodeGeneValue(decoded[11][1])),
      r3_crafting2: String(decodeGeneValue(decoded[11][0]))
    },
    abilities: {
      // active1
      active1: String(decodeGeneValue(decoded[5][3])),
      r1_active1: String(decodeGeneValue(decoded[5][2])),
      r2_active1: String(decodeGeneValue(decoded[5][1])),
      r3_active1: String(decodeGeneValue(decoded[5][0])),
      // active2
      active2: String(decodeGeneValue(decoded[6][3])),
      r1_active2: String(decodeGeneValue(decoded[6][2])),
      r2_active2: String(decodeGeneValue(decoded[6][1])),
      r3_active2: String(decodeGeneValue(decoded[6][0])),
      // passive1
      passive1: String(decodeGeneValue(decoded[3][3])),
      r1_passive1: String(decodeGeneValue(decoded[3][2])),
      r2_passive1: String(decodeGeneValue(decoded[3][1])),
      r3_passive1: String(decodeGeneValue(decoded[3][0])),
      // passive2
      passive2: String(decodeGeneValue(decoded[4][3])),
      r1_passive2: String(decodeGeneValue(decoded[4][2])),
      r2_passive2: String(decodeGeneValue(decoded[4][1])),
      r3_passive2: String(decodeGeneValue(decoded[4][0]))
    },
    stats: {
      // statBoost1
      statBoost1: String(decodeGeneValue(decoded[7][3])),
      r1_statBoost1: String(decodeGeneValue(decoded[7][2])),
      r2_statBoost1: String(decodeGeneValue(decoded[7][1])),
      r3_statBoost1: String(decodeGeneValue(decoded[7][0])),
      // statBoost2
      statBoost2: String(decodeGeneValue(decoded[8][3])),
      r1_statBoost2: String(decodeGeneValue(decoded[8][2])),
      r2_statBoost2: String(decodeGeneValue(decoded[8][1])),
      r3_statBoost2: String(decodeGeneValue(decoded[8][0]))
    }
  };
};
