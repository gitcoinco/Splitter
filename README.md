### Splitter Contract

Orchestrates transfering ERC20 tokens across 2 accounts.

#### Functions

##### splitTransfer

| type | param | info |
|-|-|-|
| *address* | toFirst | the address of the first account |
| *uint256* | valueFirst | ERC20 tokens to be sent to toFirst |
| *address* | toSecond | the address of the second account |
| *uint256* | valueSecond | ERC20 tokens to be sent to toSecond |
| *address* | tokenAddress | address of the ERC20 token |