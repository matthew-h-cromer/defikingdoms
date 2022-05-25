import parseHero from '../../utils/parseHero/parseHero.js';
import getPjStatus from './getPjStatus.js';
import retry from '../../utils/retry.js';

/**
 * fetch hero data from the chain, optionally enhancing with additional information
 */
export default async function (tokenId, options) {
  const rawHero = await retry(() =>
    this.heroContract.methods.getHero(tokenId).call(null, options?.blockNumber)
  );

  const parsedHero = parseHero(rawHero);

  // perilous journey status
  const pjClaimStartBlock = 24145237;
  if (!options?.blockNumber || options.blockNumber >= pjClaimStartBlock)
    parsedHero.pjStatus = getPjStatus(tokenId);

  return { tokenId, ...parsedHero };
}
