module afjp_crypto::ladrillo_token {
    use std::string::String;
    use std::vector;
    use aptos_framework::coin::{Self, Coin};
    
    struct LadrilloNFT has key, store {
        property_id: u64,
        property_type: String,
        location: String,
        total_fractions: u64,
        rental_income_per_fraction: u64,
        owner: address,
    }
    
    struct LadrilloFractionalToken has key {
        name: String,
        symbol: String,
        decimals: u8,
        property_id: u64,
    }
    
    // Burn AFJP for Ladrillo fractions
    public fun burn_afjp_for_ladrillo(
        account: &signer,
        afjp_amount: u64,
        property_id: u64,
        fractions: u64
    )
    
    // Claim rental income
    public fun claim_rental_income(
        account: &signer,
        property_id: u64
    ): coin::Coin<AFJPToken>
}
