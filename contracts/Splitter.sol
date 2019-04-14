pragma solidity ^0.5.0;
import "./ERC20.sol";


contract Splitter {
    using SafeMath for uint256;

   // the splitter is stateless so there is no constructor

    function splitTransfer(address toFirst, address toSecond, uint256 valueFirst, uint256 valueSecond,
        address tokenAddress) external {
        require(valueFirst > 0 && valueSecond > 0 && ERC20(tokenAddress).balanceOf(msg.sender) >= valueFirst.safeAdd(valueSecond));
        ERC20(tokenAddress).transferFrom(msg.sender, toFirst, valueFirst);
        ERC20(tokenAddress).transferFrom(msg.sender, toSecond, valueSecond);
    }

}
