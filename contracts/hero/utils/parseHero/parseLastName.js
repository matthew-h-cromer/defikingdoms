import lastNames from '../../../../constants/lastNames.js';

export default id => {
  let lastName = lastNames[id] ?? id;

  if (lastName !== id) return lastName[0].toUpperCase() + lastName.slice(1);
  else return lastName;
};
