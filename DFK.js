import Web3 from 'web3';
// contracts
import contractAddresses from './constants/contractAddresses.js';
// abi
import Hero from './abi/Hero.js';
import SalesAuction from './abi/SalesAuction.js';
// methods
import getHero from './methods/hero/getHero.js';

export default class DFK {
  /* prettier-ignore */
  constructor(params) {
    const { options } = params ?? {};

    // options
    this.realm = options?.realm ?? 'crystalvale';
    this.providerURL =
      options?.web3?.providerURL ?? 
      this.realm == 'crystalvale' ? 'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'
      : this.realm == 'serendale' ? 'https://cypress.fautor.app/archive'
      : null;

    // initialize web3
    this.initWeb3();

    // contracts
    this.heroContract = new this.web3.eth.Contract(
      Hero, 
      contractAddresses[this.realm].hero
    );
    this.salesAuctionContract = new this.web3.eth.Contract(
      SalesAuction,
      contractAddresses[this.realm].salesAuction
    );

    // methods
    this.getHero = getHero.bind(this);
  }

  initWeb3() {
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.providerURL));

    // return revert strings when a transaction fails
    this.web3.eth.handleRevert = true;
  }
}
