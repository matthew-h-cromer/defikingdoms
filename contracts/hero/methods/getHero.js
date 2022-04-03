import parseHero from '../utils/parseHero/parseHero.js';

export default async function getHero({ tokenId }) {
  if (!tokenId) throw 'tokenId must be provided';
  if (typeof tokenId !== 'string') throw 'tokenId must be string';

  const rawHero = await this.web3.methods.getHero(tokenId).call();

  if (!rawHero) return {};

  const hero = parseHero({ tokenId, rawHero });

  return hero;
}
