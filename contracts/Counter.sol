// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter{
    uint public count;

    //Function to get the current count
    function get() public view returns (uint) {
        return count;
    }


    //Increment count by 1
    function increment() public {
        count++;
    }


    //decrement the count by 1
    function dec() public {
        if(count > 0){
            count--;
        }
    }
}