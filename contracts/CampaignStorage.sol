// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
import "./utility/Escrow.sol";

contract CampaignStorage {

    struct Campaign {
        bool active;
        bool locked;
        bool pendingVerification;
        address college;
        uint installmentAmount;
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

    mapping (address => Campaign) internal studentToCampaign;

    mapping (address => mapping(address => uint)) funderToCampaignToAmount;


    function getCampaign(address student) external view returns(Campaign memory){
        return studentToCampaign[student];
    }

}