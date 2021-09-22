const EthPool = artifacts.require("EthPool");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(EthPool, { from: accounts[0] });
};
