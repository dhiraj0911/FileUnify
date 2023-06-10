const path = require('path');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });


module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: path.join(__dirname, 'src', 'artifacts'),
    cache: path.join(__dirname, 'cache'),
    sources: path.join(__dirname, 'contracts'),
    tests: path.join(__dirname, 'test')
  },
  networks: {
    hardhat: {
    },
  },
};