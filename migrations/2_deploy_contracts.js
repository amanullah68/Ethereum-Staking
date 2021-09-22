const EthPool = artifacts.require("EthPool");

module.exports = function (deployer) {
  deployer.deploy(EthPool);
};
