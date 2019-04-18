pragma solidity ^0.5.0;
import "./inherited/ERC20.sol";

/**
 * Orchestrates transfering ERC20 tokens across 2 accounts.
 *
 * The splitter is stateless so there is no constructor.
 */
contract Splitter {

    /**
     * @param toFirst - the address of the first account
     * @param valueFirst - ERC20 tokens to be sent to toFirst
     * @param toSecond - the address of the second account
     * @param valueSecond - ERC20 tokens to be sent to toSecond
     * @param tokenAddress - address of the ERC20 token
    */
    function splitTransfer(
        address toFirst,
        address toSecond,
        uint256 valueFirst,
        uint256 valueSecond,
        address tokenAddress
    )
        external
    {
        ERC20(tokenAddress).transferFrom(msg.sender, toFirst, valueFirst);
        ERC20(tokenAddress).transferFrom(msg.sender, toSecond, valueSecond);
    }

}
