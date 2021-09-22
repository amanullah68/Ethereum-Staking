const { constants } = require("../enum/constants");
const Web3 = require("web3");
const web3 = new Web3(constants.rinkeby);
const contractABI = require("../build/contracts/ethPool.json");

let getTotalEth = async () => {
  const contract = new web3.eth.Contract(
    contractABI.abi,
    constants.contractAddress_rinkeby
  );

  let totalEthers = await contract.methods.getTotalDeposit().call();
  console.log("Total Ethers in Smart Contract:", totalEthers);
};

getTotalEth();
