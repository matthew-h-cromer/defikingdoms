import retry from '../../utils/retry.js';
import currencies from '../../constants/currencies.js';
import currencyPairs from '../../constants/currencyPairs.js';

/**
 * return the amount you would get in exchange for some amount of a token (in wei)
 */
export default async function (
  { realmId, amount, inputToken, outputToken },
  options
) {
  if (!amount) throw 'getExchangeRate requires an amount input';

  // ensure this is a supported currency pair
  const currencyPair =
    currencyPairs[realmId ?? this.realmId][`${inputToken}-${outputToken}`];
  if (!currencyPair) throw 'currency pair not found';

  // ensure the pair existed on the exchange at the passed block number
  const pairExists = options?.blockNumber
    ? options.blockNumber >= currencyPair.blockNumber
    : true;
  if (!pairExists) return null;

  // get amounts out from the contract
  const inputTokenAddress =
    currencies[realmId ?? this.realmId][inputToken]?.address ?? inputToken;
  const inputTokenDecimals =
    currencies[realmId ?? this.realmId][inputToken]?.decimals ?? 18;
  const outputTokenAddress =
    currencies[realmId ?? this.realmId][outputToken]?.address ?? outputToken;
  const outputTokenDecimals =
    currencies[realmId ?? this.realmId][outputToken]?.decimals ?? 18;

  const amountsOut = await retry(() =>
    this.uniswapV2RouterContract.methods
      .getAmountsOut(amount, [inputTokenAddress, outputTokenAddress])
      .call(null, options?.blockNumber)
  );

  const amountOut = BigInt(amountsOut[1]);

  const decimalsDifference = outputTokenDecimals - inputTokenDecimals;

  if (decimalsDifference < 0) {
    return amountOut * 10n ** BigInt(Math.abs(decimalsDifference));
  } else {
    return amountOut / 10n ** BigInt(Math.abs(decimalsDifference));
  }
}
