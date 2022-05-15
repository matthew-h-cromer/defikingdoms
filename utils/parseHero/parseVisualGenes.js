import decodeGenes from './decodeGenes.js';
import decodeGeneValue from './decodeGeneValue.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
    // dominant
    gender: String(decodeGeneValue(decoded[0][3])),
    headAppendage: String(decodeGeneValue(decoded[1][3])),
    backAppendage: String(decodeGeneValue(decoded[2][3])),
    background: String(decodeGeneValue(decoded[3][3])),
    hairStyle: String(decodeGeneValue(decoded[4][3])),
    hairColor: String(decodeGeneValue(decoded[5][3])),
    visualUnknown1: String(decodeGeneValue(decoded[6][3])),
    eyeColor: String(decodeGeneValue(decoded[7][3])),
    skinColor: String(decodeGeneValue(decoded[8][3])),
    appendageColor: String(decodeGeneValue(decoded[9][3])),
    backAppendageColor: String(decodeGeneValue(decoded[10][3])),
    visualUnknown2: String(decodeGeneValue(decoded[11][3])),
    // r1
    r1_gender: String(decodeGeneValue(decoded[0][2])),
    r1_headAppendage: String(decodeGeneValue(decoded[1][2])),
    r1_backAppendage: String(decodeGeneValue(decoded[2][2])),
    r1_background: String(decodeGeneValue(decoded[3][2])),
    r1_hairStyle: String(decodeGeneValue(decoded[4][2])),
    r1_hairColor: String(decodeGeneValue(decoded[5][2])),
    r1_visualUnknown1: String(decodeGeneValue(decoded[6][2])),
    r1_eyeColor: String(decodeGeneValue(decoded[7][2])),
    r1_skinColor: String(decodeGeneValue(decoded[8][2])),
    r1_appendageColor: String(decodeGeneValue(decoded[9][2])),
    r1_backAppendageColor: String(decodeGeneValue(decoded[10][2])),
    r1_visualUnknown2: String(decodeGeneValue(decoded[11][2])),
    // r2
    r2_gender: String(decodeGeneValue(decoded[0][1])),
    r2_headAppendage: String(decodeGeneValue(decoded[1][1])),
    r2_backAppendage: String(decodeGeneValue(decoded[2][1])),
    r2_background: String(decodeGeneValue(decoded[3][1])),
    r2_hairStyle: String(decodeGeneValue(decoded[4][1])),
    r2_hairColor: String(decodeGeneValue(decoded[5][1])),
    r2_visualUnknown1: String(decodeGeneValue(decoded[6][1])),
    r2_eyeColor: String(decodeGeneValue(decoded[7][1])),
    r2_skinColor: String(decodeGeneValue(decoded[8][1])),
    r2_appendageColor: String(decodeGeneValue(decoded[9][1])),
    r2_backAppendageColor: String(decodeGeneValue(decoded[10][1])),
    r2_visualUnknown2: String(decodeGeneValue(decoded[11][1])),
    // r3
    r3_gender: String(decodeGeneValue(decoded[0][0])),
    r3_headAppendage: String(decodeGeneValue(decoded[1][0])),
    r3_backAppendage: String(decodeGeneValue(decoded[2][0])),
    r3_background: String(decodeGeneValue(decoded[3][0])),
    r3_hairStyle: String(decodeGeneValue(decoded[4][0])),
    r3_hairColor: String(decodeGeneValue(decoded[5][0])),
    r3_visualUnknown1: String(decodeGeneValue(decoded[6][0])),
    r3_eyeColor: String(decodeGeneValue(decoded[7][0])),
    r3_skinColor: String(decodeGeneValue(decoded[8][0])),
    r3_appendageColor: String(decodeGeneValue(decoded[9][0])),
    r3_backAppendageColor: String(decodeGeneValue(decoded[10][0])),
    r3_visualUnknown2: String(decodeGeneValue(decoded[11][0])),
  };
};
