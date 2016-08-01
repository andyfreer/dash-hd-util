var bitcore = require('bitcore-lib-dash');
var should = require('chai').should();
var HDWallet = require('../lib/HDWallet');

var vec1_m_electrum_main = 'xpub661MyMwAqRbcGnGqkqqi5b8RaA6R6CZmCRz79UrBv3XEuCjbNNtJbs4h9hPmk27R9JY6dh7Fj2AMfRYw8fBp6CBSM39K8byPFZjJMoXQ4Zz';
var vec2_m_electrum_test = 'xpub661MyMwAqRbcFUcohorhMVaPQ4uxWANGv7EWb6suHiWJ7txVdqykGPJyQLAto3t7UWaTop3oaZJbvgVgmQZuivNYWSchhSyHmZZ5wShpD71';
var vec3_m_bitcore_main = 'drkvjJe5sJgqomjLnk5GECkZ5qhnfU2T1zUQaLZCh6kVPKk2CNSanUSxaTL9QRwDrD1WaMgzEWCZbZEL3mhQh8srYxLaGn7JDSofMWh1kJnk2yB';
var vec4_m_bitcore_test = 'DRKVrRjogj3bNiLD8UsktBH9SS9ihVNm1n7zxchfaFAP7ANmDM94J9e9Y99h6cMSipCvAXDcAdDvyxEgJqmnb3iva5CZq9Giwzd1eJ4Bwbd5MFed';

var vec1_m_electrum_main_imported = 'drkvjJe5sJgqomjLowaRpSBJT3LNnwRS97xHgAoiJVNxUeLY2YXKtUVfzBfV4sGQCc12HbghguTPxG2qoH8UX11k9eHxEPQQ3BqZuM7CtUuGXgq';
var vec2_m_electrum_test_imported = 'DRKVrRjogj3bNiLD8TpH8tmaVQBYhozpHGdqpYDMH1KetGhRNMHBUNtGuWCGGTT17r1dRUJEwiZU8mG4p2ZiruKky3UMXttn1XxHGET8fCmXcea8';

/* 12.1 (proposed) Test Vectors
var vec1_m_electrum_main_imported = 'dpubZ9169KDAEUnyp5Su4XRCH1BPNk3hDtbWdcneDWP79fRAj3xjuHmyKSmc4Dr9rHxc61KJqaP4VSQtnHggZ1LjFEwozR3G6z9rnDv1E9BVzMW';
var vec2_m_electrum_test_imported = 'DPUBxioaFQK3tpXxS6Jkp1wVViuYgXkiHMjdYJ7ZCEkivzJEt8fLzi1cFkcFQuZ6BfpNBE22LVcKpuMqNWyqbBuP9w28hURaFqLMoW98s5RJwj75';
*/

var vec1_m00_electrum_main = 'Xh1m1TksRAsxenqSob9m6hHKSqjV7Nim5u';
var vec1_m01_electrum_main = 'XeFVybHHsxfFDqJ27tB7JmgxbeVVV2q7DZ';
var vec1_m02_electrum_main = 'XcPfG1a1ZhR8nEGvjx57CVM1t5MNFR21q6';

var vec2_m00_electrum_test = 'ygewzEdUbAi3omVn361rSZhSBHCLrdocPS';
var vec2_m01_electrum_test = 'yLQ8AGDikXKhQ7jgKxCYzroYP6e8aGnAEN';
var vec2_m02_electrum_test = 'ygsTWo3jVN5vYYbYjE2Y6p4Cud6uJWGMzm';

var vec3_m00_bitcore_main = 'XwT9rRHbqXHPhN2H6G9ku9nnQjfxW3ytJu';
var vec3_m01_bitcore_main = 'XjJzo1LpX4f82hh6oVLeKnJpBXiuiGRztd';
var vec3_m02_bitcore_main = 'XrkPNVG5Hc1zs9ssdXMfWu3jAdegQSH8bD';

