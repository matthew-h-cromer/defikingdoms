export default function (wallet) {
  const { privateKey } = wallet ?? {};

  if (!privateKey) return wallet;

  const account = this.web3.eth.accounts.privateKeyToAccount(privateKey);

  return account;
}
