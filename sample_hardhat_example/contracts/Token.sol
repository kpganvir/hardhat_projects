// SPDX-License-Identifier: MIT
pragma solidity  >=0.5.0 <0.9.0;

import "hardhat/console.sol";

contract Token{

string public name="hardhat_token";
string public symbol="HHT";
uint public totalSupply=1000;
address public owner;

mapping(address=> uint) balances;
constructor(){
    balances[msg.sender]=totalSupply;
    owner=msg.sender;
}

function transfer(address to, uint amount) external {
    console.log("sender has balance %s tokens",balances[msg.sender]);
    require(balances[msg.sender]>amount,"Not enought tokens");
    balances[msg.sender]-=amount; //
    balances[to]+=amount;
}
function balanceOf(address add) external view returns(uint)
{
    return balances[add];
}

}