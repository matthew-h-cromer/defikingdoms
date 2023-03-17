import DFK from '../../DFK';
import fetch from 'node-fetch';

// NOTES
// - CMC API Page: https://coinmarketcap.com/converter/
// - CMC API: https://api.coinmarketcap.com/data-api/v3/tools/price-conversion?amount=1&convert_id=12319&id=23637

// HELPER FUNCTIONS
const getCMCRate = async ({ convert_id, id }) => {
  const response = await fetch(
    `https://api.coinmarketcap.com/data-api/v3/tools/price-conversion?amount=1&convert_id=${convert_id}&id=${id}`
  );
  const result = await response.json();
  const cmcRate = result.data.quote[0].price;
  return cmcRate;
};

function percentDifference(a, b) {
  return (Math.abs(a - b) / ((a + b) / 2)) * 100;
}

// TESTS
test('serendale JADE->JEWEL past 30 days', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const past30DaysPrices = [];

  const currentBlockNumber = await dfk.web3.eth.getBlockNumber();
  const blockTime = 1;
  const blocksInaDay = 86400 / blockTime;
  for (let day = 1; day <= 30; day++) {
    const dfkRate = await dfk.getExchangeRate(
      {
        inputToken: 'JADE',
        outputToken: 'JEWEL',
      },
      { blockNumber: currentBlockNumber - blocksInaDay * day }
    );
    past30DaysPrices.push(dfkRate);
  }

  console.log('serendale JADE->JEWEL past 30 days', past30DaysPrices);
}, 20000);

test('crystalvale CRYSTAL->JEWEL past 30 days', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const past30DaysPrices = [];

  const currentBlockNumber = await dfk.web3.eth.getBlockNumber();
  const blockTime = 2;
  const blocksInaDay = 86400 / blockTime;
  for (let day = 1; day <= 30; day++) {
    const dfkRate = await dfk.getExchangeRate(
      {
        inputToken: 'CRYSTAL',
        outputToken: 'JEWEL',
      },
      { blockNumber: currentBlockNumber - blocksInaDay * day }
    );
    past30DaysPrices.push(dfkRate);
  }

  console.log('crystalvale CRYSTAL->JEWEL past 30 days', past30DaysPrices);
}, 20000);
