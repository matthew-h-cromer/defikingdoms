import DFK from '../../DFK';
import Web3 from 'web3';

// NOTES
// - CMC API Page: https://coinmarketcap.com/converter/
// - CMC API: https://api.coinmarketcap.com/data-api/v3/tools/price-conversion?amount=1&convert_id=12319&id=23637

// TESTS
test.skip('serendale JADE->JEWEL past 30 days', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const past30DaysPrices = [];

  const currentBlockNumber = await dfk.web3.eth.getBlockNumber();
  const blockTime = 1;
  const blocksInaDay = 86400 / blockTime;
  for (let day = 1; day <= 30; day++) {
    const dfkRate = await dfk.getExchangeRate(
      {
        amount: Web3.utils.toWei('1'),
        inputToken: 'JADE',
        outputToken: 'JEWEL',
      },
      { blockNumber: currentBlockNumber - blocksInaDay * day }
    );
    past30DaysPrices.push(dfkRate);
  }

  console.log('serendale JADE->JEWEL past 30 days', past30DaysPrices);
}, 20000);

test.skip('crystalvale CRYSTAL->JEWEL past 30 days', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const past30DaysPrices = [];

  const currentBlockNumber = await dfk.web3.eth.getBlockNumber();
  const blockTime = 2;
  const blocksInaDay = 86400 / blockTime;
  for (let day = 1; day <= 30; day++) {
    const dfkRate = await dfk.getExchangeRate(
      {
        amount: Web3.utils.toWei('1'),
        inputToken: 'CRYSTAL',
        outputToken: 'JEWEL',
      },
      { blockNumber: currentBlockNumber - blocksInaDay * day }
    );
    past30DaysPrices.push(dfkRate);
  }

  console.log('crystalvale CRYSTAL->JEWEL past 30 days', past30DaysPrices);
}, 20000);

test('rate before pair exists returns null', async () => {
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const dfkRate = await dfk.getExchangeRate(
    {
      amount: Web3.utils.toWei('1'),
      inputToken: 'CRYSTAL',
      outputToken: 'JEWEL',
    },
    { blockNumber: 100 }
  );

  expect(dfkRate).toBeNull();
});

test('rate after pair exists to be non null', async () => {
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const dfkRate = await dfk.getExchangeRate(
    {
      amount: Web3.utils.toWei('1'),
      inputToken: 'CRYSTAL',
      outputToken: 'JEWEL',
    },
    { blockNumber: 500 }
  );

  expect(dfkRate).not.toBeNull();
});
