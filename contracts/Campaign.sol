//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./CampaignStorage.sol";
import "./openzeppelin/IERC20.sol";
import "./openzeppelin/SafeERC20.sol";

contract Campaign is CampaignStorage {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    event CampaignCreation(address indexed campaignOwner, Campaign campaign);

    address private tokenAddress;
    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }
    
    /**
     * @dev Check if msg sender is the college of the campaign
     * @param student The address of the student
     **/
    modifier onlyCampaignCollege(address student) {
        require(
            studentToCampaign[student].college == msg.sender,
            "Not campaign college"
        );
        _;
    }

    /**
     * @dev This is called at the start of a campaign by the student.
     **/
    function start(address college, uint collegeSelectionDeadline, uint collegeVerificationDeadline, uint target, string memory info) external returns (bytes32) {
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
            installment,
            deadline,
            info,
            target,
            0,
            0
        );

        studentToCampaign[msg.sender] = campaign;
        emit CampaignCreation(msg.sender, campaign);
    }

    /**
     * @dev This is called by the student to add a college. It will overwrite the current college to the campaign and reset verification.
     * The college can only be added if it has been verified.
     **/
    function setCollege(address student, address college, uint collegeVerificationDeadline) external {
        //require(collegeToVerified[college] == true, "College is not verified yet");
        
        studentToCampaign[student].college = college;
        studentToCampaign[student].deadline.collegeVerificationDeadline = collegeVerificationDeadline;
    }


    /**
     * @dev This is called by the college that was selected by the student to verify that the student was accepted for college.
     **/
    function verify(address student) external onlyCampaignCollege(student) {
        studentToCampaign[student].collegeVerificationReceived = true;
    }

    /**
     * @dev This is called by the funder to fund a campaign. The funding is only successful if the campaign is verified by the college and 
     * the funded amount doesnt overshoot the target amount.
     **/
    function fund(address student, uint amount) external {
        require(amount <= studentToCampaign[student].target, "Funding amount overshoots target");

        studentToCampaign[student].received.add(amount);
        studentToCampaign[student].balance.add(amount);

        funderToCampaignToAmount[msg.sender][student] = amount;

        IERC20(tokenAddress).safeTransferFrom(msg.sender, address(this), amount);
    }


    /**
     * @dev This is called by the college to set the next installment amount
     **/
    function setInstallment(address student, uint amount) external onlyCampaignCollege(student) {
        studentToCampaign[student].currentInstallment.amount = amount;
    }

    /**
     * @dev This is called by the student to verify that the next installment to be withdrawn by the college is correct
     **/
    function verifyInstallment(address student) external {
        studentToCampaign[student].currentInstallment.studentApproval = true;
    }


    /**
     * @dev This is called by the college to withdraw an installment once verified
     **/
    function withdrawInstallment(address student, uint amount) external onlyCampaignCollege(student) {
        require (studentToCampaign[student].currentInstallment.studentApproval == true);

        studentToCampaign[student].balance.sub(amount);

        IERC20(tokenAddress).safeTransferFrom(address(this), msg.sender, amount);
    }


    /**
     * @dev This is called by the student to cancel an ongoing campaign
     **/
    function cancel(address student) external  {
        studentToCampaign[student].active = false;
        studentToCampaign[student].locked = false;
    }

    /**
     * @dev This is called by the the funder to withdraw funds if the funds are unlocked due to a violation
     **/
    function withdrawFunds(address student) external {
        require(studentToCampaign[student].locked == false, "Campaign is ongoing so locked amount cannot be withdrawn");

        IERC20(tokenAddress).safeTransferFrom(address(this), msg.sender, funderToCampaignToAmount[msg.sender][student]);
    }
}
