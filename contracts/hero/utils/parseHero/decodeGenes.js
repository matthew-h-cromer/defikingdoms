export default genes => {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx';
  const BASE = BigInt(ALPHABET.length);
  let buf = [];
  while (genes >= BASE) {
    const mod = genes % BASE;
    buf.unshift(ALPHABET[mod]);
    genes = (genes - mod) / BASE;
  }

  buf.unshift(ALPHABET[genes]);

  buf = buf.join('').padStart(48, '1').split('');

  return buf.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};
