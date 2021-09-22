exports.constants = {
  main:
    process.env.MAIN ||
    "https://mainnet.infura.io/v3/739f9306b4c241c7b0eb163694cea5fb",
  rinkeby:
    process.env.RINKEBY ||
    "https://rinkeby.infura.io/v3/739f9306b4c241c7b0eb163694cea5fb",
  contractAddress_rinkeby:
    process.env.CONTRACT_ADDRESS_RINKEBY ||
    "0x6e5a43cf235ff75782d838473ee1d45c59143c4b",
  contractAddress_main:
    process.env.CONTRACT_ADDRESS_MAIN ||
    "0x6e5a43cf235ff75782d838473ee1d45c59143c4b",
};
