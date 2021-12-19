const { JWE, JWK } = require('node-jose')

const convertToKey = (key) => {
    return JWK.asKey(key, 'json')
}

const jweEncrypt = async (input, key) => {
    const asKey = await convertToKey(key)
    return JWE.createEncrypt({format: 'compact'}, asKey)
        .update(input)
        .final()
}

const jweDecrypt = async (input, key) => {
    const asKey = await convertToKey(key)
    return JWE.createDecrypt(asKey).decrypt(input)
}

module.exports = {
    jweEncrypt,
    jweDecrypt
}
