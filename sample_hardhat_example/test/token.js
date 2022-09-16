
const { expect } = require("chai");


describe("Token contract" ,function(){


it(" Deployment should assign total supply to the owner",async function(){

   
    const Token =await ethers.getContractFactory("Token"); //instance of contract
    const hardhatToken =await Token.deploy(); //deploying here, getting object
    const[owner]=await ethers.getSigners();

    const _totalSupply=await hardhatToken.totalSupply();
    const _ownerBalance=await hardhatToken.balanceOf(owner.address);
    
    
    expect(Number(_ownerBalance)).to.equal(Number(_totalSupply));

});

it(" Deployment should trasfer amount to given address frm owener balace",async function(){

   
    const Token =await ethers.getContractFactory("Token"); //instance of contract
    const hardhatToken =await Token.deploy(); //deploying here, getting object
    const[owner,add1]=await ethers.getSigners();

    
    await hardhatToken.transfer(add1.address,10);
    const _add1Balance=await hardhatToken.balanceOf(add1.address);
    const _owmerBal=await hardhatToken.balanceOf(owner.address);
    
    expect(Number(_add1Balance)).to.equal(10);
    expect(Number(_owmerBal)).to.equal(990);

});

});


