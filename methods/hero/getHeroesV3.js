import retry from '../../utils/retry.js';
import parseHeroV3 from '../../utils/parseHeroV3/parseHeroV3.js';

export default async function (tokenIds, options) {
  const rawHeroes = await retry(
    () =>
      this.heroContract.methods
        .getHeroesV3(tokenIds)
        .call(null, options?.blockNumber),
    options?.retries
  );

  const parsedHeroes = rawHeroes.map(rawHero => parseHeroV3(rawHero));

  return parsedHeroes;
}
