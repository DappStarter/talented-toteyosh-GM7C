require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind mistake inner cloth forward travel'; 
let testAccounts = [
"0x18e09cdb9908b8f44b0e9c8313972034f79be0595e14912b9f879bf59a11f02b",
"0x95a61aa4e6e687fb560b45f4ca765c5e09779ea0db6075a10961fae2d367a7fe",
"0x7ef5d5f956ca1c55dcc8afb847b65f21baada2589e671f1906e077e0cb0fa3e1",
"0x19b9813419e83191e0d594580c4a368b616721d64153308757cb2a68e378917d",
"0x52049e5441052243c4af7e23ec5b1236426d8d1b0fe5a47bc4af5d90b6707c8f",
"0x9ab31f0be53e7c81253d903905a635371ec943d08cd21de599e03caa0b745bc4",
"0xe2432f28d718844389e7ae64f2277ba74f90c77e7cf30456ad422d83ae5018b5",
"0xd66bc16c683d481b2407b62ec499f97b321b8ed48d706342215373007b6b8160",
"0x222e0b8ba4ce2484efbdb151ac828d113e288a86d420b66942f7910a03279de5",
"0x67776c161a2d3c727e9ea66defdde417e51cdd294b3b55487a737790afb4aa5a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


