export default class Contract {
  constructor({ address, abi, methods, dfk }) {
    this.address = address;
    this.abi = abi;
    this.dfk = dfk;
    this.web3 = new dfk.web3.eth.Contract(this.abi, this.address);

    methods.map(method => {
      this[method.name] = method.bind(this);
    });
  }
}
