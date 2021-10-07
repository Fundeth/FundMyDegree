require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
// require("./tasks/faucet");
// const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      inject: false, // optional. If true, it will EXPOSE your mnemonic in your frontend code. Then it would be available as an "in-page browser wallet" / signer which can sign without confirmation.
      accounts: {
        mnemonic: "test test test test test test test test test test test junk", // test test test test test test test test test test test junk
      },
    },
    mumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/27686f41b7c9afc73b87dfa2/polygon/mumbai",
      network_id: 80001,
      confirmations: 2,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
