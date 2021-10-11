//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./CampaignStorage.sol";
import "./openzeppelin/IERC20.sol";
import "./openzeppelin/SafeERC20.sol";

contract Campaign is CampaignStorage {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    event CampaignCreation(bytes32 indexed campaignId, address indexed campaignOwner);

    address private tokenAddress;
    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }
    
    /**
     * @dev Check if a college is verified
     * @param college The address of the college
     **/
    modifier onlyVerifiedCollege(address college) {
        require(collegeToVerified[college] == true, "Not verified");
        _;
    }

    /**
     * @dev Check if msg sender is the student
     * @param campaignId The unique identity of the campaign
     **/
    modifier onlyCampaignOwner(bytes32 campaignId) {
        require(
            campaignIdToCampaign[campaignId].student == msg.sender,
            "Not campaign owner"
        );
        _;
    }


    /**
     * @dev Check if msg sender is the college of the campaign
     * @param campaignId The unique identity of the campaign
     **/
    modifier onlyCampaignCollege(bytes32 campaignId) {
        require(
            campaignIdToCampaign[campaignId].college == msg.sender,
            "Not campaign college"
        );
        _;
    }

    /**
     * @dev This is called at the start of a campaign by the student.
     **/
    function start(address college, uint collegeSelectionDeadline, uint collegeVerificationDeadline, uint target, string memory info) external returns (bytes32) {
        console.log("hi");
        Installment memory installment = Installment(
            false,
            0
        );
        Deadline memory deadline = Deadline(
            collegeSelectionDeadline,
            collegeVerificationDeadline
        );
        Campaign memory campaign = Campaign(
            true,
            true,
            false,
            college,
            msg.sender,
            installment,
            deadline,
            info,
            target,
            0,
            0
        );

        bytes32 campaignId = keccak256(
            abi.encodePacked(address(this), campaignIds.length)
        );
        campaignIds.push(campaignId);
        campaignIdToCampaign[campaignId] = campaign;
        emit CampaignCreation(campaignId, msg.sender);
        return campaignId;
    }

    /**
     * @dev This is called by the student to add a college. It will overwrite the current college to the campaign and reset verification.
     * The college can only be added if it has been verified.
     **/
    function setCollege( bytes32 campaignId, address college, uint collegeVerificationDeadline) external onlyCampaignOwner(campaignId) {
        require(collegeToVerified[college] == true, "College is not verified yet");
        
        campaignIdToCampaign[campaignId].college = college;
        campaignIdToCampaign[campaignId].deadline.collegeVerificationDeadline = collegeVerificationDeadline;
    }


    /**
     * @dev This is called by the college that was selected by the student to verify that the student was accepted for college.
     **/
    function verify(bytes32 campaignId) external onlyCampaignCollege(campaignId) {
        campaignIdToCampaign[campaignId].collegeVerificationReceived = true;
    }

    /**
     * @dev This is called by the funder to fund a campaign. The funding is only successful if the campaign is verified by the college and 
     * the funded amount doesnt overshoot the target amount.
     **/
    function fund(bytes32 campaignId, uint amount) external {
        require(amount <= campaignIdToCampaign[campaignId].target, "Funding amount overshoots target");

        campaignIdToCampaign[campaignId].received.add(amount);
        campaignIdToCampaign[campaignId].balance.add(amount);

        funderToCampaignIdToAmount[msg.sender][campaignId] = amount;

        IERC20(tokenAddress).safeTransferFrom(msg.sender, address(this), amount);
    }


    /**
     * @dev This is called by the college to set the next installment amount
     **/
    function setInstallment(bytes32 campaignId, uint amount) external onlyCampaignCollege(campaignId) {
        campaignIdToCampaign[campaignId].currentInstallment.amount = amount;
    }

    /**
     * @dev This is called by the student to verify that the next installment to be withdrawn by the college is correct
     **/
    function verifyInstallment(bytes32 campaignId) external onlyCampaignOwner(campaignId) {
        campaignIdToCampaign[campaignId].currentInstallment.studentApproval = true;
    }


    /**
     * @dev This is called by the college to withdraw an installment once verified
     **/
    function withdrawInstallment(bytes32 campaignId, uint amount) external onlyCampaignCollege(campaignId) {
        require (campaignIdToCampaign[campaignId].currentInstallment.studentApproval == true);

        campaignIdToCampaign[campaignId].balance.sub(amount);

        IERC20(tokenAddress).safeTransferFrom(address(this), msg.sender, amount);
    }


    /**
     * @dev This is called by the student to cancel an ongoing campaign
     **/
    function cancel(bytes32 campaignId) external onlyCampaignOwner(campaignId) {
        campaignIdToCampaign[campaignId].active = false;
        campaignIdToCampaign[campaignId].locked = false;
    }


    /**
     * @dev This is called by the anyone (mostly the funders) to call a college verification deadline violation. If the deadline has been violated,
     * the campaign funds will be unlocked and the funders have the ability to withdraw funds
     **/
    function collegeVerificationDeadlineViolation(bytes32 campaignId) external returns (bytes32) {
        
    }


    /**
     * @dev This is called by the anyone (mostly the funders) to call a college selection deadline violation. If the deadline has been violated,
     * the campaign funds will be unlocked and the funders have the ability to withdraw funds
     **/
    function collegeSelectionDeadlineViolation(bytes32 campaignId) external returns (bytes32) {
        
    }


    /**
     * @dev This is called by the the funder to withdraw funds if the funds are unlocked due to a violation
     **/
    function withdrawFunds(bytes32 campaignId) external {
        require(campaignIdToCampaign[campaignId].locked == false, "Campaign is ongoing so locked amount cannot be withdrawn");

        IERC20(tokenAddress).safeTransferFrom(address(this), msg.sender, funderToCampaignIdToAmount[msg.sender][campaignId]);
    }

    function health() external pure returns(uint){
        return 1;
    }
}
