pragma solidity ^0.4.11;


contract Reward {

    /**
     * A {Payment} represents the value of a referral. This is the incentive offered by a campaign to both.
     */
    struct Payment {
        /// GigaBytes, Fiat Currency (USD), Tokens etc.
        string units;
        /// The amount being offered
        uint amount;
    }

    /**
     *
     */
    function Reward() {
    }

}