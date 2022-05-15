export default date => (date == null || date == '0' ? null : new Date(+date * 1000));
