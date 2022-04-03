import decodeGenes from './decodeGenes.js';
import decodeGeneValue from './decodeGeneValue.js';
import parseBackground from './parseBackground.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
    raw: genes.toString(),
    gender: decodeGeneValue(decoded[0][3]) === 1 ? 'male' : 'female',
    headAppendage: decodeGeneValue(decoded[1][3]).toString(),
    backAppendage: decodeGeneValue(decoded[2][3]).toString(),
    background: parseBackground(decodeGeneValue(decoded[3][3])),
    hairStyle: decodeGeneValue(decoded[4][3]).toString(),
    hairColor: decodeGeneValue(decoded[5][3]).toString(),
    visualUnknown1: decodeGeneValue(decoded[6][3]).toString(),
    eyeColor: decodeGeneValue(decoded[7][3]).toString(),
    skinColor: decodeGeneValue(decoded[8][3]).toString(),
    appendageColor: decodeGeneValue(decoded[9][3]).toString(),
    backAppendageColor: decodeGeneValue(decoded[10][3]).toString(),
    visualUnknown2: decodeGeneValue(decoded[11][3]).toString(),
  };
};
