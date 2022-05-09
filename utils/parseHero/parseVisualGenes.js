import decodeGenes from './decodeGenes.js';
import decodeGeneValue from './decodeGeneValue.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
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
  };
};
