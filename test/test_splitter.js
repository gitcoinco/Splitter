const Splitter = require('Embark/contracts/Splitter');
const TestToken = require('Embark/contracts/TestToken');

let accounts = [];

config({
}, (_err, web3_accounts) => {
  accounts = web3_accounts;
});


contract("Splitter", () => {
  let splitter;
  let testToken;

  before(async function() {
    splitter = await Splitter.deploy({}).send();
    testToken = await TestToken.deploy({}).send();
  });

  it("should split transfer", async () => {
    let accountZeroBalance = await testToken.methods.balanceOf(accounts[0]).call();
    let accountOneBalance = await testToken.methods.balanceOf(accounts[1]).call();
    let accountTwoBalance = await testToken.methods.balanceOf(accounts[2]).call();
    let totalSupply = await testToken.methods.totalSupply().call();

    assert.strictEqual(parseInt(accountOneBalance), 0);
    assert.strictEqual(parseInt(accountTwoBalance), 0);
    assert.strictEqual(parseInt(accountZeroBalance), parseInt(totalSupply));

    let approval = await testToken.methods.approve(splitter._address, web3.utils.toHex(100)).send(accounts[0]);
    let splitTransfer = await splitter.methods.splitTransfer(accounts[1], accounts[2], 10, 90, testToken._address).send(accounts[0]);

    accountZeroBalance = await testToken.methods.balanceOf(accounts[0]).call();
    accountOneBalance = await testToken.methods.balanceOf(accounts[1]).call();
    accountTwoBalance = await testToken.methods.balanceOf(accounts[2]).call();

    assert.strictEqual(parseInt(accountOneBalance), 10);
    assert.strictEqual(parseInt(accountTwoBalance), 90);
    assert.strictEqual(parseInt(accountZeroBalance), parseInt(totalSupply) - 100)
  });
});
