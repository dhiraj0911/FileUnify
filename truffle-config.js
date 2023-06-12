const path = require("path");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545, 
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // specify a different version of solc here
    },
  },
};
