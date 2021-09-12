// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../openzeppelin/Ownable.sol";
import "../openzeppelin/Address.sol";
import "../openzeppelin/SafeERC20.sol";

/**
 * @title Escrow
 * @dev Base escrow contract, holds funds designated for a payee until they
 * withdraw them.
 *
 * Intended usage: This contract (and derived escrow contracts) should be a
 * standalone contract, that only interacts with the contract that instantiated
 * it. That way, it is guaranteed that all tokens will be handled according to
 * the `Escrow` rules. The contract that uses the escrow as its
 * payment method should be its owner, and provide public methods redirecting
 * to the escrow's deposit and withdraw.
 */
contract Escrow is Ownable {
    using SafeERC20 for IERC20;

    event Deposit(address asset, address payee, uint256 amount);
    event Withdrawn(address asset, address payee, uint256 amount);
    event PayeeAdded(address payee, uint256 amount);
    event WithdrawalAllowed(address payee);
    event Refunded(address asset, address payer, uint amount);
    struct EscrowMetadata {
        address _asset;
    }
    address private parent;
    uint private _deposit;
    EscrowMetadata escrowMetadata;

    constructor(address asset){
        escrowMetadata = EscrowMetadata(asset);
        parent = msg.sender;
    }

    /**
     * @dev Check if msg sender is the parent contract
     **/
    modifier onlyParent() {
        require(parent == msg.sender, "Not parent contract");
        _;
    }


    function balanceOfEscrow()
        public
        view
        returns (uint256)
    {
        return _deposit;
    }


    /**
     * @dev Stores the sent amount as credit to be withdrawn by service providers.
     * @param amount The total funds sent.
     */
    function deposit(
        uint256 amount,
        address from
    ) public virtual onlyParent {
        _deposit += amount;

        IERC20(escrowMetadata._asset).safeTransferFrom(from, address(this), amount);

        emit Deposit(escrowMetadata._asset, msg.sender, amount);
    }


    /**
     * @dev Withdraw accumulated balance for a payee, forwarding all gas to the
     * recipient.
     *
     * WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities.
     * Make sure you trust the recipient, or are either following the
     * checks-effects-interactions pattern or using {ReentrancyGuard}.
     *
     * @param amount The funds to withdraw.
     * @param to The account whose funds to withdraw.
     */
    function withdraw(
        uint256 amount,
        address to
    ) public virtual onlyParent {
        require(amount <= _deposit, "Amount to be withdrawn must be less or equal to deposit");

        _deposit -= amount;

        IERC20(escrowMetadata._asset).safeTransferFrom(address(this), to, amount);

        emit Withdrawn(escrowMetadata._asset, to, amount);
    }



    /**
     * @dev Refund accumulated balance for a payer, forwarding all gas to the
     * recipient.
     *
     * WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities.
     * Make sure you trust the recipient, or are either following the
     * checks-effects-interactions pattern or using {ReentrancyGuard}.
     *
     * @param to The account whose funds to withdraw.
     */
    function refund(
        address to
    ) public virtual onlyParent {
        _deposit -= 0;

        IERC20(escrowMetadata._asset).safeTransferFrom(address(this), to, _deposit);

        emit Refunded(escrowMetadata._asset, to, _deposit);
    }

}
