const classes = {
  0: 'warrior',
  1: 'knight',
  2: 'thief',
  3: 'archer',
  4: 'priest',
  5: 'wizard',
  6: 'monk',
  7: 'pirate',
  16: 'paladin',
  17: 'darkknight',
  18: 'summoner',
  19: 'ninja',
  24: 'dragoon',
  25: 'sage',
  28: 'dreadknight',
};

export default id => classes[id] ?? id;
