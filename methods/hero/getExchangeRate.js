import retry from '../../utils/retry.js';
import currencies from '../../constants/currencies.js';
import currencyPairs from '../../constants/currencyPairs.js';

/**
 * fetch hero data from the chain, optionally enhancing with additional information
 */
export default async function ({ realm, inputToken, outputToken }, options) {
  // ensure this is a supported currency pair
  const currencyPair = currencyPairs[realm ?? this.realm][`${inputToken}-${outputToken}`];
  if (!currencyPair) throw 'currency pair not found';

  // ensure the pair existed on the exchange at the passed block number
  const pairExists = options?.blockNumber ? options.blockNumber >= currencyPair.blockNumber : true;
  if (!pairExists) return null;

  const inputTokenAddress = currencies[realm ?? this.realm][inputToken]?.address ?? inputToken;
  const inputTokenDecimals = currencies[realm ?? this.realm][inputToken]?.decimals ?? 18;
  const outputTokenAddress = currencies[realm ?? this.realm][outputToken]?.address ?? outputToken;
  const outputTokenDecimals = currencies[realm ?? this.realm][outputToken]?.decimals ?? 18;

  const amountsOut = await retry(() =>
    this.uniswapV2RouterContract.methods
      .getAmountsOut('1000000000000000000', [inputTokenAddress, outputTokenAddress])
      .call(null, options?.blockNumber)
  );

  const rate =
    amountsOut[1] / (amountsOut[0] * Math.pow(10, outputTokenDecimals - inputTokenDecimals));

  return rate;
}
