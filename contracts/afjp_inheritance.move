module afjp_crypto::afjp_inheritance {
    use std::signer;
    use std::vector;
    use aptos_framework::timestamp;
    
    struct Beneficiary has key {
        primary_beneficiary: address,
        secondary_beneficiaries: vector<address>,
        distribution_percentages: vector<u64>,
    }
    
    struct InheritanceRequest has key {
        requester: address,
        deceased: address,
        request_time: u64,
        status: u8, // 0: pending, 1: approved, 2: rejected
    }
    
    // Core functions
    public fun designate_beneficiaries(
        account: &signer,
        primary: address,
        secondary: vector<address>,
        percentages: vector<u64>
    )
    
    public fun request_inheritance(account: &signer, deceased: address): u64
    public fun execute_inheritance(account: &signer, request_id: u64)
    public fun get_beneficiaries(account: address): (address, vector<address>, vector<u64>)
}
