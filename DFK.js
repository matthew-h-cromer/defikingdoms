import Web3 from 'web3';
import { GraphQLClient } from 'graphql-request';
// constants
import realms from './constants/realms.js';
// contracts
import contractAddresses from './constants/contractAddresses.js';
// abi
import Hero from './abi/Hero.js';
import SalesAuction from './abi/SalesAuction.js';
import UniswapV2Router from './abi/UniswapV2Router.js';
// methods
import getHero from './methods/hero/getHero.js';
import getHeroV3 from './methods/hero/getHeroV3.js';
import getHeroesV3 from './methods/hero/getHeroesV3.js';
import getExchangeRate from './methods/hero/getExchangeRate.js';
import getSaleAuctions from './methods/saleAuction/getSaleAuctions.js';
import addWallet from './methods/accounts/addWallet.js';
import bid from './methods/saleAuction/bid.js';

export default class DFK {
  /* prettier-ignore */
  constructor(params) {
    const { options } = params ?? {};

    // set the realm and associated params
    this.realmId = options?.realmId ?? 'crystalvale';
    this.realm = realms.find(realm => realm.id === this.realmId);
    if(!this.realm) throw new Error(`Invalid realmId: ${realmId}`);

    // initialize
    this.initWeb3();
    this.initDfkApi();

    // contracts
    this.heroContract = new this.web3.eth.Contract(
      Hero, 
      contractAddresses[this.realmId].hero
    );
    this.salesAuctionContract = new this.web3.eth.Contract(
      SalesAuction,
      contractAddresses[this.realmId].salesAuction
    );
    this.uniswapV2RouterContract = new this.web3.eth.Contract(
      UniswapV2Router,
      contractAddresses[this.realmId].uniswapV2Router
    );

    // methods
    this.getHero = getHero.bind(this);
    this.getHeroV3 = getHeroV3.bind(this);
    this.getHeroesV3 = getHeroesV3.bind(this);
    this.getExchangeRate = getExchangeRate.bind(this);
    this.getSaleAuctions = getSaleAuctions.bind(this);
    this.addWallet = addWallet.bind(this);
    this.bid = bid.bind(this);
  }

  initWeb3() {
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.realm.rpcUrl));

    // return revert strings when a transaction fails
    this.web3.eth.handleRevert = true;
  }

  initDfkApi() {
    this.dfkApi = new GraphQLClient('https://api.defikingdoms.com/graphql');
  }
}
