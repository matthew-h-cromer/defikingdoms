import DFK from '../../DFK';
describe('Crystalvale', () => {
  test('Can get auction', async () => {
    const dfk = new DFK();

    try {
      const auction = await dfk.getAuction(2000000389685);

      console.log({ auction });
      console.log(Object.keys(auction));
    } catch (e) {
      console.log(e);
    }
  });
});
