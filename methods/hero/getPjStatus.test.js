import getPjStatus from './getPjStatus';

test.skip('getPjStatus=null', async () => {
  const pjStatus = getPjStatus(102627);

  expect(pjStatus).toBe(null);
});

test.skip('getPjStatus="survived"', async () => {
  const pjStatus = getPjStatus(44292);

  expect(pjStatus).toBe('survived');
});

test.skip('getPjStatus="died"', async () => {
  const pjStatus = getPjStatus(44299);

  expect(pjStatus).toBe('died');
});

test.skip('getPjStatus="onJourney"', async () => {
  const pjStatus = getPjStatus(51956);

  expect(pjStatus).toBe('onJourney');
});
