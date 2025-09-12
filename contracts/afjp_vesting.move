module afjp_crypto::afjp_vesting {
    use std::signer;
    use aptos_framework::timestamp;
    use aptos_framework::coin::{Self, Coin};
    use afjp_crypto::afjp_token::AFJPToken;
    
    struct VestingSchedule has key {
        beneficiary: address,
        total_amount: u64,
        released_amount: u64,
        start_time: u64,
        duration: u64, // 5 years in seconds
        cliff: u64,
    }
    
    struct VestingPool has key {
        total_vested: u64,
        total_released: u64,
    }
    
    // Core functions
    public fun create_vesting_schedule(
        account: &signer,
        beneficiary: address,
        amount: u64
    )
    
    public fun release_vested_tokens(account: &signer)
    public fun get_vesting_info(beneficiary: address): (u64, u64, u64)
    public fun calculate_vested_amount(beneficiary: address): u64
}
