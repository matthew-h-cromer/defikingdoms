import retry from '../../utils/retry.js';
import parseHeroV3 from '../../utils/parseHeroV3/parseHeroV3.js';

export default async function (tokenId, options) {
  const rawHero = await retry(() =>
    this.heroContract.methods
      .getHeroV3(tokenId)
      .call(null, options?.blockNumber)
  );

  const parsedHero = parseHeroV3(rawHero);

  return parsedHero;
}
