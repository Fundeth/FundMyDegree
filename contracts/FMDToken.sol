pragma solidity >=0.8.0 <0.9.0;

import "./openzeppelin/ERC20.sol";

contract FMDToken is ERC20 {
    address deployerAddress;
    constructor() ERC20("Demo Spect", "DSpect"){
        deployerAddress = msg.sender;
        _mint(msg.sender, 1_000_000_000_000_000_000_000_000); //1 Billion
    }

    mapping(address => bool) public alreadyMinted;

    function mintOnlyOnceAtWill() public {
        /*TODO: Only for demo purposes for now. REMOVE!!! */

        require(alreadyMinted[msg.sender] == false, "Already minted tokens once from this address");
        
        // _mint(msg.sender, 1000000000000000); 
        transferFrom(deployerAddress, msg.sender,1_000_000_000_000_000_000_000);
        alreadyMinted[msg.sender] = true;
    }


    function hasAlreadyMinted() public view returns(bool){
        return alreadyMinted[msg.sender];
    }
}
