import getPjStatus from './getPjStatus';

test('getPjStatus=null', async () => {
  const pjStatus = getPjStatus(102627);

  expect(pjStatus).toBe(null);
});

test('getPjStatus="survived"', async () => {
  const pjStatus = getPjStatus(44292);

  expect(pjStatus).toBe('survived');
});

test('getPjStatus="died"', async () => {
  const pjStatus = getPjStatus(44299);

  expect(pjStatus).toBe('died');
});

test('getPjStatus="onJourney"', async () => {
  const pjStatus = getPjStatus(51956);

  expect(pjStatus).toBe('onJourney');
});
