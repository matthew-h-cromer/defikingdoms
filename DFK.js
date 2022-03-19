import Web3 from 'web3';
import Contract from './Contract.js';
import abiDecoder from 'abi-decoder';
// general methods
import getWallet from './general_methods/getWallet.js';
import sendSignedTransaction from './general_methods/sendSignedTransaction.js';
// hero
import HeroAbi from './contracts/hero/HeroAbi.js';
import getHero from './contracts/hero/methods/getHero.js';
import getUserHeroes from './contracts/hero/methods/getUserHeroes.js';
import tokenByIndex from './contracts/hero/methods/tokenByIndex.js';
import totalSupply from './contracts/hero/methods/totalSupply.js';
// jewel
import JewelAbi from './contracts/jewel/JewelAbi.js';
import approve from './contracts/jewel/methods/approve.js';
import balanceOf from './contracts/jewel/methods/balanceOf.js';
// salesAuction
import SalesAuctionAbi from './contracts/salesAuction/SalesAuctionAbi.js';
import bid from './contracts/salesAuction/methods/bid.js';
import multiBid from './contracts/salesAuction/methods/multiBid.js';
// perilous journey
import PerilousJourneyAbi from './contracts/perilousJourney/PerilousJourneyAbi.js';
import getHeroSubmission from './contracts/perilousJourney/methods/getHeroSubmission.js';

export default class DFK {
  constructor(params) {
    const { name, wallet, options } = params ?? {};

    this.name = name;
    this.options = options;

    this.initWeb3({
      providerURL: this.options?.providerURL,
      providerType: this.options?.providerType,
    });

    this.wallet = this.getWallet(wallet);

    this.hero = new Contract({
      address: '0x5f753dcdf9b1ad9aabc1346614d1f4746fd6ce5c',
      abi: HeroAbi,
      methods: [getHero, getUserHeroes, tokenByIndex, totalSupply],
      dfk: this,
    });
    this.jewel = new Contract({
      address: '0x72cb10c6bfa5624dd07ef608027e366bd690048f',
      abi: JewelAbi,
      methods: [approve, balanceOf],
      dfk: this,
    });
    this.salesAuction = new Contract({
      address: '0x13a65B9F8039E2c032Bc022171Dc05B30c3f2892',
      abi: SalesAuctionAbi,
      methods: [bid, multiBid],
      dfk: this,
    });
    this.perilousJourney = new Contract({
      address: '0xe92db3bb6e4b21a8b9123e7fdadd887133c64bb7',
      abi: PerilousJourneyAbi,
      methods: [getHeroSubmission],
      dfk: this,
    });

    if (this.options?.pollGasPrice) {
      this.getGasPrice().then(gasPrice => (this.latestGasPrice = gasPrice));

      setInterval(async () => {
        this.latestGasPrice = await this.getGasPrice();
      }, 60000);
    }

    if (this.options?.pollNonce) {
      this.getNonce().then(nonce => (this.latestNonce = nonce));

      setInterval(async () => {
        this.latestNonce = await this.getNonce();
      }, 10000);
    }

    if (this.options?.pollJEWELBalance) {
      this.getJEWELBalance().then(balance => (this.JEWELBalance = balance));

      setInterval(async () => {
        this.JEWELBalance = await this.getJEWELBalance();
      }, 10000);
    }

    this.abiDecoder = abiDecoder;

    [(HeroAbi, JewelAbi, SalesAuctionAbi)].map(abi => this.abiDecoder.addABI(abi));
  }

  initWeb3({ providerURL, providerType }) {
    const newProvider = () =>
      providerType === 'websocket'
        ? new Web3.providers.WebsocketProvider(providerURL ?? 'wss://ws.s0.t.hmny.io/', {
            clientConfig: {
              maxReceivedFrameSize: 100000000, // bytes - default: 1MiB
              maxReceivedMessageSize: 100000000, // bytes - default: 8MiB
              keepalive: true,
              keepaliveInterval: 60000, // ms
            },
            reconnect: {
              auto: true,
              delay: 5000, // ms
              maxAttempts: 5,
              onTimeout: false,
            },
          })
        : new Web3.providers.HttpProvider(providerURL ?? 'https://rpc.s0.t.hmny.io');

    this.web3 = new Web3(newProvider());

    this.web3.eth.handleRevert = true;

    if (providerType === 'websocket') {
      const checkActive = () => {
        if (!this.web3.currentProvider.connected) {
          console.log('web3 provider is no longer connected. reconnecting...');
          this.web3.setProvider(newProvider());
        }
      };

      setInterval(checkActive, 2000);
    }
  }

  async getGasPrice() {
    return await this.web3.eth.getGasPrice();
  }

  async getNonce() {
    return await this.web3.eth.getTransactionCount(this.wallet.address);
  }

  async getJEWELBalance() {
    return await this.jewel.balanceOf(this.wallet.address);
  }

  getWallet = getWallet;

  sendSignedTransaction = sendSignedTransaction;
}
