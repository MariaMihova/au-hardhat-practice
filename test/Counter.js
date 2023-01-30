// import testing libraries: https://www.chaijs.com/guide/styles/
const { expect, assert } = require("chai");

// the `describe` scope encapsulates an entire test called `Test Counter`
// the `it` says the behavior that should be expected from the test

describe("Test Counter", function () {
  it("should increment the count variably by 1", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const Counter = await ethers.getContractFactory("Counter");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await Counter.deploy();

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // increment count by 1 via this function!
    await contract.increment();

    // getter for state variable counr=ter
    const newX = await contract.count();

    assert.equal(newX.toNumber(), 1);
  });

  it("should decrement the count variably by 1", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const contract = await Counter.deploy();
    await contract.deployed();
    await contract.increment();
    //decrement count by 1 via this function!
    await contract.dec();
    const newX = await contract.count();
    assert.equal(newX.toNumber(), 0);
  });
  it(" if counter less or equal to 0, counter stays 0", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const contract = await Counter.deploy();
    await contract.deployed();
    await contract.dec();
    const newX = await contract.count();
    assert.equal(newX.toNumber(), 0);
  });
});
