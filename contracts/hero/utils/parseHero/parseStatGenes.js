import decodeGenes from './decodeGenes.js';
import decodeGeneValue from './decodeGeneValue.js';
import parseProfession from './parseProfession.js';
import parseStat from './parseStat.js';
import parseElement from './parseElement.js';

export default genes => {
  const decoded = decodeGenes(genes);

  return {
    raw: String(genes),
    // dominant
    mainClass: String(decodeGeneValue(decoded[0][3])),
    subClass: String(decodeGeneValue(decoded[1][3])),
    profession: parseProfession(decodeGeneValue(decoded[2][3])),
    passive1: String(decodeGeneValue(decoded[3][3])),
    passive2: String(decodeGeneValue(decoded[4][3])),
    active1: String(decodeGeneValue(decoded[5][3])),
    active2: String(decodeGeneValue(decoded[6][3])),
    statBoost1: parseStat(decodeGeneValue(decoded[7][3])),
    statBoost2: parseStat(decodeGeneValue(decoded[8][3])),
    statsUnknown1: String(decodeGeneValue(decoded[9][3])),
    element: parseElement(decodeGeneValue(decoded[10][3])),
    statsUnknown2: String(decodeGeneValue(decoded[11][3])),
    // r1
    r1_mainClass: String(decodeGeneValue(decoded[0][2])),
    r1_subClass: String(decodeGeneValue(decoded[1][2])),
    r1_profession: parseProfession(decodeGeneValue(decoded[2][2])),
    r1_passive1: String(decodeGeneValue(decoded[3][2])),
    r1_passive2: String(decodeGeneValue(decoded[4][2])),
    r1_active1: String(decodeGeneValue(decoded[5][2])),
    r1_active2: String(decodeGeneValue(decoded[6][2])),
    r1_statBoost1: parseStat(decodeGeneValue(decoded[7][2])),
    r1_statBoost2: parseStat(decodeGeneValue(decoded[8][2])),
    r1_statsUnknown1: String(decodeGeneValue(decoded[9][2])),
    r1_element: parseElement(decodeGeneValue(decoded[10][2])),
    r1_statsUnknown2: String(decodeGeneValue(decoded[11][2])),
    // r2
    r2_mainClass: String(decodeGeneValue(decoded[0][1])),
    r2_subClass: String(decodeGeneValue(decoded[1][1])),
    r2_profession: parseProfession(decodeGeneValue(decoded[2][1])),
    r2_passive1: String(decodeGeneValue(decoded[3][1])),
    r2_passive2: String(decodeGeneValue(decoded[4][1])),
    r2_active1: String(decodeGeneValue(decoded[5][1])),
    r2_active2: String(decodeGeneValue(decoded[6][1])),
    r2_statBoost1: parseStat(decodeGeneValue(decoded[7][1])),
    r2_statBoost2: parseStat(decodeGeneValue(decoded[8][1])),
    r2_statsUnknown1: String(decodeGeneValue(decoded[9][1])),
    r2_element: parseElement(decodeGeneValue(decoded[10][1])),
    r2_statsUnknown2: String(decodeGeneValue(decoded[11][1])),
    // r3
    r3_mainClass: String(decodeGeneValue(decoded[0][0])),
    r3_subClass: String(decodeGeneValue(decoded[1][0])),
    r3_profession: parseProfession(decodeGeneValue(decoded[2][0])),
    r3_passive1: String(decodeGeneValue(decoded[3][0])),
    r3_passive2: String(decodeGeneValue(decoded[4][0])),
    r3_active1: String(decodeGeneValue(decoded[5][0])),
    r3_active2: String(decodeGeneValue(decoded[6][0])),
    r3_statBoost1: parseStat(decodeGeneValue(decoded[7][0])),
    r3_statBoost2: parseStat(decodeGeneValue(decoded[8][0])),
    r3_statsUnknown1: String(decodeGeneValue(decoded[9][0])),
    r3_element: parseElement(decodeGeneValue(decoded[10][0])),
    r3_statsUnknown2: String(decodeGeneValue(decoded[11][0])),
  };
};
