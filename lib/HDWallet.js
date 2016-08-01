'use strict';

var bitcore = require('bitcore-lib-dash');

module.exports = {

    /**
     * Import a BIP32 serialized master extended public key
     *
     * This is needed due to different version bytes used
     * in Dash, e.g. 'xpub' for Electrum, 'drkv' in Core, etc
     *
     * @arg
     * @network
     */
    ImportXPubKey: function (arg, network) {

        // deserialize
        var decoded = bitcore.encoding.Base58Check.decode(arg);

        // rebuild buffers
        var buffers = {
            //replace the version buffer
            version: bitcore.util.buffer.integerAsBuffer(
                network ? network.xpubkey : bitcore.Networks.mainnet.xpubkey
            ),
            depth: decoded.slice(bitcore.HDPublicKey.DepthStart, bitcore.HDPublicKey.DepthEnd),
            parentFingerPrint: decoded.slice(bitcore.HDPublicKey.ParentFingerPrintStart,
                bitcore.HDPublicKey.ParentFingerPrintEnd),
            childIndex: decoded.slice(bitcore.HDPublicKey.ChildIndexStart, bitcore.HDPublicKey.ChildIndexEnd),
            chainCode: decoded.slice(bitcore.HDPublicKey.ChainCodeStart, bitcore.HDPublicKey.ChainCodeEnd),
            publicKey: decoded.slice(bitcore.HDPublicKey.PublicKeyStart, bitcore.HDPublicKey.PublicKeyEnd),
            checksum: decoded.slice(bitcore.HDPublicKey.ChecksumStart, bitcore.HDPublicKey.ChecksumEnd),
            xpubkey: arg
        };
        return new bitcore.HDPublicKey(buffers);
    },

    /**
     * Get an address by deriving the index m/0/i from
     * the supplied master public key
     *
     * This is the path for 'receiving' addresses
     * in Electrum
     *
     * @masterPubkey
     * @index
     */
    GetAddress: function (hDPublicKey, index) {
        var c = hDPublicKey.derive(0).derive(index).publicKey;
        return new bitcore.Address(c, hDPublicKey.network);
    }
};