module afjp_crypto::afjp_staking {
    use std::signer;
    use aptos_framework::timestamp;
    use aptos_framework::coin::{Self, Coin};
    use afjp_crypto::afjp_token::AFJPToken;
    
    struct StakingPool has key {
        total_staked: u64,
        total_rewards: u64,
        reward_rate: u64,
        last_update_time: u64,
    }
    
    struct StakerInfo has key {
        staked_amount: u64,
        reward_debt: u64,
        last_claim_time: u64,
    }
    
    // Core functions
    public fun stake_tokens(account: &signer, amount: u64)
    public fun unstake_tokens(account: &signer, amount: u64)
    public fun claim_rewards(account: &signer)
    public fun add_rewards(account: &signer, amount: u64)
    public fun calculate_rewards(staker: address): u64
}
