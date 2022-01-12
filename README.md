# defikingdoms
Allows you to easily interact with DefiKingdoms.

Tip jar   `0x17ddb8a6d7099000491a5fced09447847179f993`


## Usage

### Import
```javascript
import DFK from 'defikingdoms'
```

### Instantiate a dfk object
```javascript
const dfk = new DFK({
  wallet: {
    privateKey: '<YOUR_PRIVATE_KEY>',
  },
});
```

### Bid on a hero
```javascript
// first, you must approve the jewel
const approveReceipt = await dfk.jewel.approve({
  address: dfk.salesAuction.address,
  amount: '<AMOUNT>',
});

// then, you can bid on the hero
const bidReceipt = await dfk.salesAuction.bid({
  tokenId: '<TOKEN_ID>',
  amount: '<AMOUNT>',
});
```

### Subscribe to events
```javascript
dfk.salesAuction.web3.events.AuctionCreated(async function (error, event) {
  // do something with event
};
```
