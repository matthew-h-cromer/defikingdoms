import DFK from '../../DFK';
describe('Crystalvale', () => {
  test('Can get auction', async () => {
    const dfk = new DFK();

    try {
      const auction = await dfk.getAuctionForHero(1000000208269);

      console.log({ auction });
      console.log(Object.keys(auction));
    } catch (e) {
      console.log(e);
    }
  });
});
