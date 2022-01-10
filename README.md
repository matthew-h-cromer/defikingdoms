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
    privateKey: '',
  },
});
```

### Call dfk methods
```javascript
dfk.salesAuction.bid({
  tokenId,
  bidAmount,
  options
})
```

### Get history
```javascript
dfk.getHistory({
  wallet,
  options
})
```

### Subscribe to events
```javascript
dfk.subscribe({
  events,
  callback,
  options
})
```
