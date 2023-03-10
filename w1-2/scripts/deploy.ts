import { ethers,network } from "hardhat";
// import constant from './constants.json';

const constant=require('./constants.json');

async function main() {
  const netwotkData=constant[network.name];
  
  const Count = await ethers.getContractFactory("Count");
  const count = await Count.deploy(netwotkData.INIT);

  await count.deployed();

  console.log(
    `deployed to ${count.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
