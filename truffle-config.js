const path = require("path");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = process.env.MNEMONIC;
const alchemyKey = process.env.ALCHEMY;

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    calibration: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://api.calibration.node.glif.io/rpc/v1"
        );
      },
      network_id: 314159,
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // specify a different version of solc here
    },
  },
};
