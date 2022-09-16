
const { expect } = require("chai");


describe("Token contract" ,function(){


it(" Deployment should assing total supply to the owner",async function(){

   
    const Token =await ethers.getContractFactory("Token"); //instance of contract
    const hardhatToken =await Token.deploy(); //deploying here, getting object
    const[owner]=await ethers.getSigners();

    const _totalSupply=await hardhatToken.totalSupply();
    const _ownerBalance=await hardhatToken.balanceOf(owner.address);
    
    
    expect(Number(_ownerBalance)).to.equal(Number(_totalSupply));

});

});


