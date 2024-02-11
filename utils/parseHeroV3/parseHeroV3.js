import parseHeroBase from './parseHeroBase.js';
import parseStatGenes from './parseStatGenes.js';
import parseVisualGenes from './parseVisualGenes.js';
import _ from 'lodash';

export default function (rawHero) {
  // parse base hero data
  const heroBase = parseHeroBase(rawHero);

  // parse genes
  const statGenes = parseStatGenes(BigInt(rawHero[2][0]));
  const visualGenes = parseVisualGenes(BigInt(rawHero[2][1]));

  // combine
  const hero = _.merge({}, heroBase, statGenes, visualGenes);
  return hero;
}
