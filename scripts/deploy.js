const hre = require('hardhat');

async function main() {
  const DocsUniverse = await hre.ethers.getContractFactory('DocsUniverse');
  const docsUniverse = await DocsUniverse.deploy();

  await docsUniverse.deployed();

  console.log('DocsUniverse deployed to:', docsUniverse.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });