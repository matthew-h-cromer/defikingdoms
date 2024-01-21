import DFK from '../../DFK';

describe('Crystalvale', () => {
  test('getSaleAuctions', async () => {
    const dfk = new DFK();

    try {
      const saleAuctions = await dfk.getSaleAuctions({ first: 1 });

      expect(saleAuctions.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  });
});