var vec4_m00_bitcore_test = 'yZRUMShkkTCwyBpnRZFzdv59oBsfmQmbaP';
var vec4_m01_bitcore_test = 'yQxHgSs42wgpsYJYhmd8EMKajEcYBBdxyv';
var vec4_m02_bitcore_test = 'yZFp4SwmqPPULcGS2hA2mi9659mRxy2nNT';

describe('IMPORT ELECTRUM-DASH MAINNET', function () {
    var hDPublicKey = HDWallet.ImportXPubKey(vec1_m_electrum_main, bitcore.Networks.mainnet);
    it('Import Serialized XPubKey', function () {
        hDPublicKey.xpubkey.should.equal(vec1_m_electrum_main_imported);
    });
    it('Derive User #1 Address (m/0/0)', function () {
        HDWallet.GetAddress(hDPublicKey, 0).toString().should.equal(vec1_m00_electrum_main);
    });
    it('Derive User #2 Address (m/0/1)', function () {
        HDWallet.GetAddress(hDPublicKey, 1).toString().should.equal(vec1_m01_electrum_main);
    });
    it('Derive User #3 Address (m/0/2)', function () {
        HDWallet.GetAddress(hDPublicKey, 2).toString().should.equal(vec1_m02_electrum_main);
    });
});

describe('IMPORT ELECTRUM-DASH TESTNET', function () {
    var hDPublicKey = HDWallet.ImportXPubKey(vec2_m_electrum_test, bitcore.Networks.testnet);
    it('Import Serialized XPubKey', function () {
        hDPublicKey.xpubkey.should.equal(vec2_m_electrum_test_imported);
    });
    it('Derive User #1 Address (m/0/0)', function () {
        HDWallet.GetAddress(hDPublicKey, 0).toString().should.equal(vec2_m00_electrum_test);
    });
    it('Derive User #2 Address (m/0/1)', function () {
        HDWallet.GetAddress(hDPublicKey, 1).toString().should.equal(vec2_m01_electrum_test);
    });
    it('Derive User #3 Address (m/0/2)', function () {
        HDWallet.GetAddress(hDPublicKey, 2).toString().should.equal(vec2_m02_electrum_test);
    });
});

describe('IMPORT BITCORE-DASH MAINNET', function () {
    var hDPublicKey = HDWallet.ImportXPubKey(vec3_m_bitcore_main, bitcore.Networks.mainnet);
    it('Import Serialized XPubKey', function () {
        bitcore.HDPublicKey.isValidSerialized(hDPublicKey.xpubkey, bitcore.Networks.mainnet).should.equal(true);
    });
    it('Derive User #1 Address (m/0/0)', function () {
        HDWallet.GetAddress(hDPublicKey, 0).toString().should.equal(vec3_m00_bitcore_main);
    });
    it('Derive User #2 Address (m/0/1)', function () {
        HDWallet.GetAddress(hDPublicKey, 1).toString().should.equal(vec3_m01_bitcore_main);
    });
    it('Derive User #3 Address (m/0/2)', function () {
        HDWallet.GetAddress(hDPublicKey, 2).toString().should.equal(vec3_m02_bitcore_main);
    });
});

describe('IMPORT BITCORE-DASH TESTNET', function () {
    var hDPublicKey = HDWallet.ImportXPubKey(vec4_m_bitcore_test, bitcore.Networks.testnet);
    it('Import Serialized XPubKey', function () {
        bitcore.HDPublicKey.isValidSerialized(hDPublicKey.xpubkey, bitcore.Networks.testnet).should.equal(true);
    });
    it('Derive User #1 Address (m/0/0)', function () {
        HDWallet.GetAddress(hDPublicKey, 0).toString().should.equal(vec4_m00_bitcore_test);
    });
    it('Derive User #2 Address (m/0/1)', function () {
        HDWallet.GetAddress(hDPublicKey, 1).toString().should.equal(vec4_m01_bitcore_test);
    });
    it('Derive User #3 Address (m/0/2)', function () {
        HDWallet.GetAddress(hDPublicKey, 2).toString().should.equal(vec4_m02_bitcore_test);
    });
});
