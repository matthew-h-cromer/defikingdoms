import decodeGenes from '../parseHero/decodeGenes.js';
import decodeGeneValue from '../parseHero/decodeGeneValue.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
    visual: {
      // gender
      gender: String(decodeGeneValue(decoded[0][3])),
      r1_gender: String(decodeGeneValue(decoded[0][2])),
      r2_gender: String(decodeGeneValue(decoded[0][1])),
      r3_gender: String(decodeGeneValue(decoded[0][0])),
      // headAppendage
      headAppendage: String(decodeGeneValue(decoded[1][3])),
      r1_headAppendage: String(decodeGeneValue(decoded[1][2])),
      r2_headAppendage: String(decodeGeneValue(decoded[1][1])),
      r3_headAppendage: String(decodeGeneValue(decoded[1][0])),
      // backAppendage
      backAppendage: String(decodeGeneValue(decoded[2][3])),
      r1_backAppendage: String(decodeGeneValue(decoded[2][2])),
      r2_backAppendage: String(decodeGeneValue(decoded[2][1])),
      r3_backAppendage: String(decodeGeneValue(decoded[2][0])),
      // background
      background: String(decodeGeneValue(decoded[3][3])),
      r1_background: String(decodeGeneValue(decoded[3][2])),
      r2_background: String(decodeGeneValue(decoded[3][1])),
      r3_background: String(decodeGeneValue(decoded[3][0])),
      // hairStyle
      hairStyle: String(decodeGeneValue(decoded[4][3])),
      r1_hairStyle: String(decodeGeneValue(decoded[4][2])),
      r2_hairStyle: String(decodeGeneValue(decoded[4][1])),
      r3_hairStyle: String(decodeGeneValue(decoded[4][0])),
      // hairColor
      hairColor: String(decodeGeneValue(decoded[5][3])),
      r1_hairColor: String(decodeGeneValue(decoded[5][2])),
      r2_hairColor: String(decodeGeneValue(decoded[5][1])),
      r3_hairColor: String(decodeGeneValue(decoded[5][0])),
      // visualUnknown1
      visualUnknown1: String(decodeGeneValue(decoded[6][3])),
      r1_visualUnknown1: String(decodeGeneValue(decoded[6][2])),
      r2_visualUnknown1: String(decodeGeneValue(decoded[6][1])),
      r3_visualUnknown1: String(decodeGeneValue(decoded[6][0])),
      // eyeColor
      eyeColor: String(decodeGeneValue(decoded[7][3])),
      r1_eyeColor: String(decodeGeneValue(decoded[7][2])),
      r2_eyeColor: String(decodeGeneValue(decoded[7][1])),
      r3_eyeColor: String(decodeGeneValue(decoded[7][0])),
      // skinColor
      skinColor: String(decodeGeneValue(decoded[8][3])),
      r1_skinColor: String(decodeGeneValue(decoded[8][2])),
      r2_skinColor: String(decodeGeneValue(decoded[8][1])),
      r3_skinColor: String(decodeGeneValue(decoded[8][0])),
      // appendageColor
      appendageColor: String(decodeGeneValue(decoded[9][3])),
      r1_appendageColor: String(decodeGeneValue(decoded[9][2])),
      r2_appendageColor: String(decodeGeneValue(decoded[9][1])),
      r3_appendageColor: String(decodeGeneValue(decoded[9][0])),
      // backAppendageColor
      backAppendageColor: String(decodeGeneValue(decoded[10][3])),
      r1_backAppendageColor: String(decodeGeneValue(decoded[10][2])),
      r2_backAppendageColor: String(decodeGeneValue(decoded[10][1])),
      r3_backAppendageColor: String(decodeGeneValue(decoded[10][0])),
      // visualUnknown2
      visualUnknown2: String(decodeGeneValue(decoded[11][3])),
      r1_visualUnknown2: String(decodeGeneValue(decoded[11][2])),
      r2_visualUnknown2: String(decodeGeneValue(decoded[11][1])),
      r3_visualUnknown2: String(decodeGeneValue(decoded[11][0]))
    }
  };
};
