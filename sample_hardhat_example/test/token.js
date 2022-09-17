
const { expect } = require("chai");

describe("Token Contract" ,function(){

   let Token,  hardhatToken,add1,owner,add2;
   beforeEach(async function(){

       Token =await ethers.getContractFactory("Token"); //instance of contract
       hardhatToken =await Token.deploy(); //deploying here, getting object
      [owner,add1,add2]=await ethers.getSigners();

   });
   describe("Deployment ",function(){

      it("Deployment should assign total supply to the owner",async function(){
         const _totalSupply=await hardhatToken.totalSupply();
         const _ownerBalance=await hardhatToken.balanceOf(owner.address);
          expect(Number(_ownerBalance)).to.equal(Number(_totalSupply));

      });

      it("Contract should set right owner",async function(){
         
          expect(await hardhatToken.owner()).to.equal(owner.address);

      });

      it("Contract Transfer function transfer amount to given address",async function(){

        await hardhatToken.transfer(add1.address,10);
        const _add1Balance=await hardhatToken.balanceOf(add1.address);
        const _owmerBal=await hardhatToken.balanceOf(owner.address);
        
        expect(Number(_add1Balance)).to.equal(10);
        expect(Number(_owmerBal)).to.equal(990);

 //now add1=10..transfer 5 to add2 from add1

       await hardhatToken.connect(add1).transfer(add2.address,5);
       const _add1Balance2=await hardhatToken.balanceOf(add2.address);
       expect(Number(_add1Balance2)).to.equal(5);

      });

      it("Transfer should fail if sender dont have sufficient balance",async function(){
        
        
         const initialOwnerBalance=await hardhatToken.balanceOf(add1.address);
         
       await expect( hardhatToken.connect(add1).transfer(add2.address,25)).to.be.revertedWith("Not enought tokens");
          expect (await hardhatToken.balanceOf(add1.address)).to.equal(initialOwnerBalance);
      });



   });



});