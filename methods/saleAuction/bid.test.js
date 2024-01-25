import DFK from '../../DFK';
describe('Crystalvale', () => {
  test('Can bid', async () => {
    const dfk = new DFK();

    const addressAdded = dfk.addWallet(
      '0x941febac3ea963e5d33a9d51214c220999ca419f5bc07a2d280714282847feb1'
    );
    console.log({ addressAdded });

    try {
      const bid = await dfk.bid(1, 1);
      console.log({ bid });
    } catch (e) {
      console.log(e);
    }
  });
});
