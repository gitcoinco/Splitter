const Splitter = require('Embark/contracts/Splitter');
const TestToken = require('Embark/contracts/TestToken');

let accounts;

config({
  contracts: {
    "Splitter": {
    },
    "TestToken": {
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("splitter", function () {
  this.timeout(0);

  it("should split transfer", async function () {
    /*
    let accountOneBalance = await TestToken.methods.balanceOf(accounts[1]).call();
    let accountTwoBalance = await TestToken.methods.balanceOf(accounts[2]).call();
    assert.strictEqual(parseInt(accountOneBalance), 0);
    assert.strictEqual(parseInt(accountTwoBalance), 0);

    let approval = await TestToken.methods.approve(Splitter.address, web3.utils.toHex(100)).send();
    let splitTransfer = await Splitter.methods.splitTransfer(accounts[1], accounts[2], 10, 90, TestToken.address)
    assert.strictEqual(parseInt(accountOneBalance), 10);
    assert.strictEqual(parseInt(accountTwoBalance), 90);
    */
  });
});
