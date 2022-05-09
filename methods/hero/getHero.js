import parseHero from '../../utils/parseHero/parseHero.js';
import retry from '../../utils/retry.js';

/**
 * fetch hero data from the chain, optionally enhancing with additional information
 */
const getHero = async (heroContract, tokenId, options) => {
  const rawHero = await retry(() => heroContract.methods.getHero(tokenId).call());
  const parsedHero = parseHero(rawHero);
  return { tokenId, ...parsedHero };
};
export default getHero;
