module afjp_crypto::afjp_token {
    use std::signer;
    use aptos_framework::coin::{Self, Coin};
    use aptos_framework::account;
    use aptos_framework::timestamp;
    
    struct AFJPToken has key {
        name: String,
        symbol: String,
        decimals: u8,
        total_supply: u64,
        burned_amount: u64,
    }
    
    struct Capability has key {
        mint_cap: coin::MintCapability<AFJPToken>,
        burn_cap: coin::BurnCapability<AFJPToken>,
        freeze_cap: coin::FreezeCapability<AFJPToken>,
    }
    
    // Core functions
    public fun initialize(account: &signer)
    public fun mint(account: &signer, amount: u64)
    public fun burn(account: &signer, amount: u64)
    public fun transfer(from: &signer, to: address, amount: u64)
    public fun get_total_supply(): u64
    public fun get_burned_amount(): u64
}
