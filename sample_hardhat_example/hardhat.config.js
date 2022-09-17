/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const { API_URL, PRIVATE_KEY } = process.env ;
module.exports = {
  solidity: "0.8.9",
  
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    tests: "./test"
  },
 defaultNetwork: 'goerli',
  networks:{
     hardhat:{},
     goerli:{

       url:API_URL,
       accounts:[`${PRIVATE_KEY}`]
     },
     
   },
};
