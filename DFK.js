import Web3 from 'web3';
// contracts
import contractAddresses from './constants/contractAddresses.js';
// abi
import Hero from './abi/Hero.js';
// methods
import getHero from './methods/hero/getHero.js';

export default class DFK {
  constructor(params) {
    const { options } = params ?? {};

    // initialize web3
    this.initWeb3({
      providerURL: options?.web3?.providerURL,
    });

    // contracts
    this.heroContract = new this.web3.eth.Contract(Hero, contractAddresses.hero);

    // methods
    //   hero
    this.getHero = (tokenId, options) => getHero(this.heroContract, tokenId, options);
  }

  initWeb3({ providerURL }) {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(providerURL ?? 'https://rpc.s0.t.hmny.io')
    );

    // return revert strings when a transaction fails
    this.web3.eth.handleRevert = true;
  }
}
