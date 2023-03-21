import DFK from '../../DFK';
import fetch from 'node-fetch';
import Web3 from 'web3';

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
test('serendale current JADE->JEWEL is accurate', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const amount = await dfk.getExchangeRate({
    amount: Web3.utils.toWei('1'),
    inputToken: 'JADE',
    outputToken: 'JEWEL',
  });

  const dfkRate = Web3.utils.fromWei(amount.toString());

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '12319', id: '23637' });

  expect(percentDifference(Number(dfkRate), cmcRate)).toBeLessThan(10);
});

test('serendale current JADE->KLAY is accurate', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const amount = await dfk.getExchangeRate({
    amount: Web3.utils.toWei('1'),
    inputToken: 'JADE',
    outputToken: 'KLAY',
  });

  const dfkRate = Web3.utils.fromWei(amount.toString());

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '4256', id: '23637' });

  expect(percentDifference(Number(dfkRate), cmcRate)).toBeLessThan(10);
});

test('serendale current JADE->USD is accurate', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const amount = await dfk.getExchangeRate({
    amount: Web3.utils.toWei('1'),
    inputToken: 'JADE',
    outputToken: 'USD',
  });

  const dfkRate = Web3.utils.fromWei(amount.toString());

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '2781', id: '23637' });

  expect(percentDifference(Number(dfkRate), cmcRate)).toBeLessThan(10);
});

test('crystalvale current CRYSTAL->JEWEL is accurate', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const amount = await dfk.getExchangeRate({
    amount: Web3.utils.toWei('1'),
    inputToken: 'CRYSTAL',
    outputToken: 'JEWEL',
  });

  const dfkRate = Web3.utils.fromWei(amount.toString());

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '12319', id: '19397' });

  expect(percentDifference(Number(dfkRate), cmcRate)).toBeLessThan(10);
});

test('crystalvale current CRYSTAL->KLAY is accurate', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const amount = await dfk.getExchangeRate({
    amount: Web3.utils.toWei('1'),
    inputToken: 'CRYSTAL',
    outputToken: 'KLAY',
  });

  const dfkRate = Web3.utils.fromWei(amount.toString());

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '4256', id: '19397' });

  expect(percentDifference(Number(dfkRate), cmcRate)).toBeLessThan(10);
});

test('crystalvale current CRYSTAL->USD is accurate', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const amount = await dfk.getExchangeRate({
    amount: Web3.utils.toWei('1'),
    inputToken: 'CRYSTAL',
    outputToken: 'USD',
  });

  const dfkRate = Web3.utils.fromWei(amount.toString());

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '2781', id: '19397' });

  expect(percentDifference(Number(dfkRate), cmcRate)).toBeLessThan(10);
});
