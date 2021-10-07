// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
import "./utility/Escrow.sol";

contract CampaignStorage {

    struct Campaign {
        bool active;
        bool locked;
        bool collegeVerificationReceived;
        address college;
        address student;
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

    bytes32[] internal campaignIds;
    mapping (bytes32 => Campaign) internal campaignIdToCampaign;

    mapping (address => bool) internal collegeToVerified;

    mapping (address => mapping(bytes32 => uint)) funderToCampaignIdToAmount;


    function getCampaign(bytes32 campaignId) external view returns(Campaign memory){
        return campaignIdToCampaign[campaignId];
    }

    function getAllCampaignIds() external view returns(bytes32[] memory){
        return campaignIds;
    }
}