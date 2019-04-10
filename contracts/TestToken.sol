pragma solidity ^0.5.0;
import "contracts/ERC20.sol";
import "contracts/ERC20Detailed.sol";


contract TestToken is ERC20Detailed, ERC20 {

    constructor () public {
        _name = "TestToken";
        _symbol = "TT";
        _decimals = 18;
        _totalSupply = 1000000 * 1e18;
        _balances[msg.sender] = _totalSupply;
    }
}
