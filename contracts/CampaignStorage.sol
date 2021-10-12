// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
import "./utility/Escrow.sol";

contract CampaignStorage {

    struct Campaign {
        bool active;
        bool locked;
        bool collegeVerificationReceived;
        address college;
        Installment currentInstallment;
        Deadline deadline;
        string info;
        uint target;
        uint received;
        uint balance;
    }

    struct Deadline {
        uint collegeSelectionDeadline;
        uint collegeVerificationDeadline;
    }

    struct Installment {
        bool studentApproval;
        uint amount;
    }

    mapping (address => Campaign) internal studentToCampaign;

    mapping (address => mapping(address => uint)) funderToCampaignToAmount;


    function getCampaign(address student) external view returns(Campaign memory){
        return studentToCampaign[student];
    }

}