This project is build to stake Eth and distribute rewards to users which staked their eths according to their staking amount.

truffle compile 
truffle migrate --network rinkeby || truffle migrate --network main

// to get the total ethers in smart contract
cd main/
node getTotalEthers.js
