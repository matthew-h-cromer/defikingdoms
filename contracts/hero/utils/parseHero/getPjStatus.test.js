import getPjStatus from './getPjStatus';

test('getPjStatus null', async () => {
  const pjStatus = getPjStatus(102627);

  expect(pjStatus).toBe(null);
});

test('getPjStatus SURVIVED', async () => {
  const pjStatus = getPjStatus(44292);

  expect(pjStatus).toBe('SURVIVED');
});

test('getPjStatus DIED', async () => {
  const pjStatus = getPjStatus(44299);

  expect(pjStatus).toBe('DIED');
});

test('getPjStatus ON_JOURNEY', async () => {
  const pjStatus = getPjStatus(51956);

  expect(pjStatus).toBe('ON_JOURNEY');
});
