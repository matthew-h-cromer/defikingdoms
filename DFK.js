import Web3 from 'web3';
import Contract from './Contract.js';
// general methods
import getWallet from './general_methods/getWallet.js';
import sendSignedTransaction from './general_methods/sendSignedTransaction.js';
// hero
import HeroAbi from './contracts/hero/HeroAbi.js';
import getHero from './contracts/hero/methods/getHero.js';
import getUserHeroes from './contracts/hero/methods/getUserHeroes.js';
import tokenByIndex from './contracts/hero/methods/tokenByIndex.js';
// jewel
import JewelAbi from './contracts/jewel/JewelAbi.js';
import approve from './contracts/jewel/methods/approve.js';
// salesAuction
import SalesAuctionAbi from './contracts/salesAuction/SalesAuctionAbi.js';
import bid from './contracts/salesAuction/methods/bid.js';

export default class DFK {
  constructor(params) {
    this.initWeb3();

    const { wallet, options } = params ?? {};

    this.wallet = this.getWallet(wallet);
    this.options = options;

    if (this.options?.pollGas) this.pollGasPrice();

    this.hero = new Contract({
      address: '0x5f753dcdf9b1ad9aabc1346614d1f4746fd6ce5c',
      abi: HeroAbi,
      methods: [getHero, getUserHeroes, tokenByIndex],
      dfk: this,
    });
    this.jewel = new Contract({
      address: '0x72cb10c6bfa5624dd07ef608027e366bd690048f',
      abi: JewelAbi,
      methods: [approve],
      dfk: this,
    });
    this.salesAuction = new Contract({
      address: '0x13a65B9F8039E2c032Bc022171Dc05B30c3f2892',
      abi: SalesAuctionAbi,
      methods: [bid],
      dfk: this,
    });
  }

  initWeb3() {
    const newProvider = () =>
      new Web3.providers.WebsocketProvider('wss://ws.s0.t.hmny.io/', {
        reconnect: {
          auto: true,
          delay: 5000, // ms
          maxAttempts: 5,
          onTimeout: false,
        },
      });

    this.web3 = new Web3(newProvider());

    const checkActive = () => {
      if (!this.web3.currentProvider.connected) {
        console.log('web3 provider is no longer connected. reconnecting...');
        this.web3.setProvider(newProvider());
      }
    };

    setInterval(checkActive, 2000);
  }

  async pollGasPrice() {
    this.latestGasPrice = await this.web3.eth.getGasPrice();

    setTimeout(() => this.pollGasPrice(), 60000);
  }

  getWallet = getWallet;

  sendSignedTransaction = sendSignedTransaction;
}
