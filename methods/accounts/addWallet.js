/**
 * Add a wallet which can be used later to sign transactions
 */
export default function (privateKey) {
  try {
    // Get the account from the private key
    const account = this.web3.eth.accounts.privateKeyToAccount(privateKey);

    // Store the address for later use
    this.walletAddress = account.address;

    // Add the account to the wallet
    this.web3.eth.accounts.wallet.add(account);

    return account.address;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
