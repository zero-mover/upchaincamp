import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//require('hardhat-abi-exporter');
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config()

// const dotenv=require('dot');
// dotenv.config({ path: "./.env" })


const GOERLI_PRIVATE_KEY=process.env.GOERLI_PRIVATE_KEY;
const ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;



const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    localhost: {
    chainId: 31337,
    gas: 12000000,
  },
   goerli: {
    url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    accounts: [GOERLI_PRIVATE_KEY!],
  },
   },
   etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

};


export default config;
