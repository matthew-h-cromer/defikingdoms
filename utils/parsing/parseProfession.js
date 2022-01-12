const professions = {
  0: 'mining',
  2: 'gardening',
  4: 'fishing',
  6: 'foraging',
};

export default id => professions[id] ?? id;
