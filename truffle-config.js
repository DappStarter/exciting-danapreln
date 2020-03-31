require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain method hover argue broken sleep'; 
let testAccounts = [
"0xfdbfc04c8fcfd614df2c0bc52c7d70d903e2546ea6ab3807b49ee169f912ff60",
"0xb6af894fb57e3e8d7b0b237dd19b9997eaec0fda47e86fcc72ce9c5c8f6603f9",
"0xd27a8c6c9a6894b4a0275ef7e92bf08c0c242170b7382d6ee5988897d420945a",
"0x7d548e761141d93354a95cf1738c5b44e87ebc1fc71db9e347ddd67f56590edb",
"0x28c28d9841d5e2b595d520957ca545274238730b5e88bca5ffd861bd9c730b60",
"0x6958798f14a42ac1afd005ae48a0b819632cf7568283e5a4c3496acff6168b7f",
"0x73edc3544303930a351b214f85e6746b66affd7d98efd7841a4579f298872251",
"0x2ed3bcf5bcbc92351c5fd6c03b306c1cd3ecfde8421f800480621929e93b9bd2",
"0x75ae85ff7c3c38e90b034fc2b5f0a8f5f3152d71c67addf068b98c10cc5b2f67",
"0x9a1fbb9ee73edf2439556011514d123d8a4cf7e7ebeab05095ba24e06a33bbf2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
