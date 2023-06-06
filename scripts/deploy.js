const { ethers } = require('ethers');

async function main() {
  const DocsUniverse = await ethers.getContractFactory("DocsUniverse");
  console.log("Deploying DocsUniverse contract...");
  const docsUniverse = await DocsUniverse.deploy();
  console.log("DocsUniverse contract deployed to:", docsUniverse.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });