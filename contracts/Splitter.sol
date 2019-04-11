pragma solidity ^0.5.0;
import "./ERC20.sol";


contract Splitter {
   // the splitter is stateless so there is no constructor

    function splitTransfer(address toFirst, address toSecond, uint256 valueFirst, uint256 valueSecond,
        address tokenAddress) public {
        ERC20(tokenAddress).transferFrom(msg.sender, toFirst, valueFirst);
        ERC20(tokenAddress).transferFrom(msg.sender, toSecond, valueSecond);
    }

}
