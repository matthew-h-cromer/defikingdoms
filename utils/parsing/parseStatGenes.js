import decodeGenes from './decodeGenes.js';
import decodeGeneValue from './decodeGeneValue.js';
import parseClass from './parseClass.js';
import parseProfession from './parseProfession.js';
import parseStat from './parseStat.js';
import parseElement from './parseElement.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
    raw: genes.toString(),
    mainClass: parseClass(decodeGeneValue(decoded[0][3])),
    subClass: parseClass(decodeGeneValue(decoded[1][3])),
    profession: parseProfession(decodeGeneValue(decoded[2][3])),
    passive1: decodeGeneValue(decoded[3][3]).toString(),
    passive2: decodeGeneValue(decoded[4][3]).toString(),
    active1: decodeGeneValue(decoded[5][3]).toString(),
    active2: decodeGeneValue(decoded[6][3]).toString(),
    statBoost1: parseStat(decodeGeneValue(decoded[7][3])),
    statBoost2: parseStat(decodeGeneValue(decoded[8][3])),
    statsUnknown1: decodeGeneValue(decoded[9][3]),
    element: parseElement(decodeGeneValue(decoded[10][3])),
    statsUnknown2: decodeGeneValue(decoded[11][3]),
  };
};
