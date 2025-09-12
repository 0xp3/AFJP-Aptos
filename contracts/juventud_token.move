module afjp_crypto::juventud_token {
    use afjp_crypto::afjp_token::{Self, AFJPToken};
    use aptos_framework::coin::{Self, Coin};
    
    struct JuventudToken has key {
        name: String,
        symbol: String,
        decimals: u8,
    }
    
    // Burn AFJP to get Juventud tokens
    public fun burn_afjp_for_juventud(
        account: &signer, 
        afjp_amount: u64
    ): coin::Coin<JuventudToken>
    
    // Apply rental discounts
    public fun apply_rental_discount(
        account: &signer,
        discount_amount: u64
    ): bool
}
