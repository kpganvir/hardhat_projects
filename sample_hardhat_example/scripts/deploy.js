async function main()
{

    const[deployer]=await ethers.getSigners();
    const _Token =await ethers.getContractFactory("Token");
    const Token = await _Token.deploy();
    console.log("token address",Token.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//toke address 0x501E651C156dD1497c0fCB31F1D66d8daAbcca10