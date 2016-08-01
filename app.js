var bitcore = require('bitcore-lib-dash');
var HDWallet = require('./lib/HDWallet');

function debugKey(hDPublicKey) {
    console.log('xpubkey: ' + hDPublicKey.xpubkey);
    for (var i = 0; i < 3; i++) {
        var nextAddress = HDWallet.GetAddress(hDPublicKey, i);
        console.log('Address m/0/' + i + ' ' + nextAddress.toString());
    }
    console.log();
}

// borrow test vectors,..
var vec1_m_dash_main = 'xpub661MyMwAqRbcGnGqkqqi5b8RaA6R6CZmCRz79UrBv3XEuCjbNNtJbs4h9hPmk27R9JY6dh7Fj2AMfRYw8fBp6CBSM39K8byPFZjJMoXQ4Zz';
var vec2_m_dash_test = 'xpub661MyMwAqRbcFUcohorhMVaPQ4uxWANGv7EWb6suHiWJ7txVdqykGPJyQLAto3t7UWaTop3oaZJbvgVgmQZuivNYWSchhSyHmZZ5wShpD71';
var vec3_m_bitc_main = 'xpub661MyMwAqRbcEgDsAWQ68WYDLGWKqD87TuMXYYwLFVQQPv7PuuKRYcwKDcHV57fhNKBcA15s9m8EDLzc5ahtnYrVgnwBRrfYfZveSguMRFP';

// some basic use cases on importing serialized xpubkeys...
console.log('IMPORT ELECTRUM-DASH MAINNET');
var xpub1 = HDWallet.ImportXPubKey(vec1_m_dash_main, bitcore.Networks.mainnet);
debugKey(xpub1);

console.log('IMPORT ELECTRUM-DASH TESTNET');
var xpub2 = HDWallet.ImportXPubKey(vec2_m_dash_test, bitcore.Networks.testnet);
debugKey(xpub2);

console.log('IMPORT ELECTRUM-BITCOIN MAINNET');
var xpub3 = HDWallet.ImportXPubKey(vec3_m_bitc_main, bitcore.Networks.mainnet);
debugKey(xpub3);

// generating using Bitcore's version values
console.log('BITCORE MAINNET');
debugKey(new bitcore.HDPrivateKey('mainnet').hdPublicKey);

console.log('BITCORE TESTNET');
debugKey(new bitcore.HDPrivateKey('testnet').hdPublicKey);

// show the version bytes Bitcore-lib-dash is using on some random keys:
console.log('Show Bitcore version on some random keys:\n==========================================');
console.log('  BITCORE MAINNET');
console.log('    xpubkey: ' + new bitcore.HDPrivateKey('mainnet').hdPublicKey);
console.log('    xprvkey: ' + new bitcore.HDPrivateKey('mainnet'));
console.log('\n  BITCORE TESTNET');
console.log('    xpubkey: ' + new bitcore.HDPrivateKey('testnet').hdPublicKey);
console.log('    xprvkey: ' + new bitcore.HDPrivateKey('testnet'));
