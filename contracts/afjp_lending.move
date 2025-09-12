module afjp_crypto::afjp_lending {
    use std::signer;
    use aptos_framework::timestamp;
    use aptos_framework::coin::{Self, Coin};
    use afjp_crypto::afjp_token::AFJPToken;
    
    struct Loan has key {
        loan_id: u64,
        borrower: address,
        collateral_amount: u64,
        borrowed_amount: u64,
        interest_rate: u64,
        start_time: u64,
        due_date: u64,
        is_active: bool,
    }
    
    struct LendingPool has key {
        total_collateral: u64,
        total_borrowed: u64,
        available_liquidity: u64,
    }
    
    // Core functions
    public fun create_loan(
        account: &signer,
        collateral_amount: u64,
        borrow_amount: u64
    ): u64
    
    public fun repay_loan(account: &signer, loan_id: u64, amount: u64)
    public fun liquidate_collateral(account: &signer, loan_id: u64)
    public fun get_loan_info(loan_id: u64): (address, u64, u64, u64, u64, u64, bool)
}
