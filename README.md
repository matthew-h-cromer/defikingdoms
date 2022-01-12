# defikingdoms
defikingdoms is a community project that allows you to easily interact with DefiKingdoms.

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
