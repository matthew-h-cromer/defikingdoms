import parseStatGenes from './parseStatGenes.js';
import parseVisualGenes from './parseVisualGenes.js';
import _ from 'lodash';

export default function (rawHero) {
  // get only the named values from the raw hero data
  const rawHeroNamed = { tokenId: rawHero[0], ...getNamedValues(rawHero) };
  delete rawHeroNamed.id;

  // parse genes
  const statGenes = parseStatGenes(BigInt(rawHero[2][0]));
  const visualGenes = parseVisualGenes(BigInt(rawHero[2][1]));

  // combine
  const hero = _.merge({}, rawHeroNamed, statGenes, visualGenes);
  return hero;
}

const getNamedValues = obj => {
  const newObj = {};

  // Loop all named keys
  const namedKeys = Object.keys(obj).filter(key => isNaN(key));
  for (const key of namedKeys) {
    if (Array.isArray(obj[key])) {
      // Recurse arrays
      newObj[key] = getNamedValues(obj[key]);
    } else {
      // Assign the named values
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
