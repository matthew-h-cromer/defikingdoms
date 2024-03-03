import DFK from '../../DFK';
describe('Crystalvale', () => {
  test('Can get auctions', async () => {
    const dfk = new DFK();

    try {
      const auctions = await dfk.getAuctions([10000003442206]);

      console.log({ auctions });
    } catch (e) {
      console.log(e);
    }
  });
});
