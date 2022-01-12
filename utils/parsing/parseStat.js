const stats = {
  0: 'strength',
  2: 'agility',
  4: 'intelligence',
  6: 'wisdom',
  8: 'luck',
  10: 'vitality',
  12: 'endurance',
  14: 'dexterity',
};

export default id => stats[id] ?? id;
