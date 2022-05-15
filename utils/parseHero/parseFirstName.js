import maleFirstNames from '../../constants/maleFirstNames.js';
import femaleFirstNames from '../../constants/femaleFirstNames.js';

export default ({ gender, id }) => {
  let firstName = id;

  if (gender === '1') firstName = maleFirstNames[id] ?? id;

  if (gender === '3') firstName = femaleFirstNames[id] ?? id;

  if (firstName !== id) return firstName[0].toUpperCase() + firstName.slice(1);
  else return firstName;
};
