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
test('serendale current JADE->JEWEL within 5%', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const dfkRate = await dfk.getExchangeRate({
    inputToken: 'JADE',
    outputToken: 'JEWEL',
  });

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '12319', id: '23637' });

  expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
});

test('serendale current JADE->KLAY within 5%', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const dfkRate = await dfk.getExchangeRate({
    inputToken: 'JADE',
    outputToken: 'KLAY',
  });

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '4256', id: '23637' });

  expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
});

test('serendale current JADE->USD within 5%', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'serendale' } });

  const dfkRate = await dfk.getExchangeRate({
    inputToken: 'JADE',
    outputToken: 'USD',
  });

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '2781', id: '23637' });

  expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
});

// test('serendale current JADE->CRYSTAL within 5%', async () => {
//   // get DFK exchange rate
//   const dfk = new DFK({ options: { realm: 'serendale' } });

//   const dfkRate = await dfk.getExchangeRate({
//     inputToken: 'JADE',
//     outputToken: 'CRYSTAL',
//   });

//   // get coinmarketcap exchange rate
//   const cmcRate = await getCMCRate({ convert_id: '19397', id: '23637' });

//   expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
// });

test('crystalvale current CRYSTAL->JEWEL within 5%', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const dfkRate = await dfk.getExchangeRate({
    inputToken: 'CRYSTAL',
    outputToken: 'JEWEL',
  });

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '12319', id: '19397' });

  expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
});

test('crystalvale current CRYSTAL->KLAY within 5%', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const dfkRate = await dfk.getExchangeRate({
    inputToken: 'CRYSTAL',
    outputToken: 'KLAY',
  });

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '4256', id: '19397' });

  expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
});

test('crystalvale current CRYSTAL->USD within 5%', async () => {
  // get DFK exchange rate
  const dfk = new DFK({ options: { realm: 'crystalvale' } });

  const dfkRate = await dfk.getExchangeRate({
    inputToken: 'CRYSTAL',
    outputToken: 'USD',
  });

  // get coinmarketcap exchange rate
  const cmcRate = await getCMCRate({ convert_id: '2781', id: '19397' });

  expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
});

// test('crystalvale current CRYSTAL->JADE within 5%', async () => {
//   // get DFK exchange rate
//   const dfk = new DFK({ options: { realm: 'crystalvale' } });

//   const dfkRate = await dfk.getExchangeRate({
//     inputToken: 'CRYSTAL',
//     outputToken: 'JADE',
//   });

//   // get coinmarketcap exchange rate
//   const cmcRate = await getCMCRate({ convert_id: '23637', id: '19397' });

//   expect(percentDifference(dfkRate, cmcRate)).toBeLessThan(5);
// });
